import React from 'react'
import styled from 'styled-components'



const Div = styled.div`
overflow:hidden;
    Img{
    transition: all 1.5s ease;
    }
    :hover Img{
    transform: scale(1.5);
}
`


export default function card(props) {
    return (
        <div className="Cards card mx-auto shadow">
            <Div className="Display">
                <img className="card-img-top" src={props.image} alt=""  />
            </Div>
            <div className="card-body">
                <div className="title title-center">
                    <div className="card-title">{props.title}</div>
                    <div className="card-subtitle  font-italic font-weight-lighter"
                        style={{fontSize:'1rem'}}
                    >
                        {props.subtitle}
                    </div>
                    <hr/>
                    <div className="card-text"
                         style={{fontSize:'1.2rem', color:'#333'}}
                    >
                        {props.text}
                    </div>
                    <hr/>
                    <div className="text-center m-2">
                    <a href={props.lone}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary m-1"
                        style={{padding:'0.5rem 1.5rem', borderRadius:'2rem',}}
                     >Demo
                     </a>
                    <a  href={props.ltwo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-danger m-2 border"
                        style={{padding:'0.5rem 1.5rem', borderRadius:'2rem',}}
                     >Code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
