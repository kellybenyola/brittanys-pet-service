import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { businessContent } from "../../../content/BusinessContent";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import EmailForm from "../../ui/EmailForm/EmailForm";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const {
    footerTitle,
    footerDecscription,
    footerPhone,
    emailTitle,
    emailDescription,
    emailPlaceHolder,
  } = businessContent;

  const topLoad = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <section className={styles.section}>
          <div>
            <h1 className={styles.title}>{footerTitle}</h1>
          </div>
          <div className={styles.vertical}>
            <span>{footerDecscription}</span>
            <span>{footerPhone}</span>
            <div className={styles.socials}>
              <a href="https://www.facebook.com/Brittanys-Pet-Service-LLC-101359095663172">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/brittanys_pet_service_llc/">
                <FaInstagram />
              </a>
              <a href="brittanyspetservicellc@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div>
            <h1 className={styles.title2}>
            Sniff Around
            </h1>
          </div>
          <div
            className={`${styles.navLink} ${styles.vertical} ${styles.description} ${styles.footerLinks}`}
          >
            <Link onClick={topLoad} to="/home">HOME</Link>
            <Link onClick={topLoad} to="/about">ABOUT</Link>
            <Link onClick={topLoad} to="/services">SERVICES</Link>
            <Link onClick={topLoad} to="/contact">CONTACT</Link>
            <a href="https://www.timetopet.com/portal/brittanyspetservice/create-account">
          BOOK
        </a>
          </div>
        </section>

        <section className={styles.section}>
          <div>
            <h1 className={styles.title2}>
              {emailTitle}
            </h1>
          </div>
          <div className={styles.description}>
            <span>{emailDescription}</span>
            <div className={styles.padding}>
              <EmailForm placeHolder={emailPlaceHolder} />
            </div>
          </div>
        </section>
      </div>

      <div className={styles.centered}>
        <p className={styles.year}>© {year} Brittany's Pet Services, LLC.</p>
      </div>
    </footer>
  );
};

export default Footer;
