import React from 'react'
import '../index.css';
import Nav from './Nav';
import PortItem from './PortItem';
import Bento from './Bento';

export const Landing = () => {

  
  return (
    <>
        <Nav />

        <section className='cta-opening'>
          <div className="flex-main">
          <div className='width-res'>
              <div className="intro">
              <div>
              <h3>Crafting code with creativity and precision</h3>
              <p>Web Developer with focus on delivering high-quality, user-centric solutions that exceed expectations and drive innovation.</p>
              <a href="#" className='btn'>Explore my works</a>
              </div>
          <img src="awd.jpeg" alt="Profile" className="profile-img"></img>

              </div>
               <div className="base">
               <div className='avail'>
                   <div className='wrap'>
                   <span className='dot'></span>
                   <p>Ready to collaborate </p>
                   </div>
                  </div>
               <div className='icons'>
                  <a target="_blank" href="https://www.linkedin.com/in/samuel-yeboah-asi-82b28a2b9/" className='link-icon'><ion-icon name="logo-linkedin"></ion-icon></a>
                  <a target="_blank" href="mailto:samuelydev@gmail.com?subject=Collaboration%20Inquiry" className='link-icon'><ion-icon name="mail-outline"></ion-icon></a>
                  <a target="_blank" href="https://github.com/devv-sam?tab=overview&from=2024-08-01&to=2024-08-12" className='link-icon'><ion-icon name="logo-github"></ion-icon></a>
                </div>
          
               </div>
               </div>
          </div>
       
              
               
        </section>
        
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

<Bento />
    </>
  )
}
export default Landing;
