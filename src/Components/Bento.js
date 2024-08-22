import React, { useEffect } from 'react'
import '../index.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type'


const Bento = () => {
  useEffect(() => {
    const revealTypeTwo = document.querySelectorAll('.reveal-landing')
  
    revealTypeTwo.forEach((char,i) => {
    
      const letter = new SplitType(char, { types: 'words'})
    
    
      gsap.from(letter.words, {
        y: -20,            
        opacity: 0,        
        stagger: 0.1,     
        duration: 1,       
        ease: 'power2.out', 
        
      });
  
      // Image animation
    const image = document.querySelector('.landing-image');
  
    gsap.from(image, {
      x: -20,             
      opacity: 0,       
      duration: 1.5,   
      ease: 'power2.out',
      delay: 0.5        
    });
  
    gsap.registerPlugin(ScrollTrigger)
  
    const splitTypes = document.querySelectorAll('.reveal-type')
  
    splitTypes.forEach((char,i) => {
  
        const text = new SplitType(char, { types: 'chars'})
  
      gsap.from(text.chars, {
        scrollTrigger:{ 
          trigger: char,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
      })
    })
  
    const revealTypeTwo = document.querySelectorAll('.reveal-type-two')
  
    revealTypeTwo.forEach((char,i) => {
    
      const letter = new SplitType(char, { types: 'words'})
    
    
      gsap.from(letter.words, {
        scrollTrigger:{
          trigger: char,
          start: 'top 80%',
          end: 'top 20%',
          scrub: false,
          markers: false,
          toggleActions: 'play play reverse reverse'
    
        },
        y:-20,
        opacity: 0,
        stagger: 0.1
      })
    })
    
    
    }, []); 
  })


  
  return (
    <>
   <section className="bento-grid">
   <div className='bx title-bx'>
        <h3 className=' reveal-type'>About Me</h3>
        <p className=' reveal-landing'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor     
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
    <div className='bx experience-bx'>
       <div className='experience-top'> 
        <h3 className='reveal-type '>Experience</h3>
        <a href="#" ><ion-icon name="open-outline"></ion-icon></a>
        </div>
        <div className='job'>
        <div className='job-desc'><h4 className='job-title   reveal-type'>
        Project Empower
        </h4> <div className='dash-dark'></div> <p className='role   reveal-type'>
        Frontend Developer
        </p></div>
        
        <p className='duration  reveal-landing'>
        AUG  2024  - PRESENT

        </p>
        <p className='desc  reveal-landing'>Managed modern frontend projects with peers. 
        </p>
        </div>
        <div className='job '>
        <div className='job-desc'><h4 className='job-title  reveal-type '>
        CleanLeeNess LLC
        </h4> <div className='dash-dark'></div> <p className='role reveal-type '>
        Data management intern
        </p></div>
        
        <p className='duration reveal-landing '>
        FEB  2024  - MAR 2024

        </p>
        <p className='desc  reveal-landing'>Developed skills in collecting and organizing data using Python web scraping and Google Sheets.
        </p>
        </div>
        <div className='job'>
        <div className='job-desc'><h4 className='job-title  reveal-type'>
      DWC High School
        </h4> <div className='dash-dark'></div> <p className='role   reveal-type'>
        Web Development Intern
        </p></div>
        
        <p className='duration reveal-landing'>
        DEC 2023 - MAY 2024  


        </p>
        <p className='desc  reveal-landing'> Enhanced school websites with web development skills to improve user experience.

        </p>
        </div>
        <div className='job'>
        <div className='job-desc'><h4 className='job-title  reveal-type'>
      Bloomberg
        </h4> <div className='dash-dark'></div> <p className='role  reveal-type'>
        CN Fellowship 1 Intern
        </p></div>
        
        <p className='duration reveal-landing'>
        NOV 2023 - MAY 2024  
 


        </p>
        <p className='desc  reveal-landing'>Completed coursework focused on career readiness and professional skills.</p>

        </div>
      
        

    </div>
  
    
        <div className='bx skillset-bx'>
            <h3 className='reveal-type '>Skillset</h3>
            <span className='skills'>
            <span><ion-icon name="logo-react"></ion-icon><p className=' reveal-landing'>React</p></span>
            <span><ion-icon name="logo-figma"></ion-icon><p className='reveal-landing '>Figma</p></span>
            <span><ion-icon name="logo-html5"></ion-icon><p className=' reveal-landing'> HTML5</p></span>
            <span><ion-icon name="logo-css3"></ion-icon><p className='reveal-landing '>CSS3</p></span>
            <span><ion-icon name="logo-javascript"></ion-icon><p className=' '>JavaScript</p></span>
            </span>
        </div>
      
      
        <div className='bx external-bx'>
          <h3 className='reveal-type '>Recently played</h3>
        <iframe src="https://open.spotify.com/embed/album/0rwbMKjNkp4ehQTwf9V2Jk?utm_source=generator" 
        width="100%" height="352" frameBorder="0" allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        {/* <SpotifyAuth /> */}
        </div>


   </section>
    
  
    </>
  )
}

export default Bento