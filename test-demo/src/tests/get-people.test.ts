import fetch from "node-fetch";
import { getPeople, User } from "../scripts/get-people";

// mock fetch
const mockFetch = jest.fn() as jest.Mock;
mockFetch.mockReturnValue(
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          name: "Luke Skywalker",
          age: 17,
          email: "luke.skywalker@example.com",
        },
      ]),
  })
);

describe("getPeople", () => {
  it("should not call fetch", () => {
    expect.assertions(1);

    getPeople();
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it("should call fetch", () => {
    expect.assertions(1);

    getPeople(mockFetch);
    expect(mockFetch).toHaveBeenCalled();
  });

  it("should call mock fetch with the right url", () => {
    expect.assertions(1);

    getPeople(mockFetch);
    expect(mockFetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
  });

  it("should return single people data from mock fetch", () => {
    expect.assertions(2);

    return getPeople(mockFetch).then((people: User[]) => {
      expect(people.length).toBeLessThanOrEqual(1);
      expect(people).toEqual(expect.any(Array<User>));
    });
  });

  it("should return people data from fetch", (done) => {
    expect.assertions(2);

    getPeople(fetch).then((people: User[]) => {
      expect(people.length).toBeLessThanOrEqual(10);
      expect(people).toEqual(expect.any(Array<User>));
      done();
    });
  });
});
