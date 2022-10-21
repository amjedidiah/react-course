import fetch from "node-fetch";

export type User = {
  name: string;
  age: number;
  email: string;
};

export async function getPeople(fetch?): Promise<User[]> {
  try {
    if (!fetch) throw new Error("fetch is not defined");

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
