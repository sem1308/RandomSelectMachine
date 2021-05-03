import React,{useState} from 'react';
import styled, {keyframes,css} from 'styled-components';
import Person from './Person';
import {GetState, GetDispatch, GetNextNum} from '../GetCakeContext';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {lightBlue} from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme)=>({
  fab: {
    width: "35px",
    height: "10px",
    background: lightBlue[300],
    color: "white",
    '&:hover': {
      background: lightBlue[400],
    }
  }
}));

const AddButtonBlock = styled.div`
  display: flex;
  width: 100%;
  height:50px;
  padding: 15px 0px;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.clicked && 
      css`
        transform: rotate(45deg);
      `
  }
`

const fadeIn = keyframes`
  from{
    opacity: 0.5
  }to{
    opacity: 1
  }
`

const LeftBox = styled.div`
  margin: 0;
  padding: 0;
  box-shadow: 0 0 0.5rem 0 black;
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
    
    ${props=>
      props.selected &&
        css`
          border-right: 1px solid gray;
          background-color: gray;
          animation-duration:0.5s;
          animation-timing-function: ease-out;
          animation-name: ${fadeIn};
          animation-fill-mode: forwards;
        `
    }

`;

function LeftBlock() {
  const {people} = GetState();
  const dispatch = GetDispatch();
  const nextNum = GetNextNum();
  const [name,setName] = useState('');
  const [clicked, setClicked] = useState(false);
  const classes = useStyles();

  const onRemove = (id) => {
      dispatch({
        type:'REMOVE',
        id
      });
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    if(name === ''){
      alert("아무거나 입력해!!");
      return;
    }
    const newPerson = {
      name,
      id: nextNum.current,
      selected: false
    }
    dispatch({
      type: 'CREATE',
      newPerson
    });
    nextNum.current += 1;
    setName('');
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  const onToggle = (id) => {
    dispatch({
      type:"TOGGLE",
      id
    });
  }

  const onClick = () => {
    setClicked(!clicked);
  }

  return (
    <div style={{width:"10%"}}>
      <LeftBox>
      <p style={{textAlign:"center",margin:0,padding: "10px 0px", background:lightBlue[100],borderRight: "1px solid gray"}}>생일자</p>
      {
        people.map((person)=>{
        return (
          <PersonBox>
            <Person onToggle={onToggle} id={person.id} selected={person.selected}>{person.name}</Person>
            <RemoveButton selected={person.selected} onClick={()=>onRemove(person.id)}>
              <IconButton>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </RemoveButton>
          </PersonBox>
          );
      })}       
      </LeftBox>
      <AddButtonBlock clicked={clicked}>
        <Fab className={classes.fab} onClick={onClick}>
          <AddIcon />
        </Fab>
      </AddButtonBlock>
      {clicked ? 
        <form clicked={clicked} onSubmit={onSubmit}>
        <TextField
          variant="outlined"
          placeholder="생일축하해~"
          label="이름입력" 
          value={name} 
          onChange={onChange}/>
        </form> : ""
      }
       
    </div>
    
  );
}

export default LeftBlock;