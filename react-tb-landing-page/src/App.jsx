import "./App.css";
//import "./components/Navbar/Navbar.jsx"
//import Bootcamp from "./components/Bootcamp/Bootcamps.jsx";
import data from "../data.json"


function App() {
                //navbar
const links = ["Cursos", "Donde estudiar", "Financiacion y becas",
  "Empresas e instruccioines", "Sobre nosotros"];
 
                         //cartas de los bootcamps

  const cursos = [data.bootcamps.cs, data.bootcamps.dm, data.bootcamps.ds, data.bootcamps.fs, data.bootcamps.ux]
  console.log(cursos)
  return (
<>
<div className="backimage">
    <nav className="navbar">
        <img className="img" src="https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/607eeb4b0517b6659206c10f_thebridgelogo.svg" alt=""></img>
        <ul className="navbarul" >
            {links.map((link, index) => (
                <li className="navbarli" key={index}>{link}</li>
            ))}
        </ul>
    </nav>
    <div className="header">
    
        <h1 className="acelera">Acelera tu carrera digital.</h1> 
        <h2 className="cambios">En época de cambios y desarrollo tecnológico, tu formación no puede perder el ritmo.</h2>   
        <p className="thebrid">Cuando eliges un bootcamp en The Bridge estás dando el paso definitivo hacia las profesiones del futuro más demandadas en el presente, ya sea Ciberseguridad, Data Science, Desarrollo Web Full Stack, UX/UI Product Design, Marketing Digital o Cloud & DevOps.</p>
        <button className="boton">PIDE INFORMACION</button>
        </div>
   </div>
  
   <div className="bootcamp">
    <p className="p">EXPERIENCIAS FORMATIVAS QUE CAMBIARÁN TU CARRERA</p>
    <div className="red"></div> 
    <h1 className="h1">Descubre nuestros Bootcamps</h1>
 </div>
 <div className="cartas">

 <img className="card-image"
      src={cursos.img}
    ></img>
    <h3 className="h3-card">{cursos.title}</h3>
    <button className="button-card" >{cursos.hours}</button>
    <button className="location-card">{cursos.format}</button>
    <p className="p-card">{cursos.description}</p>
    <p className="info">+ INFO</p>
{
    cursos.map((cursos, idx) =>
    <div key={idx} className="containers-total">
       cursos={cursos}
       </div>
       )
}




 </div>
 
 



   



</>

  );
};



export default App;
