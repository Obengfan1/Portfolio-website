import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../asserts/portriatpic.png'
import HeaderSocials from './HeaderSocials'


const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Frank Obeng</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll-down</a>



      </div>

    </header>
  )
}

export default header
