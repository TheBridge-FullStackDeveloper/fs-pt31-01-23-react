import styled from "style-components";

const StyledNavBar = styled.div`

    .header{
        display          : flex;
        justify-content  : center;
    }

    .navbar{
        display         : flex;
        justify-content : center;
        gap             : 25px;
        color           : black;
        background-color: #E2DBBE;
        width           : 70%;
        height          : 25px;
        padding-top     : 6px;
        box-shadow      : 0px 1px 5px black;
        border-radius   : 10px;
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