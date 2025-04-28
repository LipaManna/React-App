import React from 'react'
import ProjectTable from './ProjectTable'
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

const ProjectsWrap = () => {
  return (
    <div className="common_component_wrap project_table_wrap">
      <h2 className="component_heading">Projects</h2>
      <p className="component_sub_heading">
        <IoCheckmarkCircleSharp color="#68D391" size={20} /> <b>30 done</b> this
        month
      </p>
      <ProjectTable />
    </div>
  );
}

export default ProjectsWrap
