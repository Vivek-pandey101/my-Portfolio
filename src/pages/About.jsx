import styles from "./About.module.css";
import profileImg from "../../public/ProfileImage-removebg-preview.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className={styles.AboutContainer}>
      <h1>About me.</h1>
      <div className={styles.About}>
        <div>
          <img src={profileImg} alt="" />
        </div>
        <div>
          <p className={styles.AboutText}>
            If you have any questions, need further information, or just want to
            know more about my work, feel free to reach out! Whether it&apos;s
            about a specific project, collaboration opportunities, or anything
            else, I&apos;m always open to a conversation.
          </p>
          <div className={styles.skills}>
            <div>
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div>
              <p>Javascript</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div>
              <p>Redux-Toolkit</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div>
              <p>ReactJS</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.myWorks}>
        <h2>My Works</h2>
        <Link to={"https://vivkes-online-shop.netlify.app/"} target="_blank">
          Online-Shop
        </Link>
        <Link to={"https://vivek-multi-step-form.netlify.app/"} target="_blank">
          Multi-Step-Form
        </Link>
        <Link
          to={"https://gorgeous-licorice-a503c4.netlify.app/"}
          target="_blank"
        >
          Frontend E-commerce
        </Link>
      </div>
    </div>
  );
}

export default About;
