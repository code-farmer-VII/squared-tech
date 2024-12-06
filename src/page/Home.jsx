import React from 'react'
import HeroSection from '../components/Hero'
import AboutUs from './AboutUs'
import AboutSection from '../components/About'
import ServiceSection from '../components/Service'
import Testimonial from '../components/Testimonial'
import SmoothSlider from '../components/Slider'
import ContactUs from '../components/Contact'

function Home() {
  const color = "800080"
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <ServiceSection color={color} />
        <SmoothSlider />
        <Testimonial />
        <ContactUs />
    </div>    
    
)
}

export default Home