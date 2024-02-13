import React, { useState } from 'react';
import styled from 'styled-components';

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
    width: 35%;
    height: 400px;
    border: 1px blue solid;
`

interface ICompetitor {
    name: string;
    article: string;
    // image: string;
}

function Competitor(props: any) {
    const [competitors, setCompetitors] = useState<ICompetitor[]>([
        {
            name: 'A', article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla, libero at vel similique, debitis officiis iusto, doloremque accusamus dolores voluptate rerum eum reprehenderit. Rerum magni, odio nesciunt nihil, corrupti necessitatibus id reiciendis officiis eligendi, fuga illo aut. Quod quae non, assumenda aliquid consequuntur quidem quia ex voluptate soluta est?'
        },
        {
            name: 'B', article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla, libero at vel similique, debitis officiis iusto, doloremque accusamus dolores voluptate rerum eum reprehenderit. Rerum magni, odio nesciunt nihil, corrupti necessitatibus id reiciendis officiis eligendi, fuga illo aut. Quod quae non, assumenda aliquid consequuntur quidem quia ex voluptate soluta est?'
        },
        {
            name: 'B', article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla, libero at vel similique, debitis officiis iusto, doloremque accusamus dolores voluptate rerum eum reprehenderit. Rerum magni, odio nesciunt nihil, corrupti necessitatibus id reiciendis officiis eligendi, fuga illo aut. Quod quae non, assumenda aliquid consequuntur quidem quia ex voluptate soluta est?'
        }
    ])

    return (
        <div>
            <CompetitorContainer>
                {
                    competitors.map((data, index) =>
                        <CompetitorContainer>
                            <CompetitorName>
                                {data.name}사
                            </CompetitorName>
                            <ArticleContainer index={index}>
                                <ArticleWrapper>
                                    <Article>
                                        {data.article}
                                    </Article>
                                </ArticleWrapper>
                                <Image>

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