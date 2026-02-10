import React from 'react'
import Layout from '../components/layout/Layout.js'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import RatingsSection from '../components/RatingsSection'
import { Link } from 'react-router-dom'
import HomePage from '../components/style/HomePage.css'
import bgImage from "../components/images/bg-image.jpeg"

const Home = () => {
  const handleHireMe = () => {
    const upworkUrl = 'https://www.upwork.com/freelancers/~01133b995a1a8c8902';
    window.open(upworkUrl, '_blank');
  }

  return (
      <Layout>
        <div className='Home' style={{backgroundImage:`url(${bgImage})`}}>
          <div className='HomeContainer'>
          <h1>Hello ,I am Waleed Ahmed...</h1>
          <br/>
          <h3>A Computer Engineer</h3>
          <br/>
          <p>"Hello, I'm Waleed Ahmed, a passionate Computer Science student with a knack for problem-solving and a drive for innovation. Welcome to my portfolio, From coding projects to software development endeavors, each entry reflects my commitment to mastering the intricacies of computer science.Let's embark on this exciting journey together!"</p>
          <br/>
          <button className="hire-me-button" onClick={handleHireMe}>Hire Me !!</button>
          
          </div>
          
        </div>
        <AboutSection />
        <SkillsSection />
        <RatingsSection />
      </Layout>
  )
}

export default Home