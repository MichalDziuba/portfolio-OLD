import styles from "./styles.module.css";
import aboutImg from "../../images/about.png";
import certificate from '../../images/certificate.png'
import Backdrop from "@mui/material/Backdrop";
import { useState } from "react";
import {  Technologies } from "../technologies";
export const About = () => {
     const [open, setOpen] = useState(false);
     const handleClose = () => {
       setOpen(false);
     };
     const handleToggle = () => {
       setOpen(!open);
     };
  return (
    <section id="about">
      <div className={styles.section__title}>
        <p className={styles.section__title_main}> About </p>
        <span className={styles.section__title_sub}> me</span>
      </div>
      <div className={styles.about__wrapper}>
        <div className={styles.img__wrapper}>
          <img className={styles.image} src={aboutImg} alt="programming" />
        </div>
        <div className={styles.about__description}>
          Hello, my name is Michal. I am 28 years old and I want to become a
          full stack developer. I started the course 'Fullstack developer from
          zero' in March 2021. I completed the course in October 2022 receiving
          a skills{" "}
          <button onClick={handleToggle} className={styles.certificate}>
            certificate
          </button>
          . During the course I learned technologies like HTML, CSS, JavaScript,
          React and Node.js. I have experience working in a group using Scrum
          and Agile methodologies, because this is how we worked during group
          projects. At the moment I am focusing on expanding my knowledge and
          learning new technologies. I am looking for my first job as a
          Fullstack Developer/Frontend Developer. If you want to contact me or
          have any questions for me, check out the contact section below!
          Thanks!
        </div>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <div className={styles.certificate__wrapper}>
          <img
            className={styles.certificate__img}
            src={certificate}
            alt="certificate"
          />
        </div>
          </Backdrop>
          <Technologies/>
    </section>
  );
};
