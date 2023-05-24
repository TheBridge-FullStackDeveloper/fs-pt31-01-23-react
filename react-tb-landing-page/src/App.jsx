import React from "react";
import "./App.css";
import Navbar from "../components/Navbar/Navbar";
import Background from "../components/Background/Background";
import Bootcamps from "../components/Bootcamps/Bootcamps";


const links = ['Cursos','Donde Estudiar','Financiacion y Becas','Empresas e Instituciones','Sobre nosotros']


function App() {
  
  return  <div>
    <Navbar links={links}/>
    <Background/>
    <Bootcamps/>
  </div>;
}


export default App;
