import styles from './About.module.css';
import profileImg from '../../assets/images/tanjapervanphoto.jpg';
import { aboutText } from './AboutData';
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h1 className={styles.subTitle}>About Me</h1>

        <div className={styles.row}>
          <div className={styles.columnLeft}>
            <img
              src={profileImg}
              alt="Tanja Pervan"
              className={styles.aboutImage}
            />
          </div>
          <div className={styles.columnRight}>
            <p>
              {aboutText.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
