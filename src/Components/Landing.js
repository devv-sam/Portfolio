import React from 'react'
import '../index.css';
import Nav from './Nav';
import PortItem from './PortItem';
import Bento from './Bento';

export const Landing = () => {

  
  return (
    <>

        <section className='cta-opening'>
          <Nav />
            <div className="hero">
              <img src="profile-icon.png" alt="Sam's profile"></img>
               <h3>I'm Sam — a user interface designer & developer from New York.</h3>
               <p> 
               I bring ideas to life with precision and creativity, crafting exceptional projects that stand out.</p> 
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
         

     



             
         
 
                 {/* <img src="profile-image.png" alt="Profile" className="profile-img"></img> */}

                            {/* <a href="#" className='btn'>Explore my works</a> */}
               
        </section>
        
        <section className='showcase'>
    <div className='vid-box'>
        <video src="./video.mp4" autoPlay loop muted></video>          
    </div>
   
</section>
<section className='showcase-portfolio-intro'>
<div className='support'>
  <h3>Featured Work</h3>
        <p>Dive into my showcase of innovative and meticulously crafted applications that solve real-world problems and push the boundaries of technology.</p>
        <a href="/portfolio" className='btn'>Case Studies</a>
    </div>

    <PortItem video='video.mp4' name='Project Name' tag='Finance' tag2="Web Design"/>

</section>

<Bento />
    </>
  )
}
export default Landing;
