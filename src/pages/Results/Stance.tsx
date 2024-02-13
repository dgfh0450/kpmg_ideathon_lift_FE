import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    min-height: 800px;
`

const ImageContainer = styled.div`
    width: 360px;
    height: 360px;
    display: flex;
    flex-flow: row wrap;
    align-self: center;
`

const Image = styled.div`
    width: 150px;
    height: 150px;
    position: relative;
    margin: 15px;
`
const ImageLabel = styled.p`
    position: absolute;
    margin: 0;
    font-size: 28px;
`

const ArticleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ArticleWrapper = styled.div`
    width: 550px;
    height: 300px;
    position: relative;
`
const Text = styled.p`
    position: absolute;
    margin: 0;
`


function Stance(props: any) {
    return (
        <Container>
            <ArticleContainer>
                <ArticleWrapper>
                    <Text style={{ textAlign: 'right', bottom: 0 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil explicabo ducimus dolore veritatis animi delectus itaque aperiam unde totam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil explicabo ducimus dolore veritatis animi delectus itaque aperiam unde totam?</Text>
                </ArticleWrapper>
                <ArticleWrapper>
                    <Text style={{ textAlign: 'right', top: 0 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil explicabo ducimus dolore veritatis animi delectus itaque aperiam unde totam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil explicabo ducimus dolore veritatis animi delectus itaque aperiam unde totam?</Text>
                </ArticleWrapper>
            </ArticleContainer>
            <ImageContainer>
                <Image>
                    <img src={process.env.PUBLIC_URL + '/images/QuarterCircle.svg'} style={{ width: '100%', height: '100%', transform: 'rotate(270deg)' }} />
                    <ImageLabel style={{ right: 0, bottom: 0 }}>SO</ImageLabel>
                </Image>
                <Image>
                    <img src={process.env.PUBLIC_URL + '/images/QuarterCircle.svg'} style={{ width: '100%', height: '100%' }} />
                    <ImageLabel style={{ left: 0, bottom: 0 }}>WO</ImageLabel>
                </Image>
                <Image>
                    <img src={process.env.PUBLIC_URL + '/images/QuarterCircle.svg'} style={{ width: '100%', height: '100%', transform: 'rotate(180deg)' }} />
                    <ImageLabel style={{ right: 0, top: 0 }}>ST</ImageLabel>
                </Image>
                <Image>
                    <img src={process.env.PUBLIC_URL + '/images/QuarterCircle.svg'} style={{ width: '100%', height: '100%', transform: 'rotate(90deg)' }} />
                    <ImageLabel style={{ left: 0, top: 0 }}>WT</ImageLabel>
                </Image>
            </ImageContainer>
            <ArticleContainer>
                <ArticleWrapper>
                    <Text style={{ bottom: 0 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil explicabo ducimus dolore veritatis animi delectus itaque aperiam unde totam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil explicabo ducimus dolore veritatis animi delectus itaque aperiam unde totam?</Text>
                </ArticleWrapper>
                <ArticleWrapper>
                    <Text style={{ top: 0 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil explicabo ducimus dolore veritatis animi delectus itaque aperiam unde totam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil explicabo ducimus dolore veritatis animi delectus itaque aperiam unde totam?</Text>
                </ArticleWrapper>
            </ArticleContainer>
        </Container>
    );
}
export default Stance;