// import "./Navbar.css";
import Styled from './styles';
import { Link, useRoute } from "wouter";


const CustomLink = ({ href, children }) => {
    const [isActive] = useRoute(href)

    return (
        <Link {...{ href }}>
            <a {...{ href }}>{children}</a>
        </Link>
    )
}

const Navbar = ( ) => {
    return (
        <>        
            <Styled.StyledNavBar className="header">
              <ul className="navbar">
              
                  <li> <a href="/">Inicio</a> </li>
                  <li> <a href="/pokemons">Pokemons</a> </li>
                  <li> <a href="https://github.com/OmarLand" target="_blank">My repos</a> </li>
              </ul>
            </Styled.StyledNavBar>


        </>
    );
  }

  export default Navbar