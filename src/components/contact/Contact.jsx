import React from 'react';
import './contact.css'
import {BsWhatsapp} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import emailjs from 'emailjs-com'
import {useRef} from 'react'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bls070g', 'template_0fs9a2m', form.current, '1NpGNrWC9SgRX9hAn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
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
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email'placeholder='Enter Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Meassage</button>

        </form>
      </div>
    </section>
  )
}

export default Contact
