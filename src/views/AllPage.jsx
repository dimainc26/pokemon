import { useState, useEffect } from "react";
import axios from "axios";

export const AllPage = () => {
  const [list, setList] = useState([]);

  const nav = { count: 0, next: "", previous: "" };

  const [navigation, setNavigation] = useState(nav);

  const fetchData = (url = "https://pokeapi.co/api/v2/pokemon") => {
    axios
      .get(url)
      .then((response) => {
        setList(response.data.results);
        setNavigation({
          count: response.data.count,
          next: response.data.next,
          previous: response.data.previous,
        });
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        {list.map((pokemon) => {
          return <div key={pokemon.name}>{pokemon.name}</div>;
        })}
      </div>
      <div>
        {navigation.previous && (
          <>
            <button onClick={() => fetchData(navigation.previous)}>Prev</button>
          </>
        )}
        {navigation.next && (
          <>
            <button onClick={() => fetchData(navigation.next)}>Next</button>
          </>
        )}
      </div>
    </>
  );
};
