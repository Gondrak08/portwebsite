import React from 'react'
import "./about.css"

import GitLogo from '../images/githublogo.svg'
import FreeCode from '../images/freecodecamplogo.png'
import Linkedin from '../images/linkedinglogo.png'


export default function About() {
    return (
        <div className="container">
            <section className="section-about" id="about">
                <div className="container titulo center-block">
                    <h2 className="heading-secondary text-center text-uppercase" >
                        
                            About
                        <br/>
                            Front-end developer
                        
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <p className="paragraph">
                        I am a self-taught programmer focused on web development. I'm a creative programmer always tuned to what my clients need, and disposed to help; an agile contributor, always attached to the demands of my clients and project partners. </p>
                         <br/>
                        <p className="paragraph">
                        My focus of work is React, Gatsby, NodeJs, Javascript, Jquery, Bootstrap and other frameworks.
                        </p>
                    </div>
                    <div className="col-1-of-2 ">
                        <div className="composition">
                            <a href="https://github.com/Gondrak08" target="_blank" rel="noopener noreferrer" >
                            <img src={GitLogo} alt="github" class="composition__photo composition__photo--p1" /> 
                            </a> 
                            <a href="https://www.linkedin.com/in/vitor-alecrim-pereira-0a588b145/" target="_blank" rel="noopener noreferrer" >
                            <img src={Linkedin} alt="linkedin" class="composition__photo composition__photo--p3" />
                            </a>
                            <a href="https://www.freecodecamp.com" target="_blank" rel="noopener noreferrer" >
                            <img src={FreeCode} alt="React" class="composition__photo composition__photo--p2" />
                            </a>
                        </div>
                    </div>           
                </div>
            </section>
        </div>
    )
}
