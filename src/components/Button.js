
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getRandomPerson } from "../services/personService";

const ButtonContainer =styled.button`

margin-top:20px;

color:white;
font-size:25px;
border-radius:20px;
padding:20px;
background-color:rgb(239,103,63,0.8);
border: none;

`;

const Button = () =>{
    const dispatch = useDispatch();
    function fetchRandomPerson(){
        dispatch(getRandomPerson());
    }


    return(
        <ButtonContainer onClick={()=>fetchRandomPerson()}>Fetch Random Person</ButtonContainer>
    );
}


export default  Button;

