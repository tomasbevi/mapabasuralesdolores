import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
background-color: ${(props) =>(props.color == 1 ? 'red' : props.color == 2 ? '#dde80e' : '#1cb845')};
position: absolute;
top: 50%;
left: 50%;
width: 18px;
height: 18px;
border: 1px solid #000;
border-radius: 100%;
transform: translate(-50%, -50%);
cursor:pointer;
float:left;
&:hover > div{
  display:block;
  
}
`;
const Pwrapper = styled.div`
  display:none;
  width:200px;
  margin-top:20px;
  font-weight: bold;
  
 
`;


const Marker = (props) => {

  return (
          <Wrapper
          color={props.estado}
          alt={props.text}
          title={props.text}
        >
             <Pwrapper>
             {props.text}
             </Pwrapper>
        </Wrapper>
  )
  
  };



export default Marker;