import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styles from "./NavBar.module.css";
import { businessContent } from "../../../content/BusinessContent";

const NavBar = () => {
  const { logoImg, logoImgAlt } = businessContent;
  const { navBar, active, shadow, mobileMenu, logo, navOptions } = styles;
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleMenuClick = () => setShowNav(!showNav);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } if (window.scrollY < 50) {
        setScrolled(false);
      }
    };
  }, []);

  const topLoad = () => {
    window.scrollTo(0, 0);
    setShowNav(false);
  };

  const classes = scrolled ? `${navBar} ${shadow}` : navBar;

  return (
    <header className={classes}>
      <div className={logo}>
        <NavLink onClick={topLoad} to="/home">
          <img className={logo} src={logoImg} alt={logoImgAlt} />
        </NavLink>
      </div>

      <div className={showNav ? `${navOptions} ${active}` : navOptions}>
        <NavLink
          onClick={topLoad}
          className={(navData) => (navData.isActive ? active : "")}
          to="/home"
        >
          HOME
        </NavLink>
        <NavLink
          onClick={topLoad}
          className={(navData) => (navData.isActive ? active : "")}
          to="/about"
        >
          ABOUT
        </NavLink>
        <NavLink
          onClick={topLoad}
          className={(navData) => (navData.isActive ? active : "")}
          to="/services"
        >
          SERVICES
        </NavLink>
        <NavLink
          onClick={topLoad}
          className={(navData) => (navData.isActive ? active : "")}
          to="/contact"
        >
          CONTACT
        </NavLink>
        <a href="https://www.timetopet.com/portal/brittanyspetservice/create-account">
          BOOK
        </a>
      </div>
      <div className={mobileMenu}>
        {!showNav ? (
          <FaBars onClick={handleMenuClick} />
        ) : (
          <FaBars onClick={handleMenuClick} />
        )}
      </div>
    </header>
  );
};

export default NavBar;
