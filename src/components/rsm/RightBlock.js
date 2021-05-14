import styled ,{keyframes}from 'styled-components';
import GiftButtonBlock from './GiftButtonBlock';
import {GetState} from '../../GetCakeContext';
import React from 'react';

const fadeIn = keyframes`
  from {
    opacity:0
  }to{
    opacity:1
  }
`;

const RightBox = styled.div`
  width:90%;
  height:900px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;

const Table = styled.div`
  width: 90%;
  height: 50%;
  padding: 50px;
`;

const SelectedPeopleBlock = styled.div`
  display: inline-flex;
  width: 8%;
  height: 20%;
  font-size: 20px;
  border-radius: 25%;
  background-color: rgb(0, 128, 128,0.15);
  box-shadow: 0.3rem 0.3rem 0.5rem 0 gray;
  margin: 1%;

  align-items: center;
  justify-content: center;

  animation-duration:0.5s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

function RightBlock () {
  const {selectedPeople} = GetState();
  
  return(
    <RightBox>
      <h1 style={{textAlign:'center',fontSize:"50px",color:"rgb(0, 128, 128)"}}>~Congratulation~</h1>
      <Table>
        {selectedPeople.map((person)=>{
          return <SelectedPeopleBlock>{person.name}</SelectedPeopleBlock>
        })}
      </Table>
      <GiftButtonBlock newRestNum={selectedPeople.length}/>
    </RightBox>
  );
}

export default React.memo(RightBlock);