import styled,{css,keyframes} from 'styled-components';
import { lightBlue } from '@material-ui/core/colors';
import React from 'react';

const fadeIn = keyframes`
  from {
    opacity:0.5
  }to{
    opacity:1
  }
`;

const PersonBlock = styled.li`
  display: flex;
  width:100%;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${lightBlue[50]};
  padding: 5px 0px;

  &:hover {
    cursor: pointer;
    background-color: ${lightBlue[100]};
    animation-duration:0.5s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
  }

  ${props => 
    props.selected &&
      css`
        animation-duration:0.5s;
        animation-timing-function: ease-out;
        animation-name: ${fadeIn};
        animation-fill-mode: forwards;
        background: gray;
        &:hover{
          background-color: hsla(296, 0%, 42%,0.95);
        }
      `
  }
`;

function Person({children,selected,id,onToggle}) {
    return <PersonBlock onClick={()=>{onToggle(id)}} selected={selected}>{children}</PersonBlock>;
}

export default React.memo(Person);