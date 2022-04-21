import './projectList.css'
import Project from '../project/Project'
import {projects} from '../../project-data'

const ProjectList = () => {
  return (
    <div className='pl'>
      <div className ='pl-text'>
        <h1 className='pl-title'>Portfolio</h1>
        <p className='pl-desc'>Click on a project to go to the live site:</p>
      </div>

        <div className='pl-list'>
          {projects.map((item) => (<Project key={item.id} img={item.img} link={item.link} title={item.title} />))}


        </div>

    </div>
  )
}
export default ProjectList
