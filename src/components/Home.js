import { useParams } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';


const HomeDiv = styled.div`
display: flex;
align-items: center;
background-color: #F0F2F5;
height: 950px;
justify-content: space-around;

.BodyText1{
    color: #1877F2;
    font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 80px;
line-height: 97px;
text-align: center;
position: 'absolute';
text-shadow: 0px 2px 2px 
}

`;

function Home() {
    return (
        <HomeDiv>
           <h1 className='BodyText1'>HomePage</h1>
        </HomeDiv>
    );
};

export default Home;