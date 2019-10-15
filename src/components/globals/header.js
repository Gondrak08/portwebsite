import React, { Component } from 'react'

import { Link } from 'gatsby'

import './header.css'

import Logo from '../../images/logo.gif'

export default class header extends Component {
  constructor(props){
    super(props);

    this.state={
      hasScrolled: false
    }

  }

  componentDidMount(){
  window.addEventListener('scroll', this.handleScroll)
}

  handleScroll = (e) =>{
    const scrollTop = window.pageYOffset

    if(scrollTop > 50){
      this.setState({hasScrolled: true})
    } else{
      this.setState({hasScrolled: false})
    }
}



  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={Logo} width="70" alt="the website logo, a cyberpunk gif animation"  /></Link>
          <Link to="#about">About</Link>
          <Link to="#projects">Projects</Link>
          <Link to="#footer">Contact</Link>
        </div>
      </div>
    )
  }
}
