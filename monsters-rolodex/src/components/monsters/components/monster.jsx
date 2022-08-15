import PropTypes from "prop-types";
import "./monster.css"

export default function Monster({ name, id, email }) {
    return <div className="card-container">
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
}

Monster.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired
}