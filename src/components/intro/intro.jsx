import "./intro.css"
import Me from "../../img/me.png"
import { useContext } from 'react';
import { ThemeContext } from '../../context';

 const Intro = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div className="i">
      <div className="i-left">
        <div style={{backgroundColor: darkMode && 'grey'}} className="i-left-wrapper">
          <h2 className = "i-intro">Hello, My name is</h2>
          <h1 className="i-name">Sam Dokus</h1>
          <div className="i-title">
          <div className="i-title-wrapper">
          <div style={{color: darkMode && '#8ecae6'}} className="i-title-item"> Fullstack Developer</div>
          <div style={{color: darkMode && '#8ecae6'}} className="i-title-item"> Web Developer</div>
          <div style={{color: darkMode && '#8ecae6'}} className="i-title-item"> Problem Solver</div>
          <div style={{color: darkMode && '#8ecae6'}} className="i-title-item"> Designer/Painter</div>
          <div style={{color: darkMode && '#8ecae6'}} className="i-title-item"> Friendly Human</div>
            </div>
          </div>
          <p className="i-desc">
          I love the structure and logic that data and coding provide and look forward to utilizing my organizational skills to creatively solve problems.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div style={{backgroundColor: darkMode && '#219ebc'}} className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro
