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

        <CardsContainers
          title="Data Science"
          img="https://uploads-ssl.webflow.com/60782404b8e195845053206a/61b356a24ba5746ddec2dd6b_iconowebDS.png"
          time="480"
          modo="Presencial/Remoto"
          description="Con nuestro bootcamp en Data Science aprenderás a analizar grandes volúmenes de datos combinando programación y matemáticas para resolver problemas complejos y obtener así información de valor para la toma de decisiones."
          info="INFO"
        />
       
        <CardsContainers
          title="Desarrollo Full Stack"
          img="https://uploads-ssl.webflow.com/60782404b8e195845053206a/60a64a28aaa7f58060aa5dcb_FS.svg"
          time="480"
          modo="Presencial/Remoto"
          description="Con nuestro bootcamp en Desarrollo Web Full Stack adquirirás los conocimientos necesarios para desarrollar la estructura al completo de una web o web app."
          info="INFO"
        />

        <CardsContainers
          title="Marketing Digital"
          img="https://uploads-ssl.webflow.com/60782404b8e195845053206a/60d0a6af5f8903204be404b0_DM.svg"
          time="480"
          modo="Presencial/Remoto"
          description="Con nuestro bootcamp en Marketing Digital adquirirás los conocimientos para potenciar un negocio o marca de manera eficiente y así conseguir aportar valor a las empresas mejorando sus resultados de ventas y rentabilidad."
          info="INFO"
        />

        <CardsContainers
          title="UX/UI Product Design"
          img="https://uploads-ssl.webflow.com/60782404b8e195845053206a/60a649f7b1cdbc9d2f9b93be_PD.png"
          time="480"
          modo="Presencial/Remoto"
          description="Con nuestro bootcamp en UX/UI Product Design adquirirás los conceptos clave sobre la experiencia de usuario. Realiza investigaciones en profundidad sobre clientes potenciales, y diseña productos digitales que resuelvan sus necesidades actuales."
          info="INFO"
        />


      </section>


    </div>

  );
}

export default App;
