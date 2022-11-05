import styles from "./styles.module.css";
import portfolioItems from "../../data/portfolioItems.json";
import { ProjectItem } from "../projectItem";
export const Projects = () => {
  return (
    <section className={styles.section__projects} id="projects">
      <div className={styles.section__title}>
        <p className={styles.section__title_main}>Proj</p>
        <span className={styles.section__title_sub}>ects</span>
      </div>
      <ul className={styles.items__list}>
        {portfolioItems.map((e, index) => {
          return (
            <li key={index}>
              <ProjectItem item={e} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
