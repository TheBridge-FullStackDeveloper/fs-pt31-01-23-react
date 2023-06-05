import React from 'react'
import ReactDOM from 'react-dom'
import { Redirect, Route, Router, Switch } from "wouter"
import NavBar from '../components/Navbar/NavBar'
import PokemonsPage from "../pages/PokemonsPage"
import PokemonDetailsPage from "../components/Pokemons/PokemonDetailsPage"
import HomePage from "../components/Principal/HomePage"






ReactDOM.render(
  <React.StrictMode>
    <Router>
    <NavBar/>
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/pokemons" component={PokemonsPage} />
      <Route path="/pokemons/:name" component={PokemonDetailsPage} />
      <Redirect path="/"/>
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
