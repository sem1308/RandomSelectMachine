import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background: url('./homeimage/cake.jpg');
  background-size: cover;
`;

function Home () {
    const image = {
        title: '뽑기하러 갈래?'
    }
    return(
        <Container>
            
        </Container>
    );
}

export default Home;