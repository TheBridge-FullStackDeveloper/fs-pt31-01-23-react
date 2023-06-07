import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import axios from "axios";
import Styled from "./Style";
function PokemonsPage() {
 
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1281&offset=0")
      .then((response) => {
        setIsLoaded(true);
        setPokemons(response.data.results);
        console.log(response.data.results)
      })
     
  }, []);

    if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Styled.StyledPokemonsPage>
        <h2>Lista Pokémons</h2>
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.url}>
              <Link to={`/pokemons/${pokemon.name}`}>{pokemon.name}</Link>
            </li>
          ))}
        </ul>
      </Styled.StyledPokemonsPage>
    );
  }
}

export default PokemonsPage;