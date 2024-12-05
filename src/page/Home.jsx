import React from 'react'
import HeroSection from '../components/Hero'
import AboutUs from './AboutUs'
import AboutSection from '../components/About'
import ServiceSection from '../components/Service'
import Testimonial from '../components/Testimonial'
import SmoothSlider from '../components/Slider'
import Footer from '../components/Footer'
import ContactUs from '../components/Contact'

function Home() {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <SmoothSlider />
        <Testimonial />
        <ContactUs />
        <Footer />
    </div>    
    
)
}

export default Home