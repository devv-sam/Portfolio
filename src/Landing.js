import React from 'react'
import './index.css';


export const Landing = () => {
  return (
    <>
        <div className='cta-opening'>
                <h3>Crafting Code with Creativity and Precision</h3>
                <p>I bring ideas to life with precision and creativity, crafting exceptional projects that stand out. My focus is on delivering high-quality, user-centric solutions that exceed expectations and drive innovation.</p>
        </div>
        <div className='showcase'>
    <div className='vid-box'>
        <video src="./video.mp4" type="video/mp4" loop autoPlay muted>
            Your browser does not support the video tag.
        </video>
    </div>
    <div className='support'>
        <p>Dive into my showcase of innovative and meticulously crafted applications that solve real-world problems and push the boundaries of technology.</p>
        <a href="#" className='btn'>Case Studies</a>
    </div>
</div>

    </>
  )
}
export default Landing;
