import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MyChart from '../../components/Chart.jsx';
import { useLocation } from 'react-router-dom';
import { FindMax } from '../../algorithm/FindMax';

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

export interface ICompetitor {
    name: string;
    article: string;
    data: any;
    [index: string]: any;
}

function Competitor() {
    const location = useLocation();
    return (
        <div>
            <CompetitorContainer>
                {
                    location.state.competitor.map((data: ICompetitor, index: number) => 
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
                }
            </CompetitorContainer>
        </div>
    );
}

export default Competitor;

function PlotContainer({ data, name }: { data: any, name: string }) {
    const [plotState, setPlotState] = useState<1 | 2>(1);

    let data1: any[] = [];
    let data2: any[] = [];
    const subgroup1 = ['자본총계', '부채총계', '자산총계'];
    const subgroup2 = ['매출액', '영업이익'];
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
        data1.push({ group: `${i}`, '자본총계': data[i][0], '부채총계': data[i][1]-data[i][0], '자산총계': data[i][1] });
        data2.push({ group: `${i}`, '영업이익': data[i][3], '매출액': data[i][2] });
    }

    return (
        <>
            {plotState === 1 && (
                <MyChart containerId={`plot-${name}-1`} data={data1} subgroups={subgroup1} Max={FindMax(max1)} />
            )}
            {plotState === 2 && (
                <MyChart containerId={`plot-${name}-2`} data={data2} subgroups={subgroup2} Max={FindMax(max2)} />
            )}
            <ButtonContainer>
                <Button onClick={() => setPlotState(1)}>자본총계 / 부채총계 / 자산총계</Button>
                <Button onClick={() => setPlotState(2)}>영업이익 / 매출액</Button>
            </ButtonContainer>
        </>
    );
}