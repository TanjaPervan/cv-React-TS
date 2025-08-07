import React from 'react';
import styles from '../../styles/services.module.css';
import { workItems } from './workData';

const Work = () => (
  <section id="portfolio" className="work-section-bg">
    <div className="container">
      <h1 className="subTitle">My Work</h1>
      <div className={styles.workList}>
        {workItems.map((item) => (
          <div key={item.id} className={`${styles.work} ${styles.clickable}`}>
            <img src={item.image} alt={item.title} />
            <div className={styles.layer}>
              <h3>{item.title}</h3>
              <p>
                {item.description.map((line, index) => (
                  <React.Fragment key={index}>
                    • {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              <a href={item.link}>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://github.com/TanjaPervan/cv-React-TS"
        target="_blank"
        className={styles.btn}
      >
        See more
      </a>
    </div>
  </section>
);

export default Work;
