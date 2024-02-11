import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 55px;
    background-color: #3A3A3A;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0 20px;
`

const Title = styled.h2`
    color: #FFFFFF;
    font-size: 32px;
    line-height: 55px;
    position: absolute;
    left: 75px;
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
            <Title>
                LIFT
            </Title>
            <NavWrapper style={({ isActive }:{isActive:boolean}) => ({ textDecoration: isActive ? '' : 'none' })} to='/idea'>
                <p>Buiness Idea</p>
            </NavWrapper>
            <NavWrapper style={({ isActive }:{isActive:boolean}) => ({ textDecoration: isActive ? '' : 'none' })} to='/1'>
                <p>Menu 2</p>
            </NavWrapper>
            <NavWrapper style={({ isActive }:{isActive:boolean}) => ({ textDecoration: isActive ? '' : 'none' })} to='/2'>
                <p>Menu 3</p>
            </NavWrapper>
            <NavWrapper style={({ isActive }:{isActive:boolean}) => ({ textDecoration: isActive ? '' : 'none' })} to='/3'>
                <p>Menu 4</p>
            </NavWrapper>
        </Container>
    );
}

export default Navbar;