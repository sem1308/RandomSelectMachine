import styled from 'styled-components';
import GiftButtonBlock from './GiftButtonBlock';
import {GetState} from '../../GetCakeContext';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles.css';

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
  padding: 30px 0px;
  background-color: rgb(0, 128, 128,0.15);
  box-shadow: 0.3rem 0.3rem 0.5rem 0 gray;
  margin: 1%;

  align-items: center;
  justify-content: center;
`;

function RightBlock () {
  const {selectedPeople} = GetState();
  
  return(
    <RightBox>
      <h1 style={{textAlign:'center',fontSize:"50px",color:"rgb(0, 128, 128)"}}>~Congratulation~</h1>
      <Table>
        <TransitionGroup component="div">
          {selectedPeople.map((person)=>(
            <CSSTransition key={person.id} timeout={500} classNames="person">
              <SelectedPeopleBlock>{person.name}</SelectedPeopleBlock>
            </CSSTransition>            
          ))}
        </TransitionGroup>
      </Table>
      <GiftButtonBlock newRestNum={selectedPeople.length}/>
    </RightBox>
  );
}

export default React.memo(RightBlock);