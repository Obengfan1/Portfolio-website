import React from 'react'
import './contact.css'
import {BsWhatsapp} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiGmail />
            <h4>Email</h4>
            <h5>obengfan@gmail.com</h5>
            <a href="mailto:obengfan@gmail.com">Email Me</a>

          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+491739577530</h5>
            <a href="https://api.whatsapp.com/send?phone=+491739577530">Message Me</a>

          </article>
        </div>
      </div>
    </section>
  )
}

export default contact
