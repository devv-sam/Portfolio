import React from 'react'
import '../index.css';

const Bento = () => {
  return (
    <>
    <div className='top-row'>
    <div className='title-bx'>
        <h3>About Me</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor     
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div className='experience-bx'>
       <div className='experience-top'> 
        <h3>Experience</h3>
        <a href="#"><ion-icon name="open-outline"></ion-icon></a>
        </div>
        <div className='job'>
        <h4 className='job-title'>
            Microsoft
        </h4>
        <p className='role'>
            CEO
        </p>
        <p className='duration'>
            2012 - Present
        </p>
        </div>
        
        

    </div>
    </div>
    <div className='bottom-row'>
        <div className='skillset-bx'>
            <h3>Skillset</h3>
            <p>Expert in modern web technologies.</p>
            <span className='skills'>
            <span><ion-icon name="logo-react"></ion-icon><p>React</p></span>
            <span><ion-icon name="logo-figma"></ion-icon><p>Figma</p></span>
            <span><ion-icon name="logo-html5"></ion-icon><p>HTML5</p></span>
            <span><ion-icon name="logo-css3"></ion-icon><p>CSS3</p></span>
            <span><ion-icon name="logo-javascript"></ion-icon><p>JavaScript</p></span>
            </span>
        </div>
        <div className='profile-bx'>
            <img src='#' alt="Profile"></img>
        </div>
        <div className='external-bx'>
            <div className='music'>
              <div className='music-top'>
              <img src="spotify-icon.svg" alt="Spotify Logo" className='spotify-icon'></img>
              <h3>Recently Played</h3>
              </div>
                <div className="spotify-details">
                <img src="./audio.gif" alt="Spotify Audio" className='spotify-audio'></img>
                <a href="https://open.spotify.com/album/0rwbMKjNkp4ehQTwf9V2Jk">Oppenheimer (Original Motion Picture Soundtrack)</a>
                </div>
                
            </div>
        </div>

    </div>
    </>
  )
}

export default Bento