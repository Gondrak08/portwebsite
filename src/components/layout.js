/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./layout.css"

import Banner from '../images/banner.jpg'
import Logo from '../images/logo-react.png'

import Hero from './hero'
import Header from './globals/header'
import About from './about'
import Section from './section'
import Projects from './projetcs'
import Footer from './globals/footer'

const Layout = ({ children }) => {
  

  return (
    <div>
    <Header />
    <Hero />
    <About/>
    <Section 
      image={Banner}
      logo={Logo}
      text="Come. Let me help you build your project using new technologies to conquer the web."
      />
    <Projects/>
    <Footer />
    
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
