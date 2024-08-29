import React, { useEffect  } from 'react';
import '../index.css';
import Nav from './Nav';
import PortItem from './PortItem';
import Bento from './Bento';
import 'lenis/dist/lenis.css'
import Lenis from 'lenis'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type'
import Footer from './Footer';
import Video from './Video';



export const Landing = () => {


// loads in landing text once and only unless reloaded
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
  
      // Image animation
      const image = document.querySelector('.landing-item');

      gsap.from(image, {
        y: -20,            
        opacity: 0,        
        stagger: 0.1,     
        duration: 1,       
        ease: 'power2.out',      
      });
    
  }, []); 
})



  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)

  
  return (
<>

        <section className='cta-opening'>
          <Nav />
            <div className="hero">
              <img src="profile-icon.png" alt="Sam's profile"></img>
               <h3 className='reveal-landing'>I'm Sam — a user interface designer & developer from New York.</h3>
               <p className='reveal-landing' > 
               I bring ideas to life with precision and creativity, crafting exceptional projects that stand out.</p> 
                </div>
            <div className="base">
               <div className='avail '>
                   <div className='wrap'>
                   <span className='dot '></span>
                   <p>Ready to collaborate </p>
                   </div>
                  </div>
               <div className='icons'>
                  <a target="_blank" href="https://www.linkedin.com/in/samuel-yeboah-asi-82b28a2b9/" className='link-icon'><ion-icon name="logo-linkedin"></ion-icon></a>
                  <a target="_blank" href="mailto:samuelydev@gmail.com?subject=Collaboration%20Inquiry" className='link-icon'><ion-icon name="mail-outline"></ion-icon></a>
                  <a target="_blank" href="https://github.com/devv-sam?tab=overview&from=2024-08-01&to=2024-08-12" className='link-icon'><ion-icon name="logo-github"></ion-icon></a>
                </div>
          
               </div>
                        
        </section>
        <Video />
<section className='showcase-portfolio-intro'>
<div className='support'>
  <h3 className='reveal-type'>Featured Work</h3>
        <p className='reveal-landing'>Dive into my showcase of innovative and meticulously crafted applications that solve real-world problems and push the boundaries of technology.</p>
        <a href="/portfolio" className='btn'>Case Studies</a>
    </div>

    <PortItem video='video.mp4' name='Project Name' tag='Finance' tag2="Web Design"/>

</section>

<Bento />
<Footer />
    </>
  )
}
export default Landing;
