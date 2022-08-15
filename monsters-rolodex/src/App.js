import { useEffect, useState, useMemo } from "react";
import MonsterList from "./components/monsters/monster-list";
import SearchBox from "./components/search-box/search-box";
import "./App.css"

export default function App() {
  const [monsters, setMonsters] = useState(null);
  const [searchString, setSearchString] = useState("");
  const filteredMonsters = useMemo(() => {
    return monsters
      ? monsters.filter((monster) =>
        (monster?.name || "").toLowerCase().includes(searchString)
      )
      : [];
  }, [monsters, searchString]);

  const search = (e) => setSearchString(e.target.value.toLowerCase());

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((monsters) => setMonsters(monsters));
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
