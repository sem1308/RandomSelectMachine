import styled from 'styled-components';
import React from 'react';
import LeftBlock from '../components/rsm/LeftBlock';
import RightBlock from '../components/rsm/RightBlock';
import {GetCakeProvider} from '../GetCakeContext';

const SelectingBlock = styled.div`
  padding: 0 auto;
  margin: 0 auto;
  display:flex;
`;

function RandomSelecting() {

  return (
    <GetCakeProvider>
      <SelectingBlock>
        <LeftBlock/>
        <RightBlock/>
      </SelectingBlock>
    </GetCakeProvider>
  );
}

export default RandomSelecting;
