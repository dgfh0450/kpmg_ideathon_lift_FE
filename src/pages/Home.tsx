import React from 'react';
import MyChart from '../components/Chart.jsx';
import Loading from '../components/Loading';
import styled from 'styled-components';

const Background = styled.div`
    background-image: url(/landing.jpg);
    height: 100vh;
    background-size: cover;
    position: relative;

`

const Dark = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: 0.5;
    z-index: 100;
    
`

const Link = styled.p`
    color: #FFFFFF;
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    
`

const Name = styled.div`
    position: absolute;
    right: 100px;
    top: 200px;
    color: white;
    width: 400px;
    display: flex;
    flex-flow: row wrap;
    z-index: 101;
`
const UpperCase = styled.div`
    width: 10%;
    text-align: center;
    font-size: 64px;
    text-align: center;
    font-weight: 800;
`
const LowerCase = styled.div`
    width: 90%;
    font-size: 48px;
    display: flex;
    align-items: flex-end; /* 텍스트를 div의 바닥에 정렬 */
`

// looking for innovations & Feasibility  t<div>easibility</div>

function Home() {

        return (
            <Background>
                <Dark>
                    <Link><a href="https://pixabay.com/users/startupstockphotos-690514/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=593341">StartupStockPhotos</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=593341">Pixabay</a></Link>
                </Dark>

                <Name>
                        <UpperCase>L</UpperCase><LowerCase>ooking for</LowerCase>
                        <UpperCase>I</UpperCase><LowerCase>nnovations</LowerCase>
                        <UpperCase>F</UpperCase><LowerCase>easibility</LowerCase>
                        <UpperCase>T</UpperCase><LowerCase>eam</LowerCase>
                    </Name>
            </Background>
        );
    }

export default Home;