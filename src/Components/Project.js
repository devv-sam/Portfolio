import React, { useState, useRef, useEffect } from 'react';
import '../index.css';
import gsap from 'gsap';
import projects from '../project-info.json'
import { Link } from 'react-router-dom';

const Project = ({id}) => {
    // Find the project by ID
    const project = projects.find((proj) => proj.id === id);

   
useEffect(() => {
   // If no project is found return null
   if (!project) {
    console.log("Project not found")
  }

  const prxReveal = document.querySelectorAll(".project");
  gsap.to(prxReveal, {
    opacity: 1,        
    y: 20,   
    duration: 1,
    delay: 3.9,
    ease: 'power2.out',          
  });
}, [project, id])

  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef(null); 

  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 900); 
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
      <a href={`/projects/${id}`}>
        <div className="prx-thumb">
          {isHovered ? (
            <video 
              src={project.videoShowcase} 
              autoPlay 
              loop 
              muted 
              className="portfolio-video" 
            />
          ) : (
            <img 
              src={project.coverImage} 
              alt="Project Cover" 
              className="portfolio-cover" 
            />
          )}
                </div>
                <div className='prx-details'>
                    <div className="prx-basic">
                      <div className="prx-title">
                            <div className='star'>✦</div>
                            <h4>{project.name}</h4>
                        </div> 
                        <div className="prx-subtitle">
                                <p>{project.tags[0]} — {project.date}</p>
                        </div>
                    
                    </div>
                    <div className="btn-external">
                    <Link to={`/projects/${id}`}  className='btn'>View Details <ion-icon name="open-outline" className="icon-ex"></ion-icon></Link>
                    </div>
                </div>
          

        </a>
        </div>
      
            


        </>
  )
}

export default Project