import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Button from "../items/Button";
import { useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);

  const hndleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className={styles.NavbarContainer}>
        <h2>Vivek</h2>
        <div>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </div>
        <a
          href="https://wa.me/919452154385?text=Hello! I just submitted the form on your portfolio."
          target="_blank"
        >
          <Button />
        </a>
        <i className="fa-solid fa-bars" id="menuBar" onClick={hndleShow}></i>
      </div>
      {show && (
        <div
          className={`${styles.MobileNavbarContainer} ${
            show ? styles.showSidebar : ""
          }`}
        >
          <div
            className={styles.overlay}
            id="showSidebar"
            onClick={hndleShow}
          ></div>
          <div className={styles.links}>
            <i className="fa-solid fa-x"></i>
            <Link to={"/"} onClick={hndleShow}>
              Home
            </Link>
            <Link to={"/about"} onClick={hndleShow}>
              About
            </Link>
            <Link to={"/contact"} onClick={hndleShow}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
