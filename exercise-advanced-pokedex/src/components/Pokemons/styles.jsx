import { styled } from "styled-components";

const ContainerPoke = styled.div`

    display         : flex;
    justify-content : center;
   

    .centering-content{
        text-align    : center;
        width         : 40%;
        height        : 500px;
        border-radius : 25px;
        box-shadow    : 1px 1px 10px black;
        margin-top    : 100px;  
        padding       : 50px;      
    }


    .poke-name{
        color        : yellow;
        text-shadow  : 1px 1px 10px black;
        font-size    : 35px;
        font-family  : "Lucida Handwriting";
    }
    
    .img-poke{
        width       : 45%;
    }

    .detail-poke{
        font-weight : bold;
        font-size   : 18px;
        text-shadow  : 1px 1px 10px black;
    }
    
`

export default {
    ContainerPoke,
}