import { styled } from "styled-components";

const PokePage = styled.div`
    border        : 1px solid black;
    border-radius : 20px;
    box-shadow    : 1px 1px 10px  black;
    margin        : 15px;

    ul{
        column-count : 8;
    }

    ul li{
        list-style      : none;
    }

    ul li:hover, ul li a:hover{
        color: #FFE347;
        text-shadow : 1px 1px 5px black;
    }

    .title-list{
        text-align  : center;
        color       : #FFE347;
        text-shadow : 1px 1px 5px black;
        
    }

`



export default {
    PokePage,
}