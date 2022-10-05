import React, { useEffect, useState, useMemo } from "react";
import MonsterList from "./components/monsters/monster-list";
import SearchBox from "./components/search-box/search-box";
import "./App.css";
import { fetchData } from "./utils";

export type Monster = {
    id: number;
    name: string;
    email: string;
}

export default function App() {
  const [monsters, setMonsters] = useState<Monster[] | null>(null);
  const [searchString, setSearchString] = useState("");
  const filteredMonsters = useMemo(() => {
    return monsters
      ? monsters.filter((monster) =>
          (monster?.name || "").toLowerCase().includes(searchString)
        )
      : [];
  }, [monsters, searchString]);

  const search = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSearchString(e.target.value.toLowerCase());

  useEffect(() => {
    const fetchMonsters = async () => {
      const monsters = await fetchData<Monster[]>("https://jsonplaceholder.typicode.com/users");
      setMonsters(monsters);
    }

    fetchMonsters();
  }, []);

  if (!monsters) {
    return null;
  }

  return (
    <div className="App">
      <h1 className="app-title">Rolodex</h1>
      <SearchBox
        searchString={searchString}
        onChangeHandler={search}
        placeholder="Search monsters..."
        className="monsters-search-box"
      />
      <MonsterList filteredMonsters={filteredMonsters} />
    </div>
  );
}
