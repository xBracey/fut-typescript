import * as React from "react";
import { projectsData } from "../data/projects";
import { Link } from "react-router-dom";

export interface Props {}

export interface State {}

class ProjectContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { header, projects } = projectsData;

    const projectsComponent = projects.map((project, index: number) => {
      const containerColour =
        index % 4 == 0 || index % 4 == 3
          ? "container-purple"
          : "container-cyan";

      return (
        <>
          <Link
            to={project.link}
            className={
              "about-bullet-container project-bullet-container " +
              containerColour
            }
          >
            <h3 className="about-bullet-header">{project.name}</h3>
            <p className="about-bullet">{project.description}</p>
          </Link>
        </>
      );
    });

    return (
      <div className="main-container">
        <h3 className="about-header">{header}</h3>
        <div className="about-bullet-info-container project-info-container">
          {projectsComponent}
        </div>
      </div>
    );
  }
}

export default ProjectContainer;
