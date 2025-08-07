import styles from '../../styles/services.module.css';

const Services = () => (
  <section id="services">
    <div className="container">
      <h1 className="subTitle">My Services</h1>
      <div className={styles.servicesList}>
        <div className={`${styles.servicesSection} ${styles.clickable}`}>
          <i className="fa-solid fa-code"></i>
          <h2 className="silverText">Web Development</h2>
          <p>
            Building fast and scalable web applications with React and
            TypeScript...
          </p>
          <a href="#">learn more</a>
        </div>
        <div className={`${styles.servicesSection} ${styles.clickable}`}>
          <i className="fa-brands fa-app-store"></i>
          <h2 className="silverText">Mobile App Development</h2>
          <p>
            Developing cross-platform mobile applications using Flutter and
            React Native.
          </p>
          <a href="#">learn more</a>
        </div>
        <div className={`${styles.servicesSection} ${styles.clickable}`}>
          <i className="fa-solid fa-crop-simple"></i>
          <h2 className="silverText">UI/UX Implementation</h2>
          <p>
            Turning designs into pixel-perfect, interactive, and accessible UIs.
          </p>
          <a href="#">learn more</a>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
