import React from 'react'
import './portfolio.css'
import Capy from '../../asserts/Capyrent.jpg'
import Todi from '../../asserts/todi_meta_image.png'



const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My React Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Capy} alt="Capyrent" />

          </div>
            <h3>This is a portfolio item titile</h3>
            <a href="https://github.com/iwonochka/CapyRent" className='btn'>Github</a>
            <a href="https://airbnb-iwonochka.herokuapp.com/" className='btn'>CapyRent</a>


        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Todi} alt="" />

          </div>
            <h3>This is a portfolio item titile</h3>
            <a href="https://github.com/iwonochka/todi" className='btn'>Github</a>
            <a href="https://www.todi.club/home" className='btn'>Todi</a>


        </article>



      </div>
    </section>
  )
}

export default portfolio
