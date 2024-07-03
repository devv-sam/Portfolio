import React from 'react'
import '../index.css';
import Nav from './Nav';
import PortItem from './PortItem';


export const Landing = () => {


  return (
    <>
        <Nav />
        <div className='cta-opening'>
              <div className='flex-main'>
              <div className='width-res'>
               <h3>Crafting Code with Creativity and Precision</h3>
               <p>I bring ideas to life with precision and creativity, crafting exceptional projects that stand out. My focus is on delivering high-quality, user-centric solutions that exceed expectations and drive innovation.</p>
              
               </div>
               <div className='avail'>
                   <div className='wrap'>
                   <span className='dot'></span>
                   <p>Ready to collaborate </p>
                   </div>
                  </div>
              </div>
               
                <div className='icons'>
                
                  <a href="#" className='link-icon'><ion-icon name="logo-linkedin"></ion-icon></a>
                  <a href="#" className='link-icon'><ion-icon name="logo-behance"></ion-icon></a>
                  <a href="#" className='link-icon'><ion-icon name="logo-instagram"></ion-icon></a>
                </div>
        </div>
        <div className='showcase'>
    <div className='vid-box'>
        <video src="./video.mp4" autoPlay loop muted></video>          
    </div>
   
</div>
<div className='showcase-portfolio-intro'>
<div className='support'>
  <h3>Featured Work</h3>
        <p>Dive into my showcase of innovative and meticulously crafted applications that solve real-world problems and push the boundaries of technology.</p>
        <a href="/portfolio" className='btn'>Case Studies</a>
    </div>

    <PortItem video='video.mp4' name='Project Name' tag='Finance' tag2="Web Design"/>

</div>

    </>
  )
}
export default Landing;
