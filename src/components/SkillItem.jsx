import styles from "../css/SkillItem.module.css";

function SkillItem({ item }) {
  return (
    <div className={` ${styles.feature} feature col my-4`}>
      <div className={` ${styles.feature_icon} feature-icon`}>
        <img
          src={item.photo}
          className="rounded-circle"
          alt="Cinque Terre"
        />
      </div>
      <h2 className="typing-animation ">{item.name}</h2>
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
