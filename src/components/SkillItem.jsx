import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import styles from "../css/SkillItem.module.css";

function SkillItem({ item }) {
  AOS.init({
    offset: 110,
  });
  return (
    <div className={` ${styles.feature} feature col my-4`} data-aos="slide-up">
      <div className={` ${styles.feature_icon} feature-icon`}>
        <img
          src={item.photo}
          className="rounded-circle"
          alt="Cinque Terre"
        />
      </div>
      <h2 className="typing-animation " data-aos="fade-up-right" >{item.name}</h2>
      <div className={`${styles.progress} progress`}>
        <div
          className={`${styles.progressBar} progress-bar`}
          role="progressbar"
          aria-valuenow="80"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {item.percentage}
        </div>
      </div>
    </div>
  );
}
export default SkillItem;
