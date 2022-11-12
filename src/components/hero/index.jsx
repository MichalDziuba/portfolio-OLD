import HeroImage from "../../images/hero.webp";
import styles from "./styles.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneInTalkSharpIcon from "@mui/icons-material/PhoneInTalkSharp";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
export const Hero = () => {
  return (
    <section id="home">
      <div className={styles.hero}>
        <div className={styles.hero__image}>
          <img src={HeroImage} alt="Developer" className={styles.image} loading="lazy" />
        </div>
        <div className={styles.description}>
          <p>Michał Dziuba</p>
          <p> Fullstack Developer</p>
          <ul className={styles.icons__wrapper}>
            <li>
              <a
                href="https://www.linkedin.com/in/micha%C5%82-dziuba-b44698224/"
                target="blank"
                rel="noreferrer noopener"
              >
                <LinkedInIcon className={styles.icon} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MichalDziuba"
                target="blank"
                rel="noreferrer noopener"
              >
                <GitHubIcon className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="tel:+48661-082-328">
                <PhoneInTalkSharpIcon className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="mailto:michaldziuba.praca@gmail.com">
                <ForwardToInboxIcon className={styles.icon} />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.scroll__circles}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
        </div>
      </div>
    </section>
  );
};
