import styled from "styled-components";

const StyledPokemonDetails = styled.div`
 div{
 
  display: flex;
 }

  h2 {
    border-radius: 50%;
    border: 2px solid;
    color: rebeccapurple;
    margin-right: 30%;
    margin-left: 30%;
    background-color: yellow;
    justify-content: space-around;
    display: flex;
    margin-top: 50px;
    /* margin-left: 40%; */
    font-size: 3rem;
    margin-bottom: 30px;
}
  }

  img {
    margin-left: 40%;
    /* border-radius: 10px; */
    /* background-color: whitesmoke; */
    /* border: 2px solid; */
    display: flex;
    width: 300px;
    height: 300px;
    margin-bottom: 16px;
    flex-wrap: wrap;
    align-content: space-between;
    
    /* justify-content: space-evenly; */
    display: flex;
    width: 300px;
    height: 300px;
    /* object-fit: cover; */
    margin-bottom: 16px;
    flex-wrap: wrap;
    align-content: space-between;
  }

  p {
    border: 2px solid;
    margin-right: 30%;
    margin-left: 30%;
    justify-content: center;
    display: flex;
    background-color: red;
    margin-bottom: 8px
   
  }
`;
export default {
    StyledPokemonDetails,
}