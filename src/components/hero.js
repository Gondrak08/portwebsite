import React, { Component } from 'react'
import Link from 'gatsby-link'
import './hero.css'
import Wave from './globals/wave'

import Jslogo from '../images/logoJs.png'
import Reactlogo from '../images/logo-react.png'
import Gatsbylogo from '../images/gatsby-icon.png'
import Nodejslogo from '../images/nodejslogo.png'
import Bootlogo from '../images/css3.svg'

export class hero extends Component {
    render() {
        return (
            <>
                <div className="Hero">
                   <div className="HeroGroup">
                       <h1>Vitor Alecirm</h1>
                       <p>Front end developer</p>
                       <Link to="#projects">Projects</Link>
                            <div className="Logos">
                                <img src={Jslogo} alt="" width="50" />
                                <img src={Reactlogo} alt="" width="50" />
                                <img src={Gatsbylogo} alt="" width="50" />
                                <img src={Nodejslogo} alt="" width="100" />
                                <img src={Bootlogo} alt="" width="50" />
                            </div>
                        <Wave />
                    </div> 
                </div>
            </>
        )
    }
}

export default hero
