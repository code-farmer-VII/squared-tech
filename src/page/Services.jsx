import React from 'react'
import AboutSection from '../components/AboutsectionService'
import Dedication from '../components/Dedication'
import Milestones from '../components/Milstone'
import ServiceSection from '../components/Service'

function Services() {
  const color = "0000FF"
  return (
    <div>
      <AboutSection />
      <Milestones />
      <ServiceSection color={color} />
      <Dedication />
    </div>
  )
}

export default Services