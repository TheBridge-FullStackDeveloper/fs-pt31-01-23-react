import "./Navbar.css";
// import Styled from "./Style";


function Navbar( ){
    return (
        <>        
            <div className="header">
              <ul className="navbar">
                  <li> <a href="/">Inicio</a> </li>
                  <li> <a href="/pokemons">Pokemons</a> </li>
                  <li> <a href="https://github.com/OmarLand" target="_blank">My repos</a> </li>
              </ul>
            </div>
        </>
    );
  }

  export default Navbar