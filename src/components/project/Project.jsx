import './project.css'





const Project = ({img, link, title}) => {

  const handleClick = () =>{
    window.open(link)
  }
  return (
    <div className='p'>

       <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <p className='p-title'>{title}</p>
      </div>

      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
      <button onClick={handleClick}>
        Check It Out
      </button>

    </div>
  )
}
export default Project
