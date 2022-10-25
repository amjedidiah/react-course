/* eslint-disable testing-library/no-debugging-utils */
import { screen, render, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import {
  mockMonstersSuccess,
  mockMonstersError,
} from "./components/monsters/mock-data";

const mockFetch = jest.fn() as jest.Mock;
global.fetch = mockFetch;

beforeEach(() => {
  mockFetch.mockReturnValue(
    Promise.resolve({
      json: () => Promise.resolve(mockMonstersSuccess),
    })
  );
});

afterEach(cleanup);

const renderAppAsync = async () => {
  render(<App />);

  expect(screen.getByText(/fetching monsters/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText(/rolodex/i)).toBeInTheDocument();
  });
};

describe("App", () => {
  it("renders error message when fetch fails", async () => {
    expect.assertions(2);

    mockFetch.mockReturnValue(
      Promise.resolve({
        json: () => Promise.reject(mockMonstersError),
      })
    );

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/error fetching monsters/i)).toBeInTheDocument();
    });

    expect(screen).toMatchSnapshot();
  });

  it("renders Searchbox and MonsterList after fetching monsters", async () => {
    expect.assertions(6);

    await renderAppAsync();

    expect(screen).toMatchSnapshot();
    expect(
      screen.getByRole("heading", {
        name: /rolodex/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(screen.getByTestId("monsterlist")).toBeInTheDocument();
  });

  it("searches Monsters correctly for none found", async () => {
    expect.assertions(4);

    await renderAppAsync();

    await userEvent.setup().type(screen.getByRole("searchbox"), `{backspace}a`);

    expect(screen).toMatchSnapshot();
    expect(screen.queryByTestId("monster-card")).toBeNull();
  });

  it("searches Monsters correctly for at least 1 found", async () => {
    expect.assertions(4);

    await renderAppAsync();

    await userEvent
      .setup()
      .type(screen.getByRole("searchbox"), `{backspace}test`);

    expect(screen).toMatchSnapshot();
    expect(screen.getAllByTestId("monster-card").length).toBeGreaterThanOrEqual(
      1
    );
  });
});
