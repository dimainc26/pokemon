import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { Card } from "../components/Card";

export const HomePage = () => {
    const [p, setP] = useState();

    const [isModalOpen, setIsModalOpen] = useState(true);

    const handlePokemonChange = (pokemonData) => {
        setP(pokemonData);
        setIsModalOpen(true); 
    };

    return (
        <div className="container">
            <SearchBar onChange={handlePokemonChange} />
            {p && isModalOpen ? <Card pokemon={p} closeModal={() => setIsModalOpen(false)} /> : "cerca per tipo"}
        </div>
    );
};
