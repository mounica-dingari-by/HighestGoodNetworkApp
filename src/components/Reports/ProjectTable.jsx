import React from 'react'
import './reports.css'
import { Link } from 'react-router-dom'

const  ProjectTable = (props) => {
  let ProjectsList = [];
  if (props.projects.length > 0) {
    ProjectsList = props.projects.map((project, index) =>
        <tr id={"tr_" + project._id}>
          <th scope="row"><div>{index + 1}</div></th>
          <td>
            <Link to={`/projectreport/${project._id}`} projectId={project._id}>
              {project.projectName}
            </Link>
          </td>
          <td>
            {project.isActive ?
              <div className="isActive"><i className="fa fa-circle" aria-hidden="true"></i></div> :
              <div className="isNotActive"><i className="fa fa-circle-o" aria-hidden="true"></i></div>}
          </td>
        </tr>
    );
  }

  return (
    <table class="center">
    <table className="table table-bordered table-responsive-sm">
      <thead>
    <tr>
      <th scope="col" id="projects__order">#</th>
      <th scope="col">PROJECT_NAME</th>
      <th scope="col" id="projects__active">ACTIVE</th>
    </tr>
    </thead>
      <tbody>
  {ProjectsList}
  </tbody>
  </table>
  </table>
  )
}

export default ProjectTable;

