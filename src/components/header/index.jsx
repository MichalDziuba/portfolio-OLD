import { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../../images/logo.webp";
import styles from "./styles.module.css";
export const Header = () => {
  const refMenu = useRef(null);
  const refBurger = useRef(null);
  const [isMenuOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    const burgerBtn = refBurger.current;
    const menu = refMenu.current;
    if (menu.classList.contains(styles.out)) {
      menu.classList.remove(styles.out);
    }
    if (!isMenuOpen) {
      burgerBtn.classList.add(styles.open);
      menu.classList.add(styles.active);
      setOpen(true);
    } else {
      menu.classList.add(styles.out);
      burgerBtn.classList.remove(styles.open);
      menu.classList.remove(styles.active);

      setOpen(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" className={styles.logo} loading="lazy" />
      </div>
      <div>
        <ul className={styles.menu} ref={refMenu}>
          <li data-key="home">
            <AnchorLink
              href="#home"
              offset={() => 100}
              className={styles.link}
              onClick={toggleMenu}
            >
              Home
            </AnchorLink>
          </li>
          <li data-key="projects">
            <AnchorLink
              href="#projects"
              offset={() => 80}
              className={styles.link}
              onClick={toggleMenu}
            >
              Projects
            </AnchorLink>
          </li>
          <li data-key="about">
            <AnchorLink
              href="#about"
              offset={() => 80}
              className={styles.link}
              onClick={toggleMenu}
            >
              About Me
            </AnchorLink>
          </li>
          <li data-key="contact">
            <AnchorLink
              href="#contact"
              offset={() => 80}
              className={styles.link}
              onClick={toggleMenu}
            >
              Contact
            </AnchorLink>
          </li>
          <li></li>
        </ul>

        <div className={styles.burger} onClick={toggleMenu} ref={refBurger}>
          <div className={styles.burger__btn}></div>
        </div>
      </div>
    </header>
  );
};
