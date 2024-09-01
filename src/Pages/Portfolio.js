import React, { useEffect } from 'react'
import '../index.css';
import Nav from '../Components/Nav';
import Project from '../Components/Project';
import 'lenis/dist/lenis.css'
import Preloader from '../Components/Preloader';
import SplitType from 'split-type'
import gsap from 'gsap';

const Portfolio = () => {
  useEffect(() => {
    const headerReveal = document.querySelectorAll('.header-reveal')

    headerReveal.forEach((char,i) => {

      const word = new SplitType(char, {types: 'words'})

      gsap.from(word.words, {
        y: -20,            
        opacity: 0,        
        stagger: 0.1,     
        duration: 1,       
        delay: 3.3,
        ease: 'power2.out', 
      });


    })
 
      

  }, []);

  return (
   <>
<Preloader loadertext='My digital playground.'/>


    <section className='project-canvas'>
    <Nav />
    <div className="project-mainframe">
    <div className='header'>
        <h3 className='header-reveal'> I've been bringing ideas to life through case studies and client projects.</h3>
        <p className='header-reveal'>From concept to execution, each project tells a story of innovation, creativity, and collaboration</p>
      </div>
    
      <div className="row">
        <Project id={1} />
        <Project id={2}/>

      </div>
    </div>
      
    </section>


   </>
  )
}

export default Portfolio