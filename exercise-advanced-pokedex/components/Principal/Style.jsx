import styled from "styled-components";



const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* flex-wrap: nowrap; */
    align-content: stretch;
    justify-content: center;
    align-items: stretch;
 
`;
const Text = styled.h1`
margin-right: 20px;
font-size: xxx-large;
color: lightblue;
text-align: center;
`;
export default {
    Container,
    Text,
}