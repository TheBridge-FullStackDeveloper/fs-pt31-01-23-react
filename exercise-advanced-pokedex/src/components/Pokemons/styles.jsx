import { styled } from "styled-components";

const ContainerPoke = styled.div`

    display         : flex;
    justify-content : center;
   

    .centering-content{
        text-align    : center;
        width         : 40%;
        height        : 480px;
        border-radius : 25px;
        box-shadow    : 1px 1px 10px black;
        margin-top    : 100px;  
        padding       : 45px;      
    }


    .poke-name{
        color        : yellow;
        text-shadow  : 1px 1px 10px black;
        font-size    : 35px;
        font-family  : "Lucida Handwriting";
        margin-top   : 1px;
    }
    
    .img-poke{
        width       : 38%;
    
    }

    .detail-poke{
        font-weight  : bold;
        font-size    : 18px;
        text-shadow  : 1px 1px 10px black;
        
    }

    a:link, a:visited, a:active {
        text-decoration:none;
        color: black;
    }

    .back-list{
        border: 1px solid black;
        color: black;
        width: 120px;
        height: 30px;
        box-shadow : 1px 1px 8px black;
        border-radius: 15px;
    }

    .back-list:hover{
        background-color : yellow;
        color            : black;
        font-weight      : bold;
    }
    
`

export default {
    ContainerPoke,
}