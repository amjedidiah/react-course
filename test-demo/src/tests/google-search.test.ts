import googleSearch, { Sites } from "../scripts/google-search";

const dbMock = [
  "dog.com",
  "cheesepuff.com",
  "disney.com",
  "dogpictures.com",
] as unknown as Sites;

describe("googleSearch", () => {
  const testtest = googleSearch("testtest", dbMock);

  it("this is a test", () => {
    expect("hello").toBe("hello");
    testtest;
  });

  it("is searching google", () => {
    expect(testtest).toEqual([]);
    expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogpictures.com"]);
  });

  it("work with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
