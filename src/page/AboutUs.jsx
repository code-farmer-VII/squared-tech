import React from 'react'
import HeroAbout from '../components/HeroAbout'
import GoalSection from '../components/Goal'
import SmoothSlider from '../components/Slider'
import MissionSection from '../components/Mission'
import EmployeeSection from '../components/Team'

function AboutUs() {
  return (
    <div>
      <HeroAbout />
      <GoalSection />
      <SmoothSlider />
      <MissionSection />
      <EmployeeSection />
    </div>
  )
}

export default AboutUs