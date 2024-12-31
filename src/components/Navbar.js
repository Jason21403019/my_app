import react from "react";
import Image from "next/image";

export default function Navbar() {
  const [isActive, setIsActive] = react.useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
    // console.log("you clicked me");
  };

  return (
    <nav className="nav">
      <div className="nav__logo">
        <Image
          className="nav__img"
          src="/img/sung.svg"
          alt="Logo"
          width={120}
          height={100}
        />
      </div>
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#about" className="nav__link" data-text="About">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#projects" className="nav__link" data-text="Product">
            Product
          </a>
        </li>
        <li className="nav__item">
          <a href="#contact" className="nav__link" data-text="Contact">
            Contact
          </a>
        </li>
      </ul>
      <div
        className={`nav__hamburgers ${isActive ? "active" : ""}`}
        onClick={toggleActive}>
        <span className="nav__hamburgers-hamburger"></span>
        <span className="nav__hamburgers-hamburger"></span>
        <span className="nav__hamburgers-hamburger"></span>
      </div>
    </nav>
  );
}
