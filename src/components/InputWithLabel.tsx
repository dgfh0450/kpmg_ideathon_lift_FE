import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';


interface InputWithLabelProps {
    isRequired?: boolean;
    size?:'sm'|'lg';
    label: string;
    onChange: (e:string)=>void  | Dispatch<SetStateAction<string>>;
}

const InputContainer = styled.div`
    margin: 20px 0;
`

const CustomInput = styled.textarea<{size:'sm'|'lg'}>`
    border: 1px #CCCCCC solid;
    height: ${props => props.size === 'sm'?'50px':'100px'};
    width: 100%;
    outline: none;
    resize: none;
`

const Label = styled.p`
    font-size: 18px;
    margin: 0px;
    margin-bottom: 20px;
`

const Required = styled.span`
    color: #FF3D00
`


function InputWithLabel({label, isRequired=false, size='lg'}:InputWithLabelProps) {
    return (
        <InputContainer>
            <Label>{label} {isRequired && <Required>*</Required>}</Label>
            <CustomInput size={size}></CustomInput>
        </InputContainer>
    );
}

export default InputWithLabel;