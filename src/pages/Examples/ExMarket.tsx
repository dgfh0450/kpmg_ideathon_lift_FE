import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactWordcloud, { Word } from 'react-wordcloud';
import { useLocation } from 'react-router-dom';
import * as d3 from 'd3';

const NewsGrid = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 40px;
`

const NewsContainer = styled.div`
    width: 30%;
    height: 300px;
`

const KeyWordContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-height: 400px;
`

const KeyWordWrapper = styled.div`
    flex: 1;
    margin-right: 20px;
`

const KeyWordArticle = styled.p`
    margin: 0;
    over-flow: auto;
`

const WordContainer = styled.div`
    width: 500px;
    height: 300px;
`
const TitleWrapper = styled.div`
    margin-bottom: 20px;
`

const Title = styled.p`
    font-size: 28px;
    margin: 7px 0px;
`

const ArticleWrapper = styled.div`
`

const Article = styled.p`
    margin: 0;
`

function ExMarket() {
    const state = useLocation().state;

    return (
        <div style={{ height: '100%' }}>
            <NewsGrid>
                {state.market.news.map((data: any, index: number) =>
                    <NewsContainer>
                        <TitleWrapper><Title>{data.title}</Title></TitleWrapper>
                        <ArticleWrapper><Article>{data.article}</Article></ArticleWrapper>
                    </NewsContainer>
                )}
            </NewsGrid>
            <KeyWordContainer>
                <KeyWordWrapper>
                    <KeyWordArticle>
                        {state.market.summary.split('\n').map((line: string) => (
                            <React.Fragment>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </KeyWordArticle>
                </KeyWordWrapper>
                <WordContainer>
                    <ReactWordcloud words={state.market.keyword as Word[]} options={{ fontSizes:[24,60]}} />
                </WordContainer>
            </KeyWordContainer>
        </div>
    );
}

export default ExMarket;