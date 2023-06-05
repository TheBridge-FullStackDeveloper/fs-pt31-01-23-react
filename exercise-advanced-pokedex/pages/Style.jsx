import styled from "styled-components";

const StyledPokemonsPage = styled.div`
  h2 {margin-top: 50px;
    margin-left: 20px;
    color: firebrick;
    font-size: 30px;
    margin-bottom: 16px;
    
    
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 8px;
  }

  a {
    margin-left: 30px;
    /* display: flex; */
    color: blueviolet;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: magenta;
    }
  }
`;
export default {
    StyledPokemonsPage,
}