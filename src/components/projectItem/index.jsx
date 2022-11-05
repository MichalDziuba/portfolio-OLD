import { decodedString } from "../../utils/decodedStrings";
import { techIcons } from "../../utils/techIconsCreator";
import styles from "./styles.module.css";

export const ProjectItem = ({ item }) => {
    
  return (
    <div className={styles.item}>
      <div className={styles.thumb}>
        <img src={item.preview} className={styles.image} alt="preview"></img>
      </div>

      <div className={styles.item__specification}>
        <div className={styles.title__wrapper}>
          <p className={styles.item__title}>{item.title}</p>
          <p className={styles.item__symbol}>
            {decodedString("&LT;&sol;&GT;")}
          </p>
        </div>

        <p className={styles.item__description}>{item.description}</p>
        <div className={styles.item__tech}>
          <p>Technologies used:</p>
          {techIcons({
            e: item.tech,
            classNameIcon: styles.icon,
            classNameDiv: styles.icons__wrapper,
            classNameTooltip: styles.tooltip,
            classNameIconWrapper: styles.icon__wrapper,
          })}
        </div>
        <ul className={styles.buttons__list}>
          <li>
            <a
              href={item.code}
              className={styles.button}
              target="blank"
              rel="noreferrer noopener"
            >
              Code
            </a>
          </li>
          <li>
            <a
              href={item.link}
              className={styles.button}
              target="blank"
              rel="noreferrer noopener"
            >
              Live
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
