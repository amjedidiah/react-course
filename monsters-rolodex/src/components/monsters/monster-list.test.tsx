import { render, screen } from "@testing-library/react";
import MonsterList from "./monster-list";
import { mockMonstersSuccess } from "./mock-data";

describe("MonsterList", () => {
  it("should render successfully for monsters", () => {
    expect.assertions(2);

    render(<MonsterList filteredMonsters={mockMonstersSuccess} />);

    expect(screen).toMatchSnapshot();
    expect(screen.getAllByTestId("monster-card")).toHaveLength(
      mockMonstersSuccess.length
    );
  });

  it("should render no monsters message for empty monsters array", () => {
    expect.assertions(2);

    render(<MonsterList filteredMonsters={[]} />);

    expect(screen).toMatchSnapshot();
    expect(
      screen.getByRole("heading", {
        name: /no monsters to display/i,
      })
    ).toBeInTheDocument();
  });
});