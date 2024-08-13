import React from 'react'
import '../index.css';

const Bento = () => {
  return (
    <>
   <div className="bento-grid">
   <div className='bx title-bx'>
        <h3>About Me</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor     
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
    <div className='bx experience-bx'>
       <div className='experience-top'> 
        <h3>Experience</h3>
        <a href="#"><ion-icon name="open-outline"></ion-icon></a>
        </div>
        <div className='job'>
        <div className='job-desc'><h4 className='job-title'>
        CleanLeeNess LLC
        </h4> <div className='dash-dark'></div> <p className='role'>
        Data management intern
        </p></div>
        
        <p className='duration'>
        FEB  2024  - MAR 2024

        </p>
        <p className='desc'>Developed skills in collecting and organizing data using Python web scraping and Google Sheets.
        </p>
        </div>
        <div className='job'>
        <div className='job-desc'><h4 className='job-title'>
      DWC High School
        </h4> <div className='dash-dark'></div> <p className='role'>
        Web Development Intern
        </p></div>
        
        <p className='duration'>
        DEC 2023 - MAY 2024  


        </p>
        <p className='desc'> Enhanced school websites with web development skills to improve user experience.

        </p>
        </div>
        <div className='job'>
        <div className='job-desc'><h4 className='job-title'>
      Bloomberg
        </h4> <div className='dash-dark'></div> <p className='role'>
        CN Fellowship 1 Intern
        </p></div>
        
        <p className='duration'>
        NOV 2023 - MAY 2024  
 


        </p>
        <p className='desc'>Completed coursework focused on career readiness and professional skills.</p>

        </div>
      
        

    </div>
  
    
        <div className='bx skillset-bx'>
            <h3>Skillset</h3>
            <span className='skills'>
            <span><ion-icon name="logo-react"></ion-icon><p>React</p></span>
            <span><ion-icon name="logo-figma"></ion-icon><p>Figma</p></span>
            <span><ion-icon name="logo-html5"></ion-icon><p>HTML5</p></span>
            <span><ion-icon name="logo-css3"></ion-icon><p>CSS3</p></span>
            <span><ion-icon name="logo-javascript"></ion-icon><p>JavaScript</p></span>
            </span>
        </div>
      
      
        <div className='bx external-bx'>
          <h3>Recently played</h3>
        <iframe src="https://open.spotify.com/embed/album/0rwbMKjNkp4ehQTwf9V2Jk?utm_source=generator" 
        width="100%" height="352" frameBorder="0" allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        {/* <SpotifyAuth /> */}
        </div>


   </div>
    
  
    </>
  )
}

export default Bento