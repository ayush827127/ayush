import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import styles from "../css/Home.module.css";

function Home() {
  return (
    <div className={`${styles.homeContainer} container col-xxl-8 px-4 py-4`}>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-3" style={{justifyContent: "center"}}>
        <div className=" col-sm-8 col-lg-6">
          <div className={styles.wrapper}>
            <div className={styles.box}></div>
          </div>
        </div>
        <div className={`${styles.intro} col-lg-6`}>
          <h3 className="mt-5 typing-animation ">Hi,</h3>
          <h1 className="display-5 fw-bold lh-1 typing-animation ">i'm Ayush Gupta</h1>
          <h1 className="display-5 fw-bold lh-1 my-4 mb-5 typing-animation ">
            Fullstack Developer
          </h1>

          <div className="d-grid gap-2 d-md-flex justify-content-md-start mx-5  mt-5">
            <a href="tel:+918271274460">
              <button
                type="button"
                className={`btn btn-lg px-4 me-md-2 mx-3 mt-4 ${styles.contactBtn} `}
              >
                Contact
              </button>
            </a>
            <a href="https://drive.google.com/file/d/1Yfc9XoqB8dLIyxWkuLqGtLfPSEONKaa1/view">
              <button
                type="button"
                className={`btn btn-outline-secondary btn-lg px-4 mx-3 mt-4 ${styles.resumeBtn} `}
              >
                Download CV
              </button>
            </a>
          </div>
          <div
            className={`${styles.socialLogoContainer} d-grid gap-2 d-md-flex justify-content-md-start   mt-5`}
          >
            <div className={` col mt-3`}>
              <a href="https://m.facebook.com/profile.php?id=100012083976241&_rdr">
                <FaFacebook className={`${styles.socialLogo}`} />
              </a>
              <a href="https://twitter.com/_ayu_ssss_h">
                {" "}
                <RiTwitterXFill className={`${styles.socialLogo}`} />
              </a>
              <a href="https://www.linkedin.com/in/ayush-gupta-4332731b1">
                {" "}
                <FaLinkedin className={`${styles.socialLogo}`} />
              </a>
              <a href="https://www.instagram.com/ayush__gupta_______/">
                {" "}
                <FaSquareInstagram className={`${styles.socialLogo}`} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;