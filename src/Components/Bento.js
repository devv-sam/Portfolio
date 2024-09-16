import React, { useEffect } from 'react'
import '../index.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Marquee } from "@devnomic/marquee";
// import "@devnomic/marquee/dist/index.css";



const Bento = () => {
// useEffect(() => {

//   gsap.registerPlugin(ScrollTrigger)

//   const lift = document.querySelectorAll('.lift')
  
//   gsap.from(lift, {
//     scrollTrigger:{ 
//       trigger: lift,
//       start: 'top 80%',
//       end: 'top 20%',
//       scrub: false,
//       markers: false,
//     },
//     y: 20,            
//     opacity: 0,        
//     stagger: 0.1,     
//     duration: 1.8,       
//     ease: 'power2.out', 
    
//   });
// })


  return (
    <>
       <div className='bx'>
       <section className="bento-grid">
<div className='title-txt-stack'>
<div className='title-bx lift'>
      <div className='title-stack'>
      <h3>About Me</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor     
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

    </div>
    <div className='skillset-bx lift'>
      <div className='skillset-stack'>
        <h3>Stack</h3>
        <Marquee fade={true} pauseOnHover={true}>
            <div><img src="./assets/react.svg" alt="stack logo"></img></div>
            <div><img src="./assets/js.svg" alt="stack logo"></img></div>
            <div><img src="./assets/html.svg" alt="stack logo"></img></div>
            <div><img src="./assets/css.svg" alt="stack logo"></img></div>
            <div><img src="./assets/figma.svg" alt="stack logo"></img></div>
            <div><img src="./assets/framer.svg" alt="stack logo"></img></div>
          </Marquee>

      </div>

        </div>
</div>
 
    <div className='experience-bx lift'>
    <div className='experience-top'> 
        <h3>Experience</h3>
        <a href="#"><img src="./assets/arrow.svg"></img></a>
        </div>
      <div className='exp-stack'>
      <div className='job'>
        <div className='job-desc'><h4 className='job-title'>
        Project Empower
        </h4> <div className='dash-dark'></div> <p className='role'>
        Frontend Developer
        </p></div>
        
        <p className='duration'>
        AUG  2024  - PRESENT
        </p>
        <p className='desc'>Managed modern frontend projects with peers. 
        </p>
        </div>
        <div className='job'>
        <div className='job-desc'><h4 className='job-title'>
      DWC HS
        </h4> <div className='dash-dark'></div> <p className='role'>
        Frontend Developer
        </p></div>
        
        <p className='duration'>
        DEC 2023 - MAY 2024  


        </p>
        <p className='desc'> Enhanced school websites with web development skills to improve user experience.

        </p>
        </div>
        <div className='job'>
        <div className='job-desc'><h4 className='job-title'>
      Bloomberg
        </h4> <div className='dash-dark'></div> <p className='role'>
        CN Fellowship 1 Intern
        </p></div>
        
        <p className='duration'>
        NOV 2023 - MAY 2024  
 


        </p>
        <p className='desc'>Completed coursework focused on career readiness and professional skills.</p>

        </div>
      </div>
    </div>

    
<div className='image-extra-stack'>
<div className='image-bx lift'>
    <img src="./assets/profile-image.png" alt="Sam's Profile"/>
  </div>
  <div className='external-bx lift'>
        <iframe src="https://open.spotify.com/embed/album/0rwbMKjNkp4ehQTwf9V2Jk?utm_source=generator" 
        width="100%" height="352" frameBorder="0" allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>

  </div>  
      


   </section>
       </div>
  
    
  
    </>
  )
}

export default Bento