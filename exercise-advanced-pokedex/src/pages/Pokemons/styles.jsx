import { styled } from "styled-components";

const PokePage = styled.div`


    background: rgba( 255, 255, 255, 0.7 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    border-radius  : 20px;
    box-shadow     : 1px 1px 10px  black;
    margin         : 15px;
    padding-bottom : 10px;
    padding-right  : 25px;

    ul{
        column-count : 8;
    }

    ul li{
        list-style      : none;
    }

    ul li:hover, ul li a:hover{
        color         : #FFE347;
        text-shadow   : 1px 1px 5px black;
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