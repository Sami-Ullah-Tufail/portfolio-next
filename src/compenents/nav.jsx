import React from 'react'
import "./nav.css"
import Social from './social'
import Link from 'next/link'
const Nav = () => {
  return (
    <div className="maindiv">
        <div className='Name'>
        <h1 className='bara'>Sami Ullah </h1>
        <h1 className='chota'> Tufail </h1>
        </div>
       <ul>
        <li><Link href="/About">ABOUT</Link></li>
        <li><Link href="/Projects">PROJECT</Link></li>
        <li><Link href="/Contact">CONTACT</Link></li>
       </ul>
       <div  className="SocialDiv">
       <Social />
       </div>
      </div>
  )
}

export default Nav