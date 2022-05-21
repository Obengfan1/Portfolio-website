import React from 'react'
import './about.css'
import Sit from '../../asserts/sittingpic.jpg'
import {FaAward} from 'react-icons/fa'
import {MdAppSettingsAlt} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'


const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Sit} alt="My pic" />
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Clients worldwide</small>
            </article>

            <article className="about__card">
              <MdAppSettingsAlt className='about__icon'/>
              <h5>Projects</h5>
              <small>4+ fully functional Web Apps</small>
            </article>
          </div>
          <p>
          I am Frank Obeng, a Software Engineer based in Berlin. My experience includes helping with architectural design, working with various technologies on the backend, and frontend technologies, and working with React-Redux Component libraries, just to mention a few. I am most proficient with ruby on rails and React-redux. I am self-motivated, self-taught and believe learning is the best way of adding value to ones' self.

          </p>

          <a href="#contact" className='btn btn-primary'>Lets Talk</a>

        </div>
      </div>



    </section>
  )
}

export default about
