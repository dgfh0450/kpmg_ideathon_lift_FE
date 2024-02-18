import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputWithLabel from '../components/InputWithLabel';
import Page from '../components/Page';
import api from '../api';
import Result from './Result';
import Loading from '../components/Loading';

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

const LoadingBG = styled.div`
    width: 100vw; 
    height: 100vw;
    overflow: hidden;
    z-index: 200;
    background: #CCCCCC;
    opacity: 0.6;
`

interface IideaForm {
    area: string;
    member: string;
    background: string;
    technology: string;
    others?: string;
}

function BusinessIdea() {
    const [form, setForm] = useState<IideaForm>({ area: '', member: '', background: '', technology: '', others: '' });
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);

    const getResult = async () => {
        setLoading(true);
        const response = await api.post('/idea', form);
        console.log()
        console.log(response.data.market)
        console.log(response.data.swot)
        console.log(response.data.competitor);
        console.log(response.data.stance)
        setLoading(false);
        navigate('/idea/result', {
            state: response.data
        })
    }

    return (
        <Page>
            {loading && <Loading />}
            <InputContainer>
                <InputWithLabel label='사업 분야' onChange={(e) => { setForm({ ...form, area: e }) }} isRequired size='sm' />
                <InputWithLabel label='사업 참여 인원 구성' onChange={(e) => { setForm({ ...form, member: e }) }} isRequired />
                <InputWithLabel label='사업 배경, 사업 목표' onChange={(e) => { setForm({ ...form, background: e }) }} isRequired />
                <InputWithLabel label='기술성' onChange={(e) => { setForm({ ...form, technology: e }) }} isRequired />
                <InputWithLabel label='기타 사항' onChange={(e) => { setForm({ ...form, others: e }) }} />
                <SubmitButton onClick={getResult}>제출</SubmitButton>
            </InputContainer>
        </Page>
    );
}

export default BusinessIdea;