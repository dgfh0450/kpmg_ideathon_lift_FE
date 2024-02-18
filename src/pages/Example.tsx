import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import Page from '../components/Page';
import styled from 'styled-components';
import ExMarket from './Examples/ExMarket';
import ExCompetitor from './Examples/ExCompetitor';
import ExSWOT from './Examples/ExSWOT';
import ExStance from './Examples/ExStance';
import { TResultMenu } from './Result';

const Container = styled.div`
    width: 55%;
    min-width: 1200px;
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

function Example() {
    const navigate = useNavigate();
    const state = useLocation().state;
    const params = useParams().num;
    const [menu, setMenu] = useState<TResultMenu>('Market Analysis');

    useEffect(()=>{
      if(params === null) {
        navigate('/');
      }
    },[state])

    useEffect(()=>{
        setMenu('Market Analysis');
    },[params])


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
                        'Market Analysis':<ExMarket/>,
                        'Competitor Analysis': <ExCompetitor/>,
                        'SWOT':<ExSWOT/>,
                        'Stance':<ExStance/>
                    }[menu]
                }
                </ArticleContainer>
            </Container>
        </Page>
    );
}

export default Example;