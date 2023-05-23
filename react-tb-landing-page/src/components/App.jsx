import "../App.css";
import Navbar from "./Navbar/Navbar"; // Importo el component Navbar
import Container from "./Container/Container"; // Importo el component Container
import HeadCards from "./HeadCards/HeadCards"; // Importo el component HeadCards
import CardsContainers from "./CardsContainers/CardsContainers"; // Importo el component CardsContainers

// Links lo uso para meter el menú de mi Component -> NavBar
const links = ["Cursos", "Dónde estudiar", "Financiación y becas", "Empresas e instituciones","Sobre nosotros"]

function App() {
  return (
  
    // <div>Hello React Primera Vista</div>
    <div>
      
      <Navbar links={links}/>
      <Container />
      <HeadCards />
      <br />

      <section className="flex-cards">

        <CardsContainers 
          title="Ciberseguridad" 
          img="https://uploads-ssl.webflow.com/60782404b8e195845053206a/60d0a6ee92195f77a8ac4bfe_CS.svg" 
          time="480" 
          modo="Presencial/Remoto" 
          description="Con nuestro bootcamp adquirirás los conocimientos para ser miembro de un equipo Red Team o Blue Team utilizando las estrategias y herramientas más actuales, en uno de los mejores programas del mundo en 2021" 
          info="INFO" 
        />

      </section>
      

    </div>
  
  );
}

export default App;
