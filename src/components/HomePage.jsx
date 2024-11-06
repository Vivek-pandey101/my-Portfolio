import styles from "./HomePage.module.css";
import profileImg from "../../public/ProfileImage-removebg-preview.png";
import Button from "../items/Button";
import resume from "../assets/Vivek.pdf";

function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div className={styles.ImgContainer}>
        <img src={profileImg} alt="Profile Img" />
      </div>
      <div>
        <h1>
          I am <span>Vivek Kumar Pandey,</span> frontend web developer
        </h1>
        <p>
          I am a passionate frontend web developer with a strong foundation in
          React, Redux Toolkit, and JavaScript.
        </p>
      </div>
      <div className={styles.btnComp}>
        <div>
          <a
            href="https://wa.me/919452154385?text=Hello! I just submitted the form on your portfolio."
            target="_blank"
          >
            <Button />
          </a>
        </div>
        <div onClick={() => window.open(resume)}>
          <Button background="none" border="2px solid gray" text="Resume" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
