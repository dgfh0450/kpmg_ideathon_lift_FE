import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { example1, example2, example3 } from './examples';

const Container = styled.div`
    width: 100vw;
    height: 55px;
    background-color: #3A3A3A;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    padding: 0 20px;xw
    z-index: 200;
`

const Title = styled(Link)`
    color: #FFFFFF;
    font-size: 32px;
    line-height: 55px;
    position: absolute;
    left: 75px;
    text-decoration: none;
    font-weight: 900;
    `

const NavWrapper = styled(NavLink)`
    width: 240px;
    height: 40px;
    text-align: center;
    text-decoration-color: white;
    p {
        margin: 0;
        color: #FFFFFF;
        line-height: 40px;
    }
`

function Navbar() {

    return (
        <Container>
            <Title to='/'>
                LIFT
            </Title>
            <NavWrapper style={({ isActive }: { isActive: boolean }) => ({ textDecoration: isActive ? '' : 'none' })} to='/idea'>
                <p>Business Idea</p>
            </NavWrapper>
            <NavWrapper style={({ isActive }: { isActive: boolean }) => ({ textDecoration: isActive ? '' : 'none' })} to='/example/1' state={example1}>
                <p>Example 1</p>
            </NavWrapper>
            <NavWrapper style={({ isActive }: { isActive: boolean }) => ({ textDecoration: isActive ? '' : 'none' })} to='/example/2' state={example2}>
                <p>Example 2</p>
            </NavWrapper>
            <NavWrapper style={({ isActive }: { isActive: boolean }) => ({ textDecoration: isActive ? '' : 'none' })} to='/example/3' state={example3}>
                <p>Example 3</p>
            </NavWrapper>
        </Container>
    );
}

export default Navbar;