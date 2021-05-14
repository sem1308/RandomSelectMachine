import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
    position: absolute;
    width: 960px;
    height: 720px;
    background-image: url("cake.png");
    background-size: cover;
`;

const ContainerBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0 auto;
    width: 100%;
    height: 950px;
    background-color: lightblue;
`;

const LinkBox = styled.div`
    position: relative;
    width: 15rem;
    top: 8rem;
    left: 8rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    opacity: 0.3;
    background-color: #ffffff;

    &:hover{
        opacity: 0.5;
    }
`

function Home () {
    return(
        <ContainerBox>
            <Container>
                <LinkBox>
                    <Link to="/rsm" style={{fontSize:"30px",textDecoration:"none",color:"black"}}>뽑기하러 가기</Link>
                </LinkBox>
            </Container>
        </ContainerBox>    
    );
}

export default Home;