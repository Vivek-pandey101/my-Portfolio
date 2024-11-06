import Button from "../items/Button";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.ContactContainer}>
      <h1>Get in touch</h1>
      <div className={styles.Information}>
        <div className={styles.ContactInfo}>
          <h2>Let&apos;s talk</h2>
          <p>
            I am currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <span>
            <i className="fa-solid fa-envelope"></i>p.vivekofficial@gmail.com
          </span>
          <span>
            <i className="fa-sharp fa-solid fa-phone-volume"></i>+91 9452154385
          </span>
          <span>
            <i className="fa-solid fa-location-dot"></i>Sector-121, Noida,
            Gautam Budh Nagar, UP
          </span>
        </div>
        <form className={styles.InputContainer}>
          <div className={styles.name}>
            <label htmlFor="name">Your Name*</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className={styles.email}>
            <label htmlFor="email">Your Email*</label>
            <input type="text" id="email" placeholder="Enter your email" />
          </div>
          <div className={styles.message}>
            <label htmlFor="message">Write your message here*</label>
            <textarea
              type="text"
              id="message"
              rows={8}
              cols={50}
              placeholder="Enter your message"
            />
          </div>
          <Button text="Submit"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;
