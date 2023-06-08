import "../src/App.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/index.jsx';
import Pokemon from './pages/Pokemons/index.jsx';
import { Route, Switch, Redirect } from "wouter";

const Container = () => {
  return( 
    <>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/Pokemons" component={Pokemon} />
        <Redirect to="/home"/>
      </Switch>

      {/* <Navbar />
      <HomePage/> */}
      {/* <App /> */}

    </>
   )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
