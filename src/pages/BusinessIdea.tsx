import React from 'react';
import styled from 'styled-components';
import InputWithLabel from '../components/InputWithLabel';
import Page from '../components/Page';

const InputContainer = styled.div`
    width:  55%;
    height: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`
const SubmitButton = styled.button`
    width: 150px;
    height: 40px;
    border-radius: 10px;
    border: none;
    outline: none;
    margin: 0 auto;
    margin-top: 50px;
    color: #FFFFFF;
    background-color: #3A3A3A;
    &:hover {
        background-color: #666666;
    }
    &:active {
        background-color: #AAAAAA;
    }
`

function BusinessIdea() {
    return (
        <Page>
        <InputContainer>
            <InputWithLabel label='사업 분야' onChange={(e)=>{console.log(e)}} isRequired size='sm'/>
            <InputWithLabel label='사업 참여 인원 구성' onChange={(e)=>{console.log(e)}} isRequired/>
            <InputWithLabel label='사업 배경, 사업 목표' onChange={(e)=>{console.log(e)}} isRequired/>
            <InputWithLabel label='기술성' onChange={(e)=>{console.log(e)}} isRequired/>
            <InputWithLabel label='기타 사항' onChange={(e)=>{console.log(e)}} />
            <SubmitButton onClick={()=>{console.log('submit')}}>제출</SubmitButton>
        </InputContainer>
        </Page>
    );
}

export default BusinessIdea;