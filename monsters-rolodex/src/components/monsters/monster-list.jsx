import PropTypes from "prop-types";
import Monster from "./components/monster";
import "./monster-list.css";

export default function MonsterList({ filteredMonsters }) {
    if (!filteredMonsters.length) {
        return <h1>No monsters to display</h1>;
    }

    return (
        <div className="card-list">
            {filteredMonsters.map((monster) => (
                <Monster key={monster.id} {...monster} />
            ))}
        </div>
    );
}

MonsterList.propTypes = {
    filteredMonsters: PropTypes.array.isRequired,
};
