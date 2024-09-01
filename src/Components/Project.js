import React, { useState, useRef, useEffect } from 'react';
import '../index.css';
import gsap from 'gsap';

const Project = ({ prxname, prxtype, prxdate, coverImage, videoSrc, }) => {
useEffect(() => {
  const prxReveal = document.querySelectorAll(".project");

  gsap.to(prxReveal, {
    opacity: 1,        
    y: 20,   
    duration: 1,
    delay: 3.9,
    ease: 'power2.out',          
  });
})

  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef(null); 

  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 500); 
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeoutRef.current); 
    setIsHovered(false);
  };

  return (
    <>
    <div 
      className='project'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href="#">
        <div className="prx-thumb">
          {isHovered ? (
            <video 
              src={videoSrc} 
              autoPlay 
              loop 
              muted 
              className="portfolio-video" 
            />
          ) : (
            <img 
              src={coverImage} 
              alt="Project Cover" 
              className="portfolio-cover" 
            />
          )}
                </div>
                <div className='prx-details'>
                    <div className="prx-basic">
                      <div className="prx-title">
                            <div className='star'>✦</div>
                            <h4>{prxname}</h4>
                        </div> 
                        <div className="prx-subtitle">
                                <p>{prxtype} — {prxdate}</p>
                        </div>
                    
                    </div>
                    <div className="btn-external">
                    <a href="#" className='btn'>Learn more <ion-icon name="open-outline" className="icon-ex"></ion-icon></a>    
                    </div>
                </div>
          

        </a>
        </div>
      
            


        </>
  )
}

export default Project