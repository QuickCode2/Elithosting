import React from 'react'
import Hero from '../components/Hero';
import Feature from '../components/Feature'
import Pricing from '../components/Pricing';
import Service from '../components/Service';
import { Support } from '../components/Support';
import Footer from '../components/Footer';



const Home = () => {
  return (
    <div>
      <Hero />  
      <Feature />
      <Pricing />
      <Service />
      <Support />
      <Footer />
    </div>
  )
}

export default Home
