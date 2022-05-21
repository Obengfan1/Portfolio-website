import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/"><BsFacebook /></a>
        <a href="https://www.instagram.com/"><BsInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Frank Obeng. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer
