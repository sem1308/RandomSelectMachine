import React ,{useState} from 'react';
import styled,{css} from 'styled-components';
import {GetRestNum,GetDispatch,GetState} from '../GetCakeContext';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
import {lightBlue} from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(()=>({
    icon: {
        fontSize:"100px",
        color: lightBlue[300],
        '&:hover':{
            color: lightBlue[500]
        }
    }
}));

const GiftButtonBox = styled.div`
  margin: 0 auto;
  padding: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const GiftTextBox = styled.div`
  margin: 0 auto;
  padding: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GiftButton = styled.div`
    outline: none;
    border: none;
    font-size: 30px;
    margin: 0px 10px;
    padding: 10px;
    cursor: pointer;
    &:hover{
        color: black;
    }
    transition: ${props=>`${props.number*0.4}s all ease-in`};

    ${props=>
        props.clicked &&
            css`
                transition: ${`${props.number*0.6}s all ease-in`};
                transform: ${`rotate(${-props.number*360}deg)`};
            `
    }
`;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

function GiftButtonBlock ({newRestNum}) {
    const people = GetState();
    const restNum = GetRestNum();
    const dispatch = GetDispatch();
    const classes = useStyles();
    const [clicked,setClicked] = useState(false);
    const [number,setNumber] = useState();
    restNum.current = newRestNum;

    const onClick = () => {
        if(restNum.current === people.length){return;}
        dispatch({
            type:'GET_CAKE',
            restNum
        });
    }

    const onClickLoop = async() => {
        setClicked(true);
        for(let i=0; i<number; i++){
            if(restNum.current === people.length){break;}
            await sleep(500);
            onClick();
        }
        setClicked(false);
    }

    const onChange = (e) => {
        setNumber(e.target.value);
    }

    return (
        <div>
            <GiftButtonBox>
                <GiftButton number={number} clicked={clicked} onClick={()=>onClickLoop()}>
                    <FlipCameraAndroidIcon className={classes.icon}/>
                </GiftButton>
            </GiftButtonBox>
            <GiftTextBox>
                <TextField
                    variant="outlined"
                    label="몇명 뽑을까?" 
                    value={number} 
                    onChange={onChange}
                />
            </GiftTextBox>
        </div>
    );
}

export default GiftButtonBlock;