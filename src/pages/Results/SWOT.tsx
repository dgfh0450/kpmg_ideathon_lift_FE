import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: 300px;
    flex-direction: row;
    &:nth-of-type(even) {
        flex-direction: row-reverse;
    }
`

const Title = styled.h1`
    width: 35%;
    height: 100%;
    margin: 0;
    text-align: center;
    line-height: 300px;
    font-size: 48px;
`
const Article = styled.div`
    resize: none;
    width: 65%;
    height: 100%;
    overflow: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 14px;
`
function SWOT(props: any) {
    const location = useLocation();

    return (
        <div>
            <Container>
                <Title>Strengths</Title>
                <Article>
                    {location.state.swot.s.split('\n').map((line: string) => (
                        <React.Fragment>
                            {line}
                            <br />
                            <br />
                        </React.Fragment>
                    ))}
                </Article>
            </Container>
            <Container>
                <Title>Weaknesses</Title>
                <Article>
                    {location.state.swot.w.split('\n').map((line: string) => (
                        <React.Fragment>
                            {line}
                            <br />
                            <br />
                        </React.Fragment>
                    ))}
                </Article>
            </Container>
            <Container>
                <Title>Opportunities</Title>
                <Article>
                    {location.state.swot.o.split('\n').map((line: string) => (
                        <React.Fragment>
                            {line}
                            <br />
                            <br />
                        </React.Fragment>
                    ))}
                </Article>
            </Container>
            <Container>
                <Title>Threats</Title>
                <Article>
                    {location.state.swot.t.split('\n').map((line: string) => (
                        <React.Fragment>
                            {line}
                            <br />
                            <br />
                        </React.Fragment>
                    ))}
                </Article>
            </Container>
        </div>
    );
}

export default SWOT;