import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MyChart from '../../components/Chart.jsx';
import { useLocation, useParams } from 'react-router-dom';
import { FindMax } from '../../algorithm/FindMax';
import * as d3 from 'd3';
import { ICompetitor } from '../Results/Competitor.js';


const CompetitorContainer = styled.div`

`

const CompetitorName = styled.h2`
    
`

const ArticleContainer = styled.div<{ index: number }>`
    width: 100%;
    display: flex;
    flex-direction: ${props => props.index % 2 == 0 ? 'row' : 'row-reverse'};
    align-items: center;
    justify-content: space-between;
    
`
const ArticleWrapper = styled.div`
    width: 60%;
`
const Article = styled.p`
    margin: 0;
`
const Image = styled.div`
    width: 500px;
    height: 430px;
`
const ButtonContainer = styled.div`

`

const Button = styled.button`
    border: 1px black solid;
    outline: none;
    padding: 3px;
    margin-right: 10px;
    background: none;
`


function ExCompetitor(props: any) {
    const state = useLocation().state;

    return (
        <div>
            <CompetitorContainer>
                {
                    state.competitor.map((data: ICompetitor, index: number) => {
                        return(
                            <CompetitorContainer>
                                <CompetitorName>
                                    {data.name}사
                                </CompetitorName>
                                <ArticleContainer index={index}>
                                    <ArticleWrapper>
                                        <Article>
                                            {data.article.split('\n').map((line, index) => (
                                                <React.Fragment key={index}>
                                                    {line}
                                                    <br />
                                                    <br/>
                                                </React.Fragment>
                                            ))}
                                        </Article>
                                    </ArticleWrapper>
                                    <Image>
                                        <PlotContainer data={data.data} name={data.name} />
                                    </Image>
                                </ArticleContainer>
                            </CompetitorContainer>
                        )
                    })
                }
            </CompetitorContainer>
        </div>
    );
}

export default ExCompetitor;

function PlotContainer({ data, name }: { data: any, name: string }) {
    const location = useLocation();
    const params = useParams();
    console.log(params);
    const [plotState, setPlotState] = useState<1 | 2>(1);

    let data1: any[] = [];
    let data2: any[] = [];
    const subgroup1 = ['자본총계', '자산총계'];
    const subgroup2 = ['영업이익', '매출액'];
    let max1 = 0;
    let max2 = 0;
    for (let i = 2020; i < 2023; i++) {
        for (let j = 0; j < 2; j++) {
            if (data[i][j] > max1) {
                max1 = data[i][j];
            }
            if (data[i][j + 2] > max2) {
                max2 = data[i][j + 2];
            }
        }
        data1.push({ group: `${i}`, '자본총계': data[i][0], '자산총계': data[i][1] });
        data2.push({ group: `${i}`, '영업이익': data[i][2], '매출액': data[i][3] });
    }

    return (
        <>
            {plotState === 1 && (
                <MyChart containerId={`example-plot-${name}-1`} data={data1} subgroups={subgroup1} Max={FindMax(max1)} />
            )}
            {plotState === 2 && (
                <MyChart containerId={`example-plot-${name}-2`} data={data2} subgroups={subgroup2} Max={FindMax(max2)} />
            )}
            <ButtonContainer>
                <Button onClick={() => setPlotState(1)}>자본총계 / 자산총계</Button>
                <Button onClick={() => setPlotState(2)}>영업이익 / 매출액</Button>
            </ButtonContainer>
        </>
    );
}