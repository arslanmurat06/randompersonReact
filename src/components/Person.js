import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getRandomPerson } from "../services/personService";
import { useState,useEffect } from "react";
import personSlice from "../features/personSlice";


const Container =  styled.div`
color:white;
max-width:500px;
height:100%;
background-color:rgb(239,103,63,1);
border-radius:30px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Header = styled.div`
max-width:100vw;
display:flex;
margin:10px;
justify-content:space-between;
align-items:center;
`;

const ImageContainer = styled.div`

width:150px;
height:150px;
background-color:white;
border-radius:50%;

`;

const Name = styled.span`

margin-right:100px;
font-size:50px;
`;

const InfoContainer = styled.div`
width:100%;
height:100%;
display:flex;
margin-top:50px;
margin-bottom:20px;
margin-left:20px;

`
;

const LabelContainer =styled.div`
width:30%;
height:100%;
display:flex;
flex-direction:column;
align-items:start;
`

;

const InformationContainer =styled.div`
width:70%;
height:100%;
display:flex;
flex-direction:column;
align-items:start;
`;

const InfoLabel = styled.p`

font-size:20px;
`
;

const Info = styled.p`

font-size:20px;
`
;


const Image = styled.img`
width:150px;
height:150px;
background-color:white;
border-radius:50%;
`
;

const Person = ()=>{

const {loading, person, error} = useSelector((state)=>state.personReducer);
const dispatch = useDispatch();

useEffect(() => {
    console.log("useEffeect");
  dispatch(getRandomPerson());
}, [])

if (loading) return <p>Loading...</p>
else if(error) return <p>An error happened {error}</p>

else
    return(
   <Container>

       
        <Header>

           
                <Image src={person.image}/>
            

            <Name>
                {person.name}
            </Name>

        </Header>
        <InfoContainer>

            <LabelContainer>
                <InfoLabel>Email:</InfoLabel>
                <InfoLabel>Phone:</InfoLabel>
                <InfoLabel>Cell:</InfoLabel>
                <InfoLabel>Country/City:</InfoLabel>
            </LabelContainer>

            <InformationContainer>
                <Info>{person.mail}</Info>
                <Info>{person.phone}</Info>
                <Info>{person.phone}</Info>
                <Info>{person.location}</Info>
            </InformationContainer>
       
        </InfoContainer>
   </Container>

    );
}


export default  Person;

