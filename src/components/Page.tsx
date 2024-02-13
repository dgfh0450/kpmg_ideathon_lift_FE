import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Paper = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
`


function Page({children}:{children:ReactNode}) {
    return (
        <Paper>
            {children}
        </Paper>
    );
}

export default Page;