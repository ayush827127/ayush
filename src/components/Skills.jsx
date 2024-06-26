import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

import { data } from "../Data/skillData";
import SkillItem from "./SkillItem";
import styles from "../css/Skill.module.css";

function Skills() {
  AOS.init({
    offset: 150,
    duration: 900,
  });

  return (
    <div className="container px-4  pt-2" id="skill">
      <h2 className="pb-2 border-bottom" data-aos="fade-up">
        Skills
      </h2>
      <hr style={{ color: "cyan", height: "2px", backgroundColor: "cyan" }} />
      <div
        className={`row g-4 py-5 row-cols-2 row-cols-lg-4 center ${styles.skillItemContainer} `}
      >
        {data.map((item, index) => (
          <SkillItem
            item={item[Object.keys(item)[0]]}
            key={item[Object.keys(item)[0]].name}
            data-aos-delay={(index + 1) * 100} // Example AOS delay attribute
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
