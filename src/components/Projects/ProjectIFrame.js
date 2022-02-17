import React from "react";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const ProjectIFrame = (props) => {
  const {project, url} = props;
  const className = `project-iframe-${project}`
  return (
    <div>
      <a className="back-button" href="/projects">
      <ChevronLeftIcon />
      </a>
      <iframe 
        className={className}
        src={url} 
        height={window.innerHeight * .8} >
        </iframe>
      </div>
  )
}
export {ProjectIFrame}