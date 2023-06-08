import { styled } from "styled-components";

const StyledNavBar = styled.nav`

        display          : flex;
        justify-content  : center;

    .navbar{
        display         : flex;
        justify-content : center;
        gap             : 40px;
        color           : black;
        font-weight     : bold;
        background-color: #E2DBBE;
        width           : 70%;
        height          : 25px;
        padding-top     : 6px;
        box-shadow      : 0px 0px 8px black;
        border-radius   : 15px 15px 0px 0px;
    }

    ul li{
        list-style      : none;
    }

    ul li:hover, ul li a:hover{
        color: white;
    }

    a:link, a:visited, a:active {
        text-decoration  :none;
        color            : black;
    }

`

export default {
    StyledNavBar
}