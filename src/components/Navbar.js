import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [menuState, setMenuState] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    if (!isActive) {
      setIsActive(true);
      setMenuState("show");
    } else {
      setIsActive(false);
      setMenuState("hiding");
    }
  };
  const handleTransitionEnd = () => {
    if (menuState === "hiding") {
      setMenuState("");
    }
  };

  const handleNavLinkClick = () => {
    setIsActive(false);
    setMenuState("hiding");
  };

  const handleClickOutside = (e) => {
    if (
      navRef.current &&
      !navRef.current.contains(e.target) &&
      !e.target.closest(".nav__hamburgers")
    ) {
      setIsActive(false);
      setMenuState("hiding");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav__logo">
        <Image
          className="nav__img"
          src="/img/sung.svg"
          alt="Logo"
          width={120}
          height={100}
        />
      </div>

      <ul
        className={`nav__list ${menuState}`}
        ref={navRef}
        onTransitionEnd={handleTransitionEnd}>
        <li className="nav__item">
          <a
            href="#about"
            className="nav__link"
            data-text="About"
            onClick={handleNavLinkClick}>
            About
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#Product"
            className="nav__link"
            data-text="Product"
            onClick={handleNavLinkClick}>
            Product
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#contact"
            className="nav__link"
            data-text="Contact"
            onClick={handleNavLinkClick}>
            Contact
          </a>
        </li>
      </ul>

      <div
        className={`nav__hamburgers ${isActive ? "active" : ""}`}
        onClick={toggleMenu}>
        <span className="nav__hamburgers-hamburger"></span>
        <span className="nav__hamburgers-hamburger"></span>
        <span className="nav__hamburgers-hamburger"></span>
      </div>
    </nav>
  );
}
