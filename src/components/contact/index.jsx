import contactPhoto from "../../images/email.png";
import styles from "./styles.module.css";
export const Contact = () => {
  return (
    <section id="contact" className={styles.section__contact}>
      <div className={styles.section__title}>
        <p className={styles.section__title_main}>Contact </p>
        <span className={styles.section__title_sub}>with me!</span>
      </div>
      <div className={styles.contact}>
        <div className={styles.image__wrapper}>
          <img className={styles.image} src={contactPhoto} alt="email" />
        </div>
        <div>
          <form
            className={styles.contact__form}
            action="https://formsubmit.co/michaldziuba.praca@gmail.com"
            method="POST"
            encType="multipart/form-data"
          >
            <label className={styles.form__label}>Name</label>
            <input
              placeholder="Please tell me your name..."
              className={styles.form__input}
              type="text"
              name="name"
              required
            />
            <label className={styles.form__label}>Email</label>
            <input
              placeholder="...and your email"
              type="email"
              name="email"
              className={styles.form__input}
              required
            />
            <label className={styles.form__label}>Content:</label>
            <textarea
              name="message"
              placeholder="...and here type your message."
              rows={10}
              className={styles.form__textarea}
              required
            ></textarea>
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://michaldziuba.github.io/portfolio/"
            ></input>
            <button type="submit" className={styles.form__btn}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
