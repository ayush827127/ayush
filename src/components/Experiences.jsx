import lct from "../../public/images/lct_E.jpg";
import spz from "../../public/images/spz.jpg";
import styles from "../css/Experiences.module.css";

function Experiences() {
  return (
    <>
      <div className="container mt-3" id="experience">
        <div className="row featurette ">
          <h1> Experiences</h1>
          <hr className="featurette-divider mb-5" />
          <div className={`col-md-5 order-md-1 my-3 ${styles.expCard}`}>
            <img src={lct} alt="Lct" />
          </div>
          <div className="col-md-7 order-md-2" style={{ alignSelf: "center" }}>
            <h2 className="featurette-heading typing-animation ">Learning Curve Technology</h2>
            <span className="lead">01/2023 - 04/2023</span>
            <hr className="featurette-divider" />
            <div>
              As a Subject Matter Expert freelancer, I bring years of
              specialized knowledge and expertise to the table. With a proven
              track record, I offer a seamless experience in providing
              comprehensive solutions and insights.
            </div>
          </div>
        </div>

        <div className="row featurette">
          <div className={`col-md-5 order-md-2 my-3 ${styles.expCard}`}>
            <img src={spz} alt="spz" />
          </div>
          <div className="col-md-7 order-md-1" style={{ alignSelf: "center" }}>
            <h2 className="featurette-heading typing-animation ">SPZ Solutions pvt. ltd</h2>
            <span className="lead">06/2023 - 08/2023</span>
            <hr className="featurette-divider" />
            <div>
              This company work for brainly.com and our task is to complete the
              no. of question. It helps me to enchance work manangement.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experiences;
