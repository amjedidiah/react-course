import Monster from "./components/monster";
import "./monster-list.css";
import { Monster as MonsterType } from "../../App";

type MonsterListProps = {
  filteredMonsters: MonsterType[];
};

export default function MonsterList({ filteredMonsters }: MonsterListProps) {
  if (!filteredMonsters.length) {
    return <h1>No monsters to display</h1>;
  }

  return (
    <div className="card-list" data-testid="monsterlist">
      {filteredMonsters.map((monster) => (
        <Monster key={monster.id} {...monster} />
      ))}
    </div>
  );
}