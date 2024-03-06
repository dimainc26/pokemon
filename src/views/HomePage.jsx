import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { Card } from "../components/Card";

export const HomePage = () => {
    const [p, setP] = useState();
    return (
        <div>
            <h1>Pokédex</h1>
            <SearchBar onChange={(pk) => setP(pk)} />
            {p ? <Card pokemon={p} /> : "cerca per tipo"}
        </div>
    );
};
