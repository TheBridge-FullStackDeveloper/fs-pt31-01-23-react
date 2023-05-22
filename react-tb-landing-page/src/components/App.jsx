import "../App.css";
import Navbar from "./Navbar/Navbar"; // Importo el component Navbar
import Container from "./Container/Container"; // Importo el component Container
import HeadCards from "./HeadCards/HeadCards"; // Importo el component HeadCards

// Links lo uso para meter el menú de mi Component -> NavBar
const links = ["Cursos", "Dónde estudiar", "Financiación y becas", "Empresas e instituciones","Sobre nosotros"]

function App() {
  return (
  
    // <div>Hello React Primera Vista</div>
    <div>
      
      <Navbar links={links}/>
      <Container />
      <HeadCards />

    </div>
  
  );
}

export default App;
