import React from 'react'
import '../index.css';

const PortItem = ({name, tag, tag2, image, link}) => {
  return (
    <>
  
<div className='container'>
<a href={link} className='floating-link'></a>
<div className='box-bg'>
            <figure className='image'>
       <img src={image}></img>
            </figure>
        </div>

    <div className='floating'>
        <div className='floating-top'>

        </div>
        <div className='floating-bottom'>
              <h1 className='name'>{name}</h1>
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