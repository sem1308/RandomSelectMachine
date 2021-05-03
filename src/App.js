import styled from 'styled-components';
import React from 'react';
import LeftBlock from './components/LeftBlock';
import RightBlock from './components/RightBlock';
import {GetCakeProvider} from './GetCakeContext';

const AppBlock = styled.div`
  padding: 0 auto;
  margin: 0 auto;
  display:flex;
`;

function App() {

  return (
    <GetCakeProvider>
      <AppBlock>
        <LeftBlock/>
        <RightBlock/>
      </AppBlock>
    </GetCakeProvider>
  );
}

export default App;
