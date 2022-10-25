import filterMonsters from "./filter-monsters";
import { mockMonstersSuccess } from "../../components/monsters/mock-data";

describe("Filter Monsters", () => {
  it("works for empty searchString", () => {
    expect.assertions(1);
    const filteredMonsters = filterMonsters(mockMonstersSuccess);

    expect(filteredMonsters).toHaveLength(3);
  });

  it("works for uppercase search string", () => {
    expect.assertions(1);
    const filteredMonsters = filterMonsters(mockMonstersSuccess, "TEST");

    expect(filteredMonsters.length).toBeGreaterThanOrEqual(1);
  });

  it("works for empty monsters array", () => {
    expect.assertions(1);
    const filteredMonsters = filterMonsters([], "TEST");

    expect(filteredMonsters.length).toEqual(0);
  });
});