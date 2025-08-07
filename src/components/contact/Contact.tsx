// 📄 Contact.tsx
import styles from '../../styles/services.module.css';
import { contactInfo } from './contactData';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className={styles.row}>
          <div className={styles.contactLeft}>
            {/* <h1 className="subTitle">Contact Me</h1> */}
            <p>
              <i className="fa-solid fa-envelope"></i>
              {contactInfo.email}
            </p>
            <p>
              <i className="fa-solid fa-phone"></i>
              {contactInfo.phone}
            </p>
            <div className={styles.socialIcons}>
              {contactInfo.socials.map((social, i) => (
                <a key={i} href={social.link} target="_blank" rel="noreferrer">
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
            <a
              href={contactInfo.cvLink}
              download
              className={`${styles.btn} ${styles.btn2}`}
            >
              Download CV
            </a>
          </div>

          <div className={styles.contactRight}>
            <form>
              <input
                type="text"
                id="name"
                name="Name"
                placeholder="Your Name"
                required
              />
              <div className={styles.errorMessage} id="name-error"></div>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your e-mail"
                required
              />
              <div className={styles.errorMessage} id="email-error"></div>

              <textarea
                name="Message"
                rows={6}
                placeholder="Your Message"
              ></textarea>
              <button
                type="submit"
                className={`${styles.btn} ${styles.btn2} ${styles.wide}`}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>
            Made with <i className="fa-solid fa-heart"></i> by Tanja
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
