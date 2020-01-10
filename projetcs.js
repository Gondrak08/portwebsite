import React, { Component } from 'react'
import Card from './card'

import Bakery from '../images/bakery.jpg'
import Foodsearch from '../images/foodsearch.png'
import Landingpage from '../images/landingpage.png'
import Webresort from '../images/webresort.jpg'
import Asteroid from '../images/asteroid.png'
import Radio from '../images/Radio.png'
import Phone from '../images/phoneshop.png'

export class projects extends Component {
    render() {
        return (
            <>
            <section className="container my-5" id="projects">
                <div className=" project-title text-center  mb-5">
                    <h2 className="heading-secondary" >My Projects</h2>
                </div>
                <div className="row">
                    <div className="card-columns card-group CardGroup">
                        {/* <Card 
                            image={Bakery}
                            title="Padaria dona Chica"
                            subtitle="Website"
                            text="A demo website made for a bakery. This project use Bootstrap and javascript"
                            lone="https://gondrak08.github.io/bakery/"
                            ltwo="https://github.com/Gondrak08/bakery"
                        /> */}
                        <Card 
                            image={Phone}
                            title="A e-commerce phone webshop"
                            subtitle="Webapp"
                            text="A demo website made for a e-commerce. This project use Reactjs, Bootstrap and paypal"
                            lone="https://github.com/Gondrak08/cellphonestore"
                            ltwo="https://elegant-volhard-dae191.netlify.com/"
                        /> 
                         <Card 
                            image={Radio}
                            title="Rock Radio online"
                            subtitle="Website"
                            text="A simple web-radio player. This project use Bootstrap and javascript"
                            lone="https://github.com/Gondrak08/radio-player"
                            ltwo="https://elated-nobel-8099f7.netlify.com"
                        />

                         <Card 
                            image={Bakery}
                            title="Padaria dona Chica"
                            subtitle="Website"
                            text="A bakery website. A responsive website made with Bootstrap and javascript"
                            lone="https://gondrak08.github.io/bakery/"
                            ltwo="https://github.com/Gondrak08/bakery"
                        />
                         <Card 
                            image={Foodsearch}
                            title="Food Search"
                            subtitle="Webapp"
                            text="A  recipe search webapp. This project use React, Bootstrap, Food2Fork API"
                            lone="https://angry-aryabhata-d76edc.netlify.com"
                            ltwo="https://github.com/Gondrak08/foodsearch"
                        />
                        <Card 
                            image={Webresort}
                            title="BeachResort"
                            subtitle="Webapp"
                            text="A resort website. This project use React, Bootstrap, Jquery, Contentful."
                            lone="https://mandalageoresort.netlify.com"
                            ltwo="https://github.com/Gondrak08/react-webresort"
                        />
                        <Card 
                            image={Landingpage}
                            title="The original trombone"
                            subtitle="Website"
                            text="A responsive landing page. This project use Html & Css"
                            lone="https://gondrak08.github.io/landing-page/"
                            ltwo="https://github.com/Gondrak08/landing-page"
                        />
                        <Card 
                            image={Asteroid}
                            title="Asteroid"
                            subtitle="Game"
                            text="Asteroid atari game. This project use Javascript"
                            lone="https://gondrak08.github.io/Asteroid-game/"
                            ltwo="https://github.com/Gondrak08/Asteroid-game"
                        />
                    </div>
                </div>
            </section>
            </>
        )
    }
}

export default projects
