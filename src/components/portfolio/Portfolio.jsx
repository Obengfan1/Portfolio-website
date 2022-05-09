import React from 'react'
import './portfolio.css'
import Capy from '../../asserts/Capyrent.jpg'
import Todi from '../../asserts/todi.jpg'



const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Capy} alt="Capyrent" />

          </div>
            <h3> CapyRent--Capybara for a day</h3>
            <a href="https://github.com/iwonochka/CapyRent" className='btn'>Github</a>
            <a href="https://airbnb-iwonochka.herokuapp.com/" className='btn btn-primary'>CapyRent</a>


        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Todi} alt="" />

          </div>
            <h3>Todi ---For Kid frendly Circle</h3>
            <a href="https://github.com/iwonochka/todi" className='btn'>Github</a>
            <a href="https://www.todi.club/home" className='btn btn-primary'>Todi</a>


        </article>



      </div>
    </section>
  )
}

export default portfolio
