import styled from "styled-components";


export default function Button({content}) {
  return (
    <StyledButton>
        {content} 
    </StyledButton>
  )
}

const StyledButton = styled.button`
text-transform: uppercase;
letter-spacing: 0.2rem;
width: 65%;
height: 3rem;
border: none;
color: black;
border-radius: 2rem;
cursor: pointer; 
&&hover{
  background-color: black;
}
`;
