import React from 'react'
import styled from 'styled-components'
import Wave from './globals/wave';

const SectionGroup = styled.div`
    background: url(${props => props.image});
    height: 620px;
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;
    @media (max-width: 640px) {
        height: 820px;
    }
`

const SectionLogo = styled.img`
    align-self: end;
    width: 128px;
    margin: 0 auto;
    :hover{
        transform: scale(1.1) translateY(0.2rem);
        -webkit-filter: drop-shadow(1.5px 1.5px 4px #222);
        filter: drop-shadow(1.5px 1.5px 4px #222);
        z-index: 20; 
    }
`

const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    margin: auto;
    grid-gap: x;
    margin-top: 2rem;
    grid-template-rows: auto 100%;
    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    color: white;
    font-size: 60px;
    margin: 0;
    line-height: 1.2;
    @media (max-width: 720px) {
        font-size: 40px;
    }
`

const SectionText = styled.p`
    font-weight: 700;
    font-size:1em;
    text-align: center;
    display: block;
    color: white;
    margin-top: 2rem;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    
`

// const WaveBottom = styled.div`
//     position: absolute;
//     width: 100%;
//     bottom: -6px;
// `

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);
`

const Section = props => (
	<SectionGroup image={props.image}>
        <WaveTop><Wave /></WaveTop>
       {/** <WaveBottom><Wave /></WaveBottom> */}
		<SectionLogo src={props.logo} />
		<SectionTitleGroup>
			<SectionTitle>{props.title}</SectionTitle>
			<SectionText >{props.text}</SectionText>
		</SectionTitleGroup>
	</SectionGroup>
)

export default Section