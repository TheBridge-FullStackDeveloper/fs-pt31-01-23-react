import Styled from "./Style"
import Link from "./Link";

const NavBar = () => {
  return (
    <Styled.StyledNavBar>
      <Link href="/">Home</Link>
      <Link href="/pokemons">Pokemons</Link>
      
    </Styled.StyledNavBar>
  );
};

export default NavBar;