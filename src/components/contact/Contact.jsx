import './contact.css'
import Email from '../../img/email.png'
import emailjs from "emailjs-com";
import { useRef, useState } from 'react'

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
console.log("I've been submitted")
    emailjs.sendForm('service_3irkh88', 'template_qmn06hh', formRef.current, '2mINPq64gvAZUkeMY')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className='c'>
      <div className='c-bg'></div>
      <div className='c-wrapper'>
      <div className="c-left">
          <h1 className="c-title">Let's get in touch</h1>
          <div className="c-info">

            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              samdokus.dev@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src='https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png' alt="" />
              LinkedIn
            </div>
          </div>
        </div>
        <div className='c-right'>
          <p className='c-desc'>
            <b>Want to work together?</b> Send me a message and let's chat!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you! "}
          </form>
        </div>
</div>
    </div>
  )
}

export default Contact
