import Button from "../items/Button";
import styles from "./Contact.module.css";
import { useState } from "react";

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "684c96f9-37c4-42aa-aa58-f2ed66ef44d5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setStatusMessage("Thank you! Your message has been sent successfully.");
        setTimeout(() => {
          setStatusMessage("");
        }, 2000);
        event.target.reset();
      } else {
        setStatusMessage("Oops! Something went wrong. Please try again.");
        setTimeout(() => {
          setStatusMessage("");
        }, 2000);
        event.target.reset();
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again later.");
      setTimeout(() => {
        setStatusMessage("");
      }, 2000);
    }
  };

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
        <form onSubmit={onSubmit} className={styles.InputContainer}>
          <div className={styles.name}>
            <label htmlFor="name">Your Name*</label>
            <input
              required
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className={styles.email}>
            <label htmlFor="email">Your Email*</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.message}>
            <label htmlFor="message">Write your message here*</label>
            <textarea
              required
              id="message"
              name="message"
              rows={8}
              cols={50}
              placeholder="Enter your message"
            />
          </div>
          <Button text="Submit" />
          {statusMessage && (
            <p className={styles.statusMessage}>{statusMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
