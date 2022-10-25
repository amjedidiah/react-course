import { ChangeEvent, useEffect, useState, useMemo } from "react";
import MonsterList from "./components/monsters/monster-list";
import SearchBox from "./components/search-box/search-box";
import "./App.css";
import fetchMonsters from "./util/fetch-monsters/fetch-monsters";
import filterMonsters from "./util/filter-monsters/filter-monsters";

export type Monster = {
  id: number;
  name: string;
  email: string;
};

export default function App() {
  const [monsters, setMonsters] = useState<Monster[] | null>(null);
  const [monstersMessage, setMonstersMessage] = useState(
    "fetching monsters..."
  );
  const [searchString, setSearchString] = useState("");
  const filteredMonsters = useMemo(
    () => filterMonsters(monsters, searchString),
    [monsters, searchString]
  );

  const search = (e: ChangeEvent<HTMLInputElement>): void =>
    setSearchString(e.target.value.toLowerCase());

  useEffect(() => {
    fetchMonsters().then(({ data, message }) => {
      setMonsters(data);
      setMonstersMessage(message);
    });
  }, []);

  if (!monsters) return <p>{monstersMessage}</p>;

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
