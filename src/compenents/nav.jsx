import React from 'react'
import "./nav.css"
import Social from './social'
const Nav = () => {
  return (
    <div className="maindiv">
        <div className='Name'>
        <h1 className='bara'>Sami Ullah </h1>
        <h1 className='chota'> Tufail </h1>
        </div>
       <ul>
        <li>ABOUT</li>
        <li>PROJECT</li>
        <li>CONTACT</li>
       </ul>
       <div  className="SocialDiv">
       <Social />
       </div>
      </div>
  )
}

export default Nav