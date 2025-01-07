import react from "react";
import Image from "next/image";

export default function Navbar() {
  const [isActive, setIsActive] = react.useState(false);
  const [lastScrollY, setLastScrollY] = react.useState(0);
  const [showNavbar, setShowNavbar] = react.useState(true);

  react.useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 20) {
        setShowNavbar(true);
        setLastScrollY(currentScrollY);
        return;
      }
      if (Math.abs(currentScrollY - lastScrollY) < 10) {
        return;
      }

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`nav ${showNavbar ? "nav--visible" : "nav--hidden"}`}>
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
