import React from 'react';
import '../index.css';

const PortItem = ({name, tag, tag2, video, link}) => {
  return (
    <>
  {/* <div className='wrapper' */}
<div className='container'>
<a href={link} className='floating-link'></a>
<div className='box-bg'>
            <figure className='image'>
       <video src={video} autoPlay muted loop></video>
            </figure>
        </div>

    <div className='floating'>
        <div className='floating-top'>
        <div className='latest'>Latest</div>
        </div>
        <div className='floating-bottom'>
             <div className='name-info'>
             <h1 className='name'>{name}</h1>
             <div className='dash'></div>
             <div className='date'>24'</div>
             </div>
              <div className='floating-tags'>
            <div className='tag'>{tag}</div>
            <div className='tag'>{tag2}</div>
            </div>
            </div>
          
            </div>

      
           
            
        </div>
          

    </>
  )
}

export default PortItem