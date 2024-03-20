import { useState, useEffect } from "react";
import axios from "axios";

export const WarMode = () => {
  const [pokemon1, setPokemon1] = useState();
  const [pokemon2, setPokemon2] = useState();

  const fetchData1 = (id) => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + id)
      .then((response) => {
        // console.log(response.data);
        setPokemon1(response.data);
        // console.log(pokemonSpecies);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const fetchData2 = (id) => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + id)
      .then((response) => {
        // console.log(response.data);
        setPokemon2(response.data);
        // console.log(pokemonSpecies);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    fetchData1( Math.floor(Math.random() * 1006));
    fetchData2( Math.floor(Math.random() * 1006));
  }, []);

  return (
    <div className="war-container">
      <div className="war-box">
        {pokemon2 && (
          <div className="player2-box">
            <div className="p-box">
              <p className="p-nam">{pokemon2.name}</p>
              <p className="p-level">LV 5</p>
              <div className="p-hp">
                <div className="p-stat">
                  <p className="p-var">HP {pokemon2.stats[0].base_stat} </p>
                  <div className="y">
                    <div className="stat-container">
                      <div
                        className="stat-value"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {pokemon1 && (
          <div className="player1-box">
            <div className="p-box">
              <p className="p-nam">{pokemon1.name}</p>
              <p className="p-mini">
                {pokemon1.stats[0].base_stat} / {pokemon1.stats[0].base_stat}{" "}
              </p>
              <p className="p-level">LV 3</p>
              <div className="p-hp">
                <div className="p-stat">
                  <p className="p-var">HP </p>
                  <div className="y">
                    <div className="stat-container">
                      <div
                        className="stat-value"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="pokemon-area1">
          <div className="image">
            <img
              src={pokemon1 && pokemon1.sprites.other.showdown.back_default}
              alt=""
            />
          </div>
        </div>

        <div className="pokemon-area2">
          <div className="image">
            <img
              src={pokemon2 && pokemon2.sprites.other.showdown.front_default}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
