import Orders from './Orders'
import ProjectsWrap from './ProjectsWrap'
import './projectAndOrder.scss'

const ProjectsAndOrdersWrap = () => {
  return (
    <div className='component_wrapper project_and_order_wrap'>
      <ProjectsWrap/>
      <Orders/>
    </div>
  )
}

export default ProjectsAndOrdersWrap
