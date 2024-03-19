import { useState, useEffect, useRef } from "react";
import axios from "axios";

import playIcon from "../imgs/play.svg";
import pauseIcon from "../imgs/pause.svg";
import heightIcon from "../imgs/height.svg";
import weightIcon from "../imgs/weight.svg";

import { Button } from "./Button";
import { Type } from "./Type";
import { Ranger } from "./Ranger";
import { SquarePreview } from "./SquarePreview";
import { General } from "./General";
import { Ability } from "./Ability";

export const Card = ({ pokemon, closeModal }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(pokemon.cries.latest));

  const [pokemonSpecies, setPokemonSpecies] = useState();
  const [pokemonEvo, setPokemonEvo] = useState();

  const togglePlayPause = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;

    const setPause = () => setIsPlaying(false);
    audio.addEventListener("ended", setPause);

    return () => {
      audio.removeEventListener("ended", setPause);
    };
  }, [pokemon.audio]);

  const id = pokemon.id;

  const fetchData = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon-species/" + id)
      .then((response) => {
        // console.log(response.data);
        setPokemonSpecies(response.data);
        // console.log(pokemonSpecies);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const evo =
    pokemonSpecies && pokemonSpecies.evolves_from_species
      ? pokemonSpecies.evolves_from_species.url.split("/").slice(-2, -1)[0]
      : null;

  const fetchDataEvo = () => {
    if (evo) {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + evo)
        .then((response) => {
          // console.log(response.data);
          setPokemonEvo(response.data);
          // console.log(pokemonEvo);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  };

  useEffect(() => {
    fetchDataEvo();
  }, [evo]);

  function finalColor(color) {
    let finalColor = "";

    switch (color) {
      case "black":
        finalColor = "#000000";
        break;
      case "blue":
        finalColor = "#0D47A1";
        break;
      case "grey":
        finalColor = "#424242";
        break;
      case "green":
        finalColor = "#1B5E20";
        break;
      case "pink":
        finalColor = "#AD1457";
        break;
      case "purple":
        finalColor = "#4A148C";
        break;
      case "red":
        finalColor = "#B71C1C";
        break;
      case "white":
        finalColor = "#ADADAD";
        break;
      case "yellow":
        finalColor = "#F9A825";
        break;
      case "brown":
        finalColor = "#5D4037";
        break;
      default:
        finalColor = "var(--back-color)";
        break;
    }

    return finalColor;
  }

  const [activeComponent, setActiveComponent] = useState("General");

  const [mainImage, setMainImage] = useState(
    pokemon.sprites.other["home"].front_default
  );

  if (pokemon.sprites && pokemon.sprites.front_shiny) {
    return (
      <div className="container-card">
        <div
          className="card-box"
          style={{
            backgroundColor: pokemonSpecies
              ? finalColor(pokemonSpecies.color.name)
              : null,
          }}
        >
          <button onClick={closeModal} className="close-btn">
            Chiudi
          </button>

          <div className="card-header">
            <div className="left">
              <p className="p-name">{pokemon.name}</p>
              <img
                src={isPlaying ? pauseIcon : playIcon}
                onClick={togglePlayPause}
                alt="Audio Icon"
                className="audio-icon"
              />
            </div>
            <div className="right">
              <p className="p-name"> ID: {pokemon.id} </p>
            </div>
          </div>
          <div className="box-left">
            <div className="box-row">
              <Button
                off={activeComponent !== "General"}
                color={
                  pokemonSpecies ? finalColor(pokemonSpecies.color.name) : "red"
                }
                onClick={() => setActiveComponent("General")}
              >
                Generale
              </Button>
              <Button
                off={activeComponent !== "Ability"}
                color={
                  pokemonSpecies ? finalColor(pokemonSpecies.color.name) : "red"
                }
                onClick={() => setActiveComponent("Ability")}
              >
                Ability
              </Button>
            </div>
            <div className="box-column">
              {activeComponent === "General" ? (
                pokemonSpecies && (
                  <General generation={pokemonSpecies.generation} />
                )
              ) : (
                <Ability abilities={pokemon.abilities} />
              )}

              <p className="p-text">Tipo</p>
              <div className="box-row">
                {pokemon.types.map((type, index) => {
                  return (
                    <Type
                      key={index}
                      type={type.type.name}
                      color={
                        pokemonSpecies
                          ? finalColor(pokemonSpecies.color.name)
                          : "black"
                      }
                    >
                      {type.type.name}
                    </Type>
                  );
                })}
              </div>
              <p className="p-text">Versioni</p>
              <div className="box-row">
                <Button
                  off={false}
                  color={
                    pokemonSpecies
                      ? finalColor(pokemonSpecies.color.name)
                      : "none"
                  }
                >
                  Normale
                </Button>
                <Button
                  off={true}
                  color={
                    pokemonSpecies
                      ? finalColor(pokemonSpecies.color.name)
                      : "none"
                  }
                >
                  Shiny
                </Button>
              </div>
              <p className="p-text">Statistiche</p>

              {pokemon.stats.map((stat, index) => {
                return <Ranger key={index} ranger={stat} />;
              })}
            </div>
          </div>
          <div className="box-right">
            <div className="box-row">
              <div className="box-column">
                {/* <img
                  src={pokemon.sprites.other["home"].front_default}
                  alt="Pokemon"
                  className="p-image"
                /> */}
                <div className="big-image">
                  <img src={mainImage} alt="Pokemon" className="p-image" />
                </div>
                <p className="p-base">EXP: {pokemon.base_experience}</p>
                <div className="box-evolution">
                  {pokemonEvo ? (
                    <div className="box-circle">
                      <img
                        src={
                          pokemonEvo
                            ? pokemonEvo.sprites.other["home"].front_default
                            : null
                        }
                        alt="Pokemon"
                        className="p-circle-image"
                      />
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="box-column">
                {pokemon.sprites.other["dream_world"].front_default &&
                  pokemon.sprites.other["dream_world"].front_default && (
                    <SquarePreview
                      onClick={() =>
                        setMainImage(
                          pokemon.sprites.other["dream_world"].front_default
                        )
                      }
                      imgLink={
                        pokemon.sprites.other["dream_world"].front_default
                      }
                    />
                  )}
                {pokemon.sprites.other["official-artwork"].front_default && (
                  <SquarePreview
                    onClick={() =>
                      setMainImage(
                        pokemon.sprites.other["official-artwork"].front_default
                      )
                    }
                    imgLink={
                      pokemon.sprites.other["official-artwork"].front_default
                    }
                  />
                )}
                {pokemon.sprites.other["showdown"].front_default && (
                  <SquarePreview
                    onClick={() =>
                      setMainImage(
                        pokemon.sprites.other["showdown"].front_default
                      )
                    }
                    imgLink={pokemon.sprites.other["showdown"].front_default}
                  />
                )}
                {pokemon.sprites.other["showdown"].back_default && (
                  <SquarePreview
                    onClick={() =>
                      setMainImage(
                        pokemon.sprites.other["showdown"].back_default
                      )
                    }
                    imgLink={pokemon.sprites.other["showdown"].back_default}
                  />
                )}
                <div className="box-row s">
                  <img src={heightIcon} className="icon" alt="" />
                  <p className="p-height">{pokemon.height}</p>
                </div>
                <div className="box-row s">
                  <img src={weightIcon} className="icon" alt="" />
                  <p className="p-height">{pokemon.weight}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>sfiga</div>;
  }
};
