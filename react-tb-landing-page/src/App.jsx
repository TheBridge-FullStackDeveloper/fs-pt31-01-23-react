import "./App.css";
//import "./components/Navbar/Navbar.jsx"
//import Bootcamp from "./components/Bootcamp/Bootcamps.jsx";


function App() {
                //navbar
const links = ["Cursos", "Donde estudiar", "Financiacion y becas",
  "Empresas e instruccioines", "Sobre nosotros"];
 
                         //cartas de los bootcamps
cursos = [
  Ciberseguridad = {
    title: "Ciberseguridad",
    img: "https://uploads-ssl.webflow.com/60782404b8e195845053206a/60d0a6ee92195f77a8ac4bfe_CS.svg",
    hours: "480",
    format: "Presencial/Remoto",
    description: "Con nuestro bootcamp adquirirás los conocimientos para ser miembro de un equipo Red Team o Blue Team utilizando las estrategias y herramientas más actuales, en uno de los mejores programas del mundo en 2021.",
    svg: "https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/60ab63e4d647d89630b5205c_Time%20Circle.svg"
  
  },

  DataSciencie = {
    title: "Data Science",
    img: "https://uploads-ssl.webflow.com/60782404b8e195845053206a/60a649ad574f4fc2cffa3f94_DS.svg",
    hours: "480",
    format: "Presencial/Remoto",
    description: "Aprenderás Python, sus librerías de análisis de datos y de Machine Learning y Deep para construir y desplegar modelos y mostrar su utilidad al negocio."
  },
  FullStack = {
    title: "Desarrollo Web Full Stack",
    img: "https://uploads-ssl.webflow.com/60782404b8e195845053206a/60a64a28aaa7f58060aa5dcb_FS.svg",
    horas: "480",
    formato: "Presencial/Remoto",
    description: "Con nuestro bootcamp te transformarás en un desarrollador Web Full Stack. Aprende desde cero HTML, JavaScript node.JS y bases de datos. Acelera tus proyectos utilizando ReactJS, y conoce los fundamentos de DevOps para el despliegue y mantenimiento de tus proyectos."
  },
  Marketing = {
    title: "Digital Marketing OPS",
    img: "https://uploads-ssl.webflow.com/60782404b8e195845053206a/60d0a6af5f8903204be404b0_DM.svg",
    horas: "480",
    formato: "Presencial/Remoto",
    description: "Una aproximación práctica al Marketing Digital que te permitirá conocer las ultimas herramientas y los nuevos medios, con foco en la planificación, análisis y automatización para la optimización de resultados. * Becas L'Oréal Digital Marketing Ops"
  },
  Product = {
    title: "UX/UI Product Design",
    img: "https://uploads-ssl.webflow.com/60782404b8e195845053206a/60a649f7b1cdbc9d2f9b93be_PD.png",
    horas: "480",
    formato: "Presencial/Remoto",
    description: "Te familiarizarás con conceptos clave sobre experiencia de usuario: metodologías de investigación y análisis de datos, arquitectura de la información, ideación y principios del diseño visual y de experiencia de usuario. * Becas Opinno Digital Experience"
  },
]
 //cursos =[Ciberseguridad, DataSciencie, FullStack, Marketing, Product]  

  

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
    
    
        <h1>Acelera tu carrera digital</h1> 
        <h2>En época de cambios y desarrollo tecnológico, tu formación no puede perder el ritmo.</h2>   
        <p className="p">Cuando eliges un bootcamp en The Bridge estás dando el paso definitivo hacia las profesiones del futuro más demandadas en el presente, ya sea Ciberseguridad, Data Science, Desarrollo Web Full Stack, UX/UI Product Design, Marketing Digital o Cloud & DevOps.</p>
        <button className="boton">PIDE INFORMACION</button>
   </div>
  
   <div className="bootcamp">
    <p className="p">EXPERIENCIAS FORMATIVAS QUE CAMBIARÁN TU CARRERA</p>
    <div className="red"></div> 
    <h1 className="h1">Descubre nuestros Bootcamps</h1>
 </div>
 <div className="cartasBootcamp">

 {
          cursos.map((curso, idx) =>
            <div key={idx} className="containers">
               <div >
    <img className=""
      src={curso.img}
    ></img>
    <h3 className="h3">{curso.title}</h3>
    <button className="buttoncard" >{curso.horas}</button>
    <button className="locationcard">{curso.formato}</button>
    <p className="pcard">{curso.description}</p>
    <p className="info">+ INFO</p>
  </div>
  curso={curso} 
            </div>
          )
        }

 </div>




</>

  );
};



export default App;