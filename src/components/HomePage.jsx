import styles from "./HomePage.module.css";
import profileImg from "../../public/ProfileImage-removebg-preview.png";
import Button from "../items/Button";

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
        <Button />
        <Button background="none" border="2px solid gray" text="Resume"/>
      </div>
    </div>
  );
}

export default HomePage;
