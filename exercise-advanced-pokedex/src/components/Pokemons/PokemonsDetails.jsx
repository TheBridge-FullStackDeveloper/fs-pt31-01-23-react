import React, { useState, useEffect } from "react";
import { useRoute } from "wouter";
import axios from "axios";
import Styled from './styles';
import Navbar from "../NavBar/NavBar";

const PokemonDetails = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [pokemon, setPokemon] = useState(null);
    const [name,params] = useRoute("/pokemons/:name");
  
    useEffect(() => {
     
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
        .then((response) => {
          setIsLoaded(true);
          setPokemon(response.data);
        //   console.log(response.data)
        })
        
    }, []);

    if (!isLoaded) {
        return <div>Cargando...</div>;
    } else {
        
        return(
            <>
                <Navbar /> 
                <Styled.ContainerPoke>
                    <div className="centering-content">
                        <h2 className="poke-name">{pokemon?.name}</h2>
                        <div>
                            <img src={pokemon?.sprites.front_default} alt={pokemon?.name} className="img-poke"/>
                        </div>
                        <p className="detail-poke">Height: {pokemon?.height}</p>
                        <p className="detail-poke">Weight: {pokemon?.weight}</p>
                        
                        <button  className="back-list">
                            <a href="/Pokemons">Volver</a>
                        </button>
                    </div>
                </Styled.ContainerPoke>   
            </>
        )

    }
}


export default PokemonDetails