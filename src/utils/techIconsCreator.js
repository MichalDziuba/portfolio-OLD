import javaScriptIcon from "../icons/javascript.svg";
import htmlIcon from "../icons/html5.svg";
import cssIcon from "../icons/css.svg";
import reduxIcon from "../icons/redux.svg";
import restApiIcon from "../icons/restapi.svg";
import reactIcon from "../icons/react.svg";
import figmaIcon from "../icons/figma.svg";
import netlifyIcon from "../icons/netlify.svg";
import githubIcon from "../icons/github.svg";
import gitIcon from "../icons/git.svg";
import nodeIcon from "../icons/nodejs.svg";
import sassIcon from "../icons/sass.svg";
import taliwindIcon from '../icons/tailwind.svg';
import typescriptIcon from '../icons/typescript.svg'
export const techIcons = ({
  e,
  classNameIcon,
  classNameDiv,
  classNameTooltip,
  classNameIconWrapper,
}) => {
  const icons = [];

  const elements = e.toLowerCase().split(",");
  if (elements.includes("js") || elements.includes("javascript")) {
    icons.push(
      <div className={classNameIconWrapper}>
        <img className={classNameIcon} src={javaScriptIcon} alt="icon" />
        <span className={classNameTooltip}>JavaScript </span>
      </div>
    );
  }
  if (elements.includes("html")) {
    icons.push(
      <div className={classNameIconWrapper}>
        <img className={classNameIcon} src={htmlIcon} alt="icon" />
        <span className={classNameTooltip}>HTML5</span>
      </div>
    );
  }
  if (elements.includes("css")) {
    icons.push(
      <div className={classNameIconWrapper}>
        <img className={classNameIcon} src={cssIcon} alt="icon" />
        <span className={classNameTooltip}>CSS3</span>
      </div>
    );
  }
  if (elements.includes("redux")) {
    icons.push(
      <div className={classNameIconWrapper}>
        <img className={classNameIcon} src={reduxIcon} alt="icon" />
        <span className={classNameTooltip}>Redux</span>
      </div>
    );
  }
  if (elements.includes("restapi")) {
    icons.push(
      <div className={classNameIconWrapper}>
        <img className={classNameIcon} src={restApiIcon} alt="icon" />
        <span className={classNameTooltip}>RestAPI</span>
      </div>
    );
  }
  if (elements.includes("react")) {
    icons.push(
      <div className={classNameIconWrapper}>
        <img className={classNameIcon} src={reactIcon} alt="icon" />
        <span className={classNameTooltip}>React</span>
      </div>
    );
  }
  if (elements.includes("figma")) {
    icons.push(
      <div className={classNameIconWrapper}>
        <img className={classNameIcon} src={figmaIcon} alt="icon" />
        <span className={classNameTooltip}>Figma</span>
      </div>
    );
  }
  if (elements.includes("netlify")) {
    icons.push(
      <div className={classNameIconWrapper}>
        <img className={classNameIcon} src={netlifyIcon} alt="icon" />
        <span className={classNameTooltip}>Netlify</span>
      </div>
    );
  }
  if (elements.includes("github")) {
    icons.push(
      <div className={classNameIconWrapper}>
        <img className={classNameIcon} src={githubIcon} alt="icon" />
        <span className={classNameTooltip}>GitHub</span>
      </div>
    );
  }
  if (elements.includes("git")) {
    icons.push(
      <div className={classNameIconWrapper}>
        <img className={classNameIcon} src={gitIcon} alt="icon" />
        <span className={classNameTooltip}>Git</span>
      </div>
    );
  }
  if (elements.includes("nodejs") || elements.includes("node")) {
    icons.push(
      <div className={classNameIconWrapper}>
        <img className={classNameIcon} src={nodeIcon} alt="icon" />
        <span className={classNameTooltip}>Node.js</span>
      </div>
    );
  } if (elements.includes("sass")) {
    icons.push(
      <div className={classNameIconWrapper}>
        <img className={classNameIcon} src={sassIcon} alt="icon" />
        <span className={classNameTooltip}>Sass</span>
      </div>
    );
  }
  if (elements.includes("tailwind")) {
    icons.push(
      <div className={classNameIconWrapper}>
        <img className={classNameIcon} src={taliwindIcon} alt="icon" />
        <span className={classNameTooltip}>Tailwind</span>
      </div>
    );
  }
  if (elements.includes("typescript")) {
    icons.push(
      <div className={classNameIconWrapper}>
        <img
          className={classNameIcon}
          src={typescriptIcon}
          alt="icon"
        />
        <span className={classNameTooltip}>TypeScript</span>
      </div>
    );
  }

  return (
    <div className={classNameDiv}>
      {icons?.map((icon, index) => {
        return <div key={index}>{icon}</div>;
      })}
    </div>
  );
};
