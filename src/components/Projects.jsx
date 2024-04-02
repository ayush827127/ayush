import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { data } from "../Data/projectData";
import ProjectItem from "./ProjectItem";

function Projects() {
  AOS.init({
    offset: 190,
    duration: 400
  });
  return (
    <>
      <div className="container" id="project" >
        <h1 className="mt-5 mb-3" data-aos="fade-up" >Projects</h1>
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
