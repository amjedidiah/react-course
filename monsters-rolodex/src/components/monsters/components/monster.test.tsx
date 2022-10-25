import { render, screen } from "@testing-library/react";
import Monster from "./monster";
import { mockMonstersSuccess } from "../mock-data";

const monster = mockMonstersSuccess[0];

describe("Monster", () => {
  it("should render successfully", () => {
    expect.assertions(4);

    render(<Monster {...monster} />);

    expect(screen).toMatchSnapshot();
    expect(
      screen.getByRole("heading", {
        name: /test monster/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/monster@gmail\.com/i)).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: /monster test monster/i,
      })
    ).toBeTruthy();
  });
});