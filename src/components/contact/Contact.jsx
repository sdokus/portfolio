import './contact.css'
import Email from '../../img/email.png'
import GitHubLight from '../../img/gitHubLightMode.png'
import GitHubDark from '../../img/gitHubDarkMode.png'
import emailjs from "emailjs-com";
import { useRef, useState } from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e)=>{
    e.preventDefault();
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
      <div style={{backgroundColor: darkMode && '#219ebc'}} className='c-bg'></div>
      <div style={{backgroundColor: darkMode && "#333"}} className='c-wrapper'>
      <div className="c-left">
          <h1 className="c-title">Let's get in touch</h1>
          <div className="c-info">

            <div className="c-info-item">
              <img className="c-icon" src={darkMode ? 'https://cdn-icons-png.flaticon.com/512/1251/1251475.png' : Email} alt="" />
              samdokus.dev@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src= {darkMode ? 'https://cdn-icons-png.flaticon.com/512/174/174857.png' : 'https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png'} alt="" />
              <a style={{color: darkMode && "white"}}href='https://www.linkedin.com/in/sam-dokus/'>linkedin.com/in/sam-dokus/</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src= {darkMode ? GitHubDark : GitHubLight} alt="" />
              <a style={{color: darkMode && "white"}}href='https://github.com/sdokus'>github.com/sdokus</a>
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
            <button style={{backgroundColor: darkMode && '#219ebc'}}>Submit</button>
            {done && "Thank you! "}
          </form>
        </div>
</div>
    </div>
  )
}

export default Contact
