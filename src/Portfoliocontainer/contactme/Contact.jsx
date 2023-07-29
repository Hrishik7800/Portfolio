import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault(); 
    emailjs.sendForm('service_xl0flx6', 'template_buc4jm5', form.current, 'FZ4tkD8zUDSzx68vz')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  };
  return (
    <section id='contact'>
     <h5> Get In Touch </h5>
     <h2> Contact Me</h2>
     <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>kolgatramrushikesh7800@gmail.com</h5>
          <a href='mailto:kolgatramrushikesh7800' target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <BsMessenger className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>RKtutorials</h5>
          <a href='mailto:kolgatramrushikesh7800' target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+91 8261817800</h5>
          <a href='https://api.whatsapp.com/send/phone+918261817800' target="_blank">Send a message</a>
        </article>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder ='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name='message' rows='7'  placeholder='Your Message' required></textarea>
        <botton type="submit" className = "btn btn-primary">Send Message</botton> 
      </form>
     </div>
    </section>
  )
}

export default Contact
