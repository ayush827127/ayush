import lct from "../../public/images/lct_E.jpg";
import spz from "../../public/images/spz.jpg";
import calai from "../../public/images/calai.png"
import styles from "../css/Experiences.module.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

function Experiences() {
  AOS.init({
    offset: 190,
    duration: 400,
  });
  return (
    <>
      <div className="container mt-3" id="experience">
        <h1 data-aos="flip-right"> Experiences</h1>
        <hr className="featurette-divider mb-5" />
        <div className="row featurette">
          <div
            className={`col-md-5 order-md-2 my-3 ${styles.expCard}`}
            data-aos="fade-left"
          >
            <img src={calai} alt="CalAI" />
          </div>
          <div
            className="col-md-7 order-md-1"
            style={{ alignSelf: "center" }}
            data-aos="fade-right"
          >
            <h2 className="featurette-heading typing-animation ">CalAI</h2>
            <span className="lead">04/2023 - 06/2023</span>
            <hr className="featurette-divider" />
            <div>
              In the role of Fullstack Developer Intern, spearheaded the
              development of a course seller website, integrating PayPal
              functionality and leveraging real-time Firebase database
              capabilities. Contributed to enhancing user experience and backend
              operations, driving innovation in web application development.
            </div>
          </div>
        </div>
        <div className="row featurette ">
          <div
            className={`col-md-5 order-md-1 my-3 ${styles.expCard}`}
            data-aos="fade-right"
          >
            <img src={lct} alt="Lct" />
          </div>
          <div
            className="col-md-7 order-md-2"
            style={{ alignSelf: "center" }}
            data-aos="fade-left"
          >
            <h2 className="featurette-heading typing-animation ">
              Learning Curve Technology
            </h2>
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
          <div
            className={`col-md-5 order-md-2 my-3 ${styles.expCard}`}
            data-aos="fade-left"
          >
            <img src={spz} alt="spz" />
          </div>
          <div
            className="col-md-7 order-md-1"
            style={{ alignSelf: "center" }}
            data-aos="fade-right"
          >
            <h2 className="featurette-heading typing-animation ">
              SPZ Solutions pvt. ltd
            </h2>
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
