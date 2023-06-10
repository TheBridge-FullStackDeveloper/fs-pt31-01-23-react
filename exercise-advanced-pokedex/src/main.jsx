import "../src/App.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/index.jsx'; // PAgina principal Home
import Pokemon from './pages/Pokemons/index.jsx'; // Lista de Pokemons
import { Route, Switch, Redirect } from "wouter";
import PokemonDetails from "./components/Pokemons/PokemonsDetails";

const Container = () => {
  return( 
    <>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/Pokemons" component={Pokemon} />
        <Route path="/Pokemons/:name" component={PokemonDetails} />
        <Redirect to="/home"/>
      </Switch>

    </>
   )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
