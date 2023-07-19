import React from 'react'
import styled, {keyframes, Keyframes} from 'styled-components'

const Text = (props) => {
  return (
    <Wrapper>{props.name}</Wrapper>
  )
}

export default Text

const animation = keyframes`
0% {opacity:0; transform: translateY(-100px);}
25% {opacity:1; transform: translateY(0);}
75% {opacity:1; transform: translateY(0);}
100% {opacity:0; transform: translateY(50px);}
`

const Wrapper = styled.span`
    display: inline-block;
    opacity:0;
    animation-name:${animation};
    animation-duration:5s;
    animation-fill-mode:forwards;
    animation-iteration-count: infinite;
`