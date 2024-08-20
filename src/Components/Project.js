import React, { useState } from 'react';
import '../index.css';


const Project = ({prxname, prxtype, prxdate, coverImage, videoSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
        <>
    
        <div className='project'  onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} >

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