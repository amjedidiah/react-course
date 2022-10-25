import { Monster } from "../../App";

type ResponseType = {
  data: Monster[] | null;
  message: string;
};

async function fetchData<T>(url: string): Promise<T> {
  const response = { data: null } as ResponseType;

  try {
    const res = await fetch(url, {
      headers: { timeout: "3000" },
    });

    response.data = await res.json();
    response.message = "Monsters fetched successfully";
  } catch (error) {
    console.log(error);
    response.message = "Error fetching monsters";
  } finally {
    return response as T;
  }
}

export default async function fetchMonsters() {
  const response = await fetchData<ResponseType>(
    "https://jsonplaceholder.typicode.com/users"
  );

  return response;
}