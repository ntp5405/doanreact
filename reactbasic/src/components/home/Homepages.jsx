import React from 'react'
import Discover from './discover/Discover'
import Hero from './hero/Hero'
import Home from './mainContent/homes/Home'
import Singlepages from '../singlePages/Singlepages'

const Homepages = () => {
    return <>
        <Hero />
        <Home />
        <Singlepages />
        <Discover />
    </>

}

export default Homepages