import { Monster } from "../../App";

export default function filterMonsters(
  monsters: Monster[] | null,
  searchString: string = ""
) {
  if (!monsters || (monsters && !monsters.length)) return [];

  return monsters.filter((monster) =>
    (monster?.name || "").toLowerCase().includes(searchString.toLowerCase())
  );
}