import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { Card } from "../components/Card";
import { Filter } from "../components/Filter";

import { Link, Route } from "react-router-dom";

export const HomePage = () => {
    const [p, setP] = useState();

    const [isModalOpen, setIsModalOpen] = useState(true);

    const handlePokemonChange = (pokemonData) => {
        setP(pokemonData);
        setIsModalOpen(true); 
    };

    return (
        <div className="container">
            <div className="header">
            </div>
           
            <SearchBar onChange={handlePokemonChange} />
            {p && isModalOpen ? <Card pokemon={p} closeModal={() => setIsModalOpen(false)} /> : <Filter />}
        </div>
    );
};
