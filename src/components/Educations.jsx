import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import styles from "../css/Educations.module.css";

function Educations() {
  AOS.init({
    offset: 190,
    duration: 1400,
  });
  return (
    <div className="container mt-3" id="education">
      <div className={` ${styles.row} row mb-4 `}>
        <h2 className="pb-2 border-bottom mb-5" data-aos="flip-left" >Educations</h2>
        <div className={`${styles.eduBox} col-lg-4 col-md-6 my-4`} data-aos="fade-right" >
          <div className={` ${styles.card} card`}>
            <div className={` ${styles.cardBody} card-body`}>
              <h5 className={` ${styles.cardTitle} card-title my-3`}>
                2018-2019
              </h5>
              <h5 className={` ${styles.cardTitle} card-title`}>
                marticulations
              </h5>
              <p className={`${styles.cardText} card-text`}>
                Hansraj Public School, Cbse.
              </p>
              <p className={`${styles.cardText} card-text`}>Gaya, Bihar</p>
            </div>
          </div>
        </div>
        <div className={`${styles.eduBox} col-lg-4 col-md-6 my-4`} data-aos="fade-up">
          <div className={` ${styles.card} card`}>
            <div className={` ${styles.cardBody} card-body`}>
              <h5 className={` ${styles.cardTitle} card-title my-3`}>
                2019-2021
              </h5>
              <h5 className={` ${styles.cardTitle} card-title`}>
                Intermidiate
              </h5>
              <p className={`${styles.cardText} card-text`}>
                Gaya College Gaya, Gaya.
              </p>
              <p className={`${styles.cardText} card-text`}>Gaya, Bihar</p>
            </div>
          </div>
        </div>
        <div className={`${styles.eduBox} col-lg-4 col-md-6 my-4`} data-aos="fade-left">
          <div className={` ${styles.card} card`}>
            <div className={` ${styles.cardBody} card-body`}>
              <h5 className={` ${styles.cardTitle} card-title my-3`}>
                2021-2024
              </h5>
              <h5 className={` ${styles.cardTitle} card-title`}>
                Bachelor In Computer Application
              </h5>
              <p className={`${styles.cardText} card-text`}>
                Mirza Ghalib College, Gaya.
              </p>
              <p className={`${styles.cardText} card-text`}>Gaya, Bihar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Educations;
