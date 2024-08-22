import React from 'react'
import '../index.css';
import PortItem from '../Components/PortItem';
import Nav from '../Components/Nav';
import Project from '../Components/Project';
import 'lenis/dist/lenis.css'
const Portfolio = () => {
  return (
   <>



    <section className='project-canvas'>
    <Nav />
    <div className="project-mainframe">
    <div className='header'>
        <h3>Take a look at what I've been working on lately.</h3>
        <p>These featured projects showcase my recent endeavours in fields from Frontend UI/UX to Development.</p>
      </div>
      <div className="row">
        <Project prxname="Cirko" prxtype="Website Redesign" prxdate="2024"  coverImage="template.png" 
  videoSrc="video.mp4" />
        <Project prxname="Cirko" prxtype="Website Redesign" prxdate="2024"  coverImage="template.png" 
  videoSrc="video.mp4" />

      </div>
    </div>
      
    </section>


   </>
  )
}

export default Portfolio