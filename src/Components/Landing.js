import React, { useEffect, useRef  } from 'react';
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
import Preloader from './Preloader';


export const Landing = ({loadertext}) => {
        // video animation settings 
        const videoRef = useRef(null);
        const containerRef = useRef(null);

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    const hdReveal = new SplitType(".rvl-hd", { types: 'words' })
    const pgReveal = new SplitType(".rvl-pg",  { types: 'lines' })
    // const ltReveal = new SplitType(".lt-rvl",  { types: 'lines' })
    // const scReveal = new SplitType(".sc-rvl", { types: 'words' })
    gsap.to(hdReveal.words, {
      y: 0,
      stagger: 0.05,
      delay: 3.9,
      duration: .1
    })
    gsap.from(pgReveal.lines, {
      y: 110,
      stagger: 0.05,
      delay: 3.9,
      duration: 1
    } )
    gsap.to(videoRef.current, {
      scrollTrigger: {
        trigger: videoRef.current,
        start: 'top center',
        end: '+=270',
        scrub: true,
        markers: false,
        // toggleActions: 'play reverse play reverse',
      },
      // y: 470, 
      scale: 1.2,
    //  width: '100%', 
      // transformOrigin: "bottom center",
      borderRadius: '1.5rem',
      ease: 'none',
    });
    }, []);
  

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
<Preloader loadertext={loadertext} />
<div className="hero-image-start"></div>
      
        <section className='cta-opening'>
          <Nav />
            <div className="hero">
              <img src="/assets/profile-icon.png" alt="Sam's profile"></img>
               <h3 className='rvl-hd'>I'm Sam — a user interface designer & developer from New York.</h3>
               <p className='rvl-pg' > 
               I bring ideas to life with precision and creativity, crafting exceptional projects that stand out.
               </p> 
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
      
          <div className='vid-box' ref={containerRef}>
                  <video   ref={videoRef}  src="/assets/video.mp4"  muted  autoPlay  playsInline loop  />
          </div>
   

          <section className='showcase-portfolio-intro'>
          <div className='support'>
                  <h3 className='sc-rvl'>Featured Work</h3>
                  <p className='lt-rvl'>Dive into my showcase of innovative and meticulously crafted applications that solve real-world problems and push the boundaries of technology.</p>
                  <a href="/portfolio" className='btn'>Case Studies</a>
              </div>

              <PortItem video='/assets/video.mp4' name='Project Name' tag='Finance' tag2="Web Design"/>

          </section>

<Bento />
<Footer />
    </>
  )
}
export default Landing;
