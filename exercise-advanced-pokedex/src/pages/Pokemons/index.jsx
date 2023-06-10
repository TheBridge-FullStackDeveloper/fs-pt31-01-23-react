import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import axios from "axios";
import Navbar from "../../components/NavBar/NavBar";
import Styled from './styles';


const Pokemon = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [pokemons, setPokemons] = useState([]);
  
    useEffect(() => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=500")
        .then((response) => {
          setIsLoaded(true);
          setPokemons(response.data.results);
        //console.log(response.data.results)
        })
       
    }, []);

    if (!isLoaded) {
        
        return <div>Cargando...</div>;
    
    } else {

        return(
            <>
                <Navbar /> 
                <Styled.PokePage>

                    <h2 className="title-list">Lista Pokemons</h2>

                    <ul>
                        {pokemons.map((pokemon) => (
                        <li key={pokemon.url}>
                            <Link to={`/pokemons/${pokemon.name}`}>{pokemon.name}</Link>
                        </li>
                        ))}
                    </ul>

                </Styled.PokePage>     
            </>   
        );       
    }
}

export default Pokemon;