import React from 'react';
import styled from 'styled-components';
import Load from '../../public/loading.gif';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #FFFFFF;
  opacity: 0.6;
  position: fixed;
  z-index: 200;
  top: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const GIFWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
`

const Link = styled.a`
  margin-top: 350px;
`

export default function Loading() {
  return (
    <Wrapper>
      <GIFWrapper>
        <img src={process.env.PUBLIC_URL + 'loading.gif'} width={300} height={300} />
      </GIFWrapper>
      <Link><a href="https://pixabay.com/users/blendertimer-9538909/?utm_source=link-attribution&utm_medium=referral&utm_campaign=animation&utm_content=410">Daniel Roberts</a>  from  <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=animation&utm_content=410">Pixabay</a></Link>
    </Wrapper>
  )
}
