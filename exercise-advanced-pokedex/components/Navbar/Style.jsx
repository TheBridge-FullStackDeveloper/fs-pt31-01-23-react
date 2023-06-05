import styled from "styled-components";

const StyledNavBar = styled.nav`
margin: 0;
background-color: black;
padding: 10px;
`;

const StyledLink = styled.a`
  margin-right: 10px;
  color: white;
  text-decoration: none;
  margin: 20%;
  &:hover {
    color: red;
  }
`;

export default {
    StyledNavBar,
    StyledLink,
}