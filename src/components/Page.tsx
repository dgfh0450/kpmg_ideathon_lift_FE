import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Paper = styled.div`
    width: 100vw;
    height: calc(100vh - 55px);
    display: flex;
    align-items: center;
    justify-content: center;
`


function Page({children}:{children:ReactNode}) {
    return (
        <Paper>
            {children}
        </Paper>
    );
}

export default Page;