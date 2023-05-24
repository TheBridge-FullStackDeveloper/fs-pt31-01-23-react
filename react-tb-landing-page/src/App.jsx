import React from "react";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/Header";
import data from "../data.json"


function App() {
  const {navbar, header}=data

  return(
    <div>
      <Navbar img={navbar.img} links={navbar.links}/>
      <Header
      title={header.title}
      subheading={header.subheading}
      paragraph={header.paragraph}
      button={header.button}
      />
    </div>)
}

export default App;
