import {data} from "../Data/skillData"
import SkillItem from "./SkillItem";

function Skills() {
  return (
    <div className="container px-4  pt-2" id="skill">
      <h2 className="pb-2 border-bottom">Skills</h2>
      <hr style={{color: "cyan", height: "2px", backgroundColor: "cyan" }}/>
      <div className="row g-4 py-5 row-cols-2 row-cols-lg-4 center" style={{"justifyContent": "center"}} >
        {data.map((item) => (
        <SkillItem item={item[Object.keys(item)[0]]} key={item[Object.keys(item)[0]].name} />
        ))}
       
      </div>
    </div>
  );
}

export default Skills;
