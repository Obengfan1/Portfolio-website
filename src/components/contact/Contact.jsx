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
            <SiGmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>obengfan@gmail.com</h5>
            <a href="mailto:obengfan@gmail.com" target="_blank" rel="noreferrer">Email Me</a>

          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+491739577530</h5>
            <a href="https://wa.me/491739577530" target="_blank" rel="noreferrer">Message Me</a>

          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email'placeholder='Enter Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Meassage</button>

        </form>
      </div>
    </section>
  )
}

export default contact
