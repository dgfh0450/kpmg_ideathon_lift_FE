import React from 'react';
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
function SWOT(props:any) {
    return (
        <div>
            <Container>
                <Title>Strengths</Title>
                <Article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur voluptatum doloribus minus assumenda et enim totam cum quis, qui deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse provident, sequi vero nostrum ratione molestiae aspernatur! Voluptate id explicabo assumenda doloribus? Nisi ratione architecto delectus porro mollitia doloremque dolorum ducimus facere magnam unde. Hic amet ratione ex beatae modi ea, cumque quasi quae, quam quas voluptates suscipit sapiente magni fuga perferendis sint. Voluptatem sunt blanditiis perspiciatis quibusdam dolorem, asperiores maiores, quis, commodi fugiat praesentium tempore ipsam voluptas voluptate laboriosam quaerat odit rem itaque ut? Facere excepturi rem, fugit fuga distinctio eum, deserunt praesentium porro reiciendis culpa in obcaecati! Optio, facilis quaerat mollitia architecto aliquam numquam doloribus voluptate voluptas molestiae.</Article>
            </Container>
            <Container>
                <Title>Weaknesses</Title>
                <Article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur voluptatum doloribus minus assumenda et enim totam cum quis, qui deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse provident, sequi vero nostrum ratione molestiae aspernatur! Voluptate id explicabo assumenda doloribus? Nisi ratione architecto delectus porro mollitia doloremque dolorum ducimus facere magnam unde. Hic amet ratione ex beatae modi ea, cumque quasi quae, quam quas voluptates suscipit sapiente magni fuga perferendis sint. Voluptatem sunt blanditiis perspiciatis quibusdam dolorem, asperiores maiores, quis, commodi fugiat praesentium tempore ipsam voluptas voluptate laboriosam quaerat odit rem itaque ut? Facere excepturi rem, fugit fuga distinctio eum, deserunt praesentium porro reiciendis culpa in obcaecati! Optio, facilis quaerat mollitia architecto aliquam numquam doloribus voluptate voluptas molestiae.</Article>
            </Container>
            <Container>
                <Title>Opportunities</Title>
                <Article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur voluptatum doloribus minus assumenda et enim totam cum quis, qui deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse provident, sequi vero nostrum ratione molestiae aspernatur! Voluptate id explicabo assumenda doloribus? Nisi ratione architecto delectus porro mollitia doloremque dolorum ducimus facere magnam unde. Hic amet ratione ex beatae modi ea, cumque quasi quae, quam quas voluptates suscipit sapiente magni fuga perferendis sint. Voluptatem sunt blanditiis perspiciatis quibusdam dolorem, asperiores maiores, quis, commodi fugiat praesentium tempore ipsam voluptas voluptate laboriosam quaerat odit rem itaque ut? Facere excepturi rem, fugit fuga distinctio eum, deserunt praesentium porro reiciendis culpa in obcaecati! Optio, facilis quaerat mollitia architecto aliquam numquam doloribus voluptate voluptas molestiae.</Article>
            </Container>
            <Container>
                <Title>Threats</Title>
                <Article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur voluptatum doloribus minus assumenda et enim totam cum quis, qui deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse provident, sequi vero nostrum ratione molestiae aspernatur! Voluptate id explicabo assumenda doloribus? Nisi ratione architecto delectus porro mollitia doloremque dolorum ducimus facere magnam unde. Hic amet ratione ex beatae modi ea, cumque quasi quae, quam quas voluptates suscipit sapiente magni fuga perferendis sint. Voluptatem sunt blanditiis perspiciatis quibusdam dolorem, asperiores maiores, quis, commodi fugiat praesentium tempore ipsam voluptas voluptate laboriosam quaerat odit rem itaque ut? Facere excepturi rem, fugit fuga distinctio eum, deserunt praesentium porro reiciendis culpa in obcaecati! Optio, facilis quaerat mollitia architecto aliquam numquam doloribus voluptate voluptas molestiae.</Article>
            </Container>
        </div>
    );
}

export default SWOT;