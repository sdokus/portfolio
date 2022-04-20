import "./intro.css"
import Me from "../../img/me.png"

 const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className = "i-intro">Hello, My name is</h2>
          <h1 className="i-name">Sam Dokus</h1>
          <div className="i-title">
          <div className="i-title-wrapper">
          <div className="i-title-item"> Fullstack Developer</div>
          <div className="i-title-item"> Web Developer</div>
          <div className="i-title-item"> Problem Solver</div>
          <div className="i-title-item"> Designer/Painter</div>
          <div className="i-title-item"> Friendly Human</div>
            </div>
          </div>
          <p className="i-desc">
          I love the structure and logic that data and coding provide and look forward to utilizing my organizational skills to creatively solve problems.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro
