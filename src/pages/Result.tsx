import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Page from '../components/Page';
import api from '../api';
import styled from 'styled-components';
import Market from './Results/Market';
import Competitor from './Results/Competitor';
import SWOT from './Results/SWOT';
import Stance from './Results/Stance';

const Container = styled.div`
    width: 55%;
    height: 90%;
    margin: 0 auto;
    flex-direction: column;
`
const MenuContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
`
const Menu = styled.p<{ selected: boolean }>`
    flex: 1;
    margin: 0;
    height: 100%;
    line-height: 40px;
    text-decoration:  ${props => props.selected ? 'underline' : 'none'};
    cursor: pointer;
    text-align: center;
    border-right: 1px black solid;
    &:last-of-type {
        border: none;
    }
`
const ArticleContainer = styled.div`
    border-top: 1px black solid;
    border-bottom: 1px black solid;
    overflow: auto;
    padding: 40px 0;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 1000px;
`

export type TResultMenu = 'Market Analysis' | 'Competitor Analysis' | 'SWOT' | 'Stance'

function Result() {
    const location = useLocation();
    const [result, setResult] = useState();
    const [menu, setMenu] = useState<TResultMenu>('Market Analysis');

    const apiTest = async () => {
        const response = await api.get('/idea');
        console.log(response.data.message);
    }

    useEffect(() => {
        apiTest();
        console.log(process.env.REACT_APP_SERVER);
        setResult(location.state);
    }, [])

    return (
        <Page>
            <Container>
                <MenuContainer>
                    <Menu onClick={()=>{setMenu('Market Analysis')}} selected={menu === 'Market Analysis'}>Market Analysis</Menu>
                    <Menu onClick={()=>{setMenu('Competitor Analysis')}} selected={menu === 'Competitor Analysis'}>Competitor Analysis</Menu>
                    <Menu onClick={()=>{setMenu('SWOT')}} selected={menu === 'SWOT'}>SWOT</Menu>
                    <Menu onClick={()=>{setMenu('Stance')}} selected={menu === 'Stance'}>Stance</Menu>
                </MenuContainer>
                <ArticleContainer>
                {
                    {
                        'Market Analysis':<Market/>,
                        'Competitor Analysis': <Competitor/>,
                        'SWOT':<SWOT/>,
                        'Stance':<Stance/>
                    }[menu]
                }
                </ArticleContainer>
            </Container>
        </Page>
    );
}

export default Result;