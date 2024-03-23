import { data } from "../Data/projectData";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <>
      <div className="container" id="project">
        <h1 className="mt-5 mb-3">Projects</h1>
        <hr style={{color: "cyan", height: "2px", backgroundColor: "cyan" }}/>
        <div className="row">
          {data.map((item) => (
            <ProjectItem
              data={item[Object.keys(item)[0]]}
              key={item[Object.keys(item)[0]].name}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
