import React, { useEffect, useRef } from 'react';
import '../index.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  // video animation settings 
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center', 
        end: '+=750',  
        scrub: false,        
        markers: false,       
        toggleActions: 'play reverse play reverse', 
      },
      scale: 1.25,           
      ease: 'none',          
    });
  }, []);

  return (
    <section className='showcase'>
      <div className='vid-box' ref={containerRef} style={{ height: '100vh', overflow: 'hidden'}}>
        <video  
          ref={videoRef} 
          src="/assets/video.mp4" 
          style={{ width: '100%', height: 'auto', transition: 'scale 0.5s ease' }} 
          muted 
          autoPlay 
          loop 
        />
      </div>
    </section>
  );
}

export default Video;
