import React from 'react'
import { useState, useEffect } from 'react';
import '../index.css';
import Nav from './Nav';

export const Landing = () => {

    const [isVideoLarge, setIsVideoLarge] = useState(false);

  const handleScroll = () => {
    const videoElement = document.getElementById('showcase-video');
    const videoTop = videoElement.getBoundingClientRect().top;
    const videoBottom = videoElement.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (videoTop < windowHeight / 2 && videoBottom > windowHeight / 2) {
      setIsVideoLarge(true);
    } else {
      setIsVideoLarge(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
        <Nav />
        <div className='cta-opening'>
                <h3>Crafting Code with Creativity and Precision</h3>
                <p>I bring ideas to life with precision and creativity, crafting exceptional projects that stand out. My focus is on delivering high-quality, user-centric solutions that exceed expectations and drive innovation.</p>
        </div>
        <div className='showcase'>
    <div className='vid-box'>
        <section className='video-section'>
        <video id="showcase-video"  className={isVideoLarge ? 'large' : ''} src="./video.mp4"  autoPlay loop></video>          
        </section>
  
    </div>
   
</div>
 {/* <div className='support'>
        <p>Dive into my showcase of innovative and meticulously crafted applications that solve real-world problems and push the boundaries of technology.</p>
        <a href="/portfolio" className='btn'>Case Studies</a>
    </div> */}
    </>
  )
}
export default Landing;
