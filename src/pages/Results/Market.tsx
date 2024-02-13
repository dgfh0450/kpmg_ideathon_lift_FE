import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactWordcloud, { Word } from 'react-wordcloud';

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

interface INews {
    title: string;
    article: string;
}

function Market(props: any) {

    const [word, setWord] = useState<Word[]>([]);
    const [news, setNews] = useState<INews[]>([]);
    useEffect(() => {
        const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla, libero at vel similique, debitis officiis iusto, doloremque accusamus dolores voluptate rerum eum reprehenderit. Rerum magni, odio nesciunt nihil, corrupti necessitatibus id reiciendis officiis eligendi, fuga illo aut. Quod quae non, assumenda aliquid consequuntur quidem quia ex voluptate soluta est?'.split(' ');
        const words = [];

        for (let i = 0; i < lorem.length; i++) {
            words.push({ text: lorem[i], value: Math.floor(Math.random() * 100) })
        }
        setWord(words);
        setNews([
            {title: 'Lorem ipsum dolor sit amet.',  article:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime exercitationem eaque dolore. Explicabo, similique! Libero eos possimus voluptate nisi?'},
            {title: 'Lorem ipsum dolor sit amet.',  article:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime exercitationem eaque dolore. Explicabo, similique! Libero eos possimus voluptate nisi?'},
            {title: 'Lorem ipsum dolor sit amet.',  article:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime exercitationem eaque dolore. Explicabo, similique! Libero eos possimus voluptate nisi?'},
            {title: 'Lorem ipsum dolor sit amet.',  article:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime exercitationem eaque dolore. Explicabo, similique! Libero eos possimus voluptate nisi?'},
            {title: 'Lorem ipsum dolor sit amet.',  article:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime exercitationem eaque dolore. Explicabo, similique! Libero eos possimus voluptate nisi?'},
            {title: 'Lorem ipsum dolor sit amet.',  article:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime exercitationem eaque dolore. Explicabo, similique! Libero eos possimus voluptate nisi?'},
            {title: 'Lorem ipsum dolor sit amet.',  article:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime exercitationem eaque dolore. Explicabo, similique! Libero eos possimus voluptate nisi?'},
        ])
    }, [])

    const callbacks = {
        onWordClick: (p: Word) => { console.log(p.text) },
        onmouseover: () => { },
    }
    return (
        <div style={{ height: '100%' }}>
            <NewsGrid>
                {news.map((data, index) =>
                    <NewsContainer>
                        <TitleWrapper><Title>{index}. {data.title}</Title></TitleWrapper>
                        <ArticleWrapper><Article>{data.article}</Article></ArticleWrapper>
                    </NewsContainer>
                    )}
            </NewsGrid>
            <KeyWordContainer>
                <KeyWordWrapper>
                    <KeyWordArticle>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit totam eligendi, nemo, blanditiis, nam laboriosam nostrum sapiente ducimus dolorum ipsa repudiandae? Ipsam maxime deserunt nostrum dolores nisi repellendus dolor aliquam molestias voluptatem facilis culpa quam tempore minima, fugiat aperiam alias! Ipsum voluptatibus facere dolores beatae sit animi assumenda illo.
                    </KeyWordArticle>
                </KeyWordWrapper>
                <WordContainer>
                    <ReactWordcloud words={word} callbacks={callbacks} />
                </WordContainer>
            </KeyWordContainer>
        </div>
    );
}

export default Market;