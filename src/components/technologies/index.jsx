import { techIcons } from "../../utils/techIconsCreator";
import styles from "./styles.module.css";
export const Technologies = () => {
  const technologies = "html,css,react,redux,javascript,node,typescript,git,github,figma,tailwind";
  return (
    <section className={styles.section__technologies}>
      <div className={styles.section__title}>
        <p className={styles.section__title_main}>Techno</p>
        <span className={styles.section__title_sub}>logies</span>
      </div>
      {techIcons({
        e: technologies,
        classNameIcon: styles.icon,
        classNameIconWrapper: styles.icon__wrapper,
        classNameDiv: styles.technologies,
        classNameTooltip: styles.tooltip,
      })}
    </section>
  );
};
