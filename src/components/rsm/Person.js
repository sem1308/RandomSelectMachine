import styled,{css,keyframes} from 'styled-components';
import { lightBlue } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import React,{useEffect,useState} from 'react';

const fadeIn = keyframes`
  from {
    opacity:0.5
  }to{
    opacity:1
  }
`;

const fadeOut = keyframes`
  from {
    opacity:1
  }to{
    opacity:0
  }
`;

const PersonBox = styled.div`
    display:flex;
    justify-content: space-around;
`;

const RemoveButton = styled.div`
  display: flex;
  width:20%;
  align-items: center;
  justify-content: center;
  padding: 5px;
  outline: none;
  border-right: 1px solid gray;
  background-color: ${lightBlue[50]};
  animation-duration:0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  
  ${props=>
    props.selected &&
      css`
        border-right: 1px solid gray;
        background-color: gray;
      `
  }

  ${props => 
    props.selected &&
    !props.beforeSelected &&
      css`
        animation-name: ${fadeIn};
      `
  }

  ${props => 
    props.isRemoved &&
    css`
      animation-name: ${fadeOut};
    `
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
  animation-duration:0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  &:hover {
    cursor: pointer;
    background-color: ${lightBlue[100]};
    animation-name: ${fadeIn};
  }

  ${props => 
    props.selected &&
      css`
        &:hover{
          background-color: hsla(296, 0%, 42%,0.95);
        }
        background: gray;
        animation-name: ${fadeIn};
      `
  }

  ${props => 
    props.isRemoved &&
    css`
      animation-name: ${fadeOut};
    `
  }
`;

function Person({children,selected,id,onToggle,onRemove}) {
  return (
    <PersonBox>
      <PersonBlock onClick={()=>{onToggle(id)}} selected={selected}>{children}</PersonBlock>
      <RemoveButton selected={selected} onClick={()=>onRemove(id)}>
        <IconButton>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </RemoveButton>
    </PersonBox>      
  );
}

export default React.memo(Person);