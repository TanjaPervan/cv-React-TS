import styles from '../../styles/services.module.css';

const Contact = () => (
  <section id="contact">
    <div className="container">
      <div className="row">
        <div className="contact-left">
          <h1 className="sub-title">Contact Me</h1>
          <p>
            <i className="fa-solid fa-envelope"></i> tanya.pervan@gmail.com
          </p>
          <p>
            <i className="fa-solid fa-phone"></i> +381 63 7654 051
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://rs.linkedin.com/in/tanja-pervan-3575a61b9"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://github.com/TanjaPer" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <a href="images/TanjaPervanCV.pdf" download className="btn btn2">
            Download CV
          </a>
        </div>

        <div className="contact-right">
          <form>
            <input type="text" id="name" name="Name" placeholder="Your Name" />
            <div className="error-message" id="name-error"></div>

            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your e-mail"
            />
            <div className="error-message" id="email-error"></div>

            <textarea
              name="Message"
              rows={6}
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="btn btn2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>

    <div className="copyright">
      <p>
        Made with <i className="fa-solid fa-heart"></i> by Tanja
      </p>
    </div>
  </section>
);

export default Contact;
