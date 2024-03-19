import { useState } from "react";
import axios from "axios";

const SearchBar = (props) => {
    const [input, setInput] = useState("raichu");

    const handleChange = (value) => {
        setInput(value);
    };

    const [, setPokemon] = useState();

    const fetchData = () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/" + input)
            .then((response) => {
                props.onChange(response.data);
                setPokemon(response.data.results);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    };

    return (
        <div className="search-box">
            <input
                type="text"
                className="search-input"
                placeholder="Cerca il Pokemon..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            <button onClick={fetchData} className="search-button">VAI</button>
        </div>
    );
};
export default SearchBar;
