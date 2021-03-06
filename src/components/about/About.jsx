import './about.css'
import Me from "../../img/me2.jpg"
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const About = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className='a'>
      <div className='a-left'>
        <div style={{backgroundColor: darkMode && '#219ebc'}} className='a-card bg'></div>
        <div className='a-card'>
          <img src={Me} alt='' className='a-img'/>
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>About Me</h1>

        <p className='a-desc'>Hi, I'm Sam and I’m a software developer. My career path has been meandering so far, and I’m excited that it has led me to web development! In college, I studied the environment and animal behavior - this taught me about data management, research, and strengthened my organizational skills. After graduating, I worked at a food access non-profit, which taught me how the findings from research can be implemented in real life situations. I then worked as a Project Manager for a company that managed data for clinical trials, which further strengthed my communication and data management skills, and introduced me to the world of software development!
 </p>
 <p className='a-sub'>tldr; An energetic team player who loves puzzles, dogs, and creativity</p>
 <div className='a-certificate'>
   <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToq3iQcqrVOh7a70omMzP_kihmCRpz2pqlWKuKfdexmQt8WnwPVJFj41w-p_eTqeeG1uE&usqp=CAU' alt='' className='a-certificate-img'/>
   <div className="a-certificate-texts">
            <h4 className="a-certificate-title">Fullstack Academy of Code</h4>
            <p className="a-certificate-desc">
              17 week immersive coding bootcamp
            </p>
          </div>
 </div>
      </div>
    </div>
  )
}
export default About
