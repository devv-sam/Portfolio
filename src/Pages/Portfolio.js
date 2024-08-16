import React from 'react'
import '../index.css';
import PortItem from '../Components/PortItem';
import Nav from '../Components/Nav';
import Project from '../Components/Project';
const Portfolio = () => {
  return (
   <>
  <Nav />


    <section>
      <div className='row'>
        <h3>Take a look at what I’ve been working on lately.</h3>
        <p>These featured projects showcase my recent endeavours in fields from frontend UI/UX to development.</p>
      
      </div>
      <Project prxname="Cirko" prxtype="Website Redesign" prxdate="2024"/>
    </section>


   </>
  )
}

export default Portfolio