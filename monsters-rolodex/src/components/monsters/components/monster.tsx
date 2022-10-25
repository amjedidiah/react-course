import { memo } from "react";
import { Monster as MonsterType } from "../../../App";
import "./monster.css";

export function Monster({ name, id, email }: MonsterType) {
  return (
    <div className="card-container" data-testid="monster-card">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default memo(Monster);