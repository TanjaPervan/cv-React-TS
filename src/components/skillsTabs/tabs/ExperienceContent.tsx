import React from 'react';
import { experienceItems } from '../skillsdata';
import styles from '../SkillsTabs.module.css';

const ExperienceContent: React.FC = () => (
  <ul>
    {experienceItems.map((exp, i) => (
      <li key={i}>
        <span className="silverText">{exp.title}</span>
        <span className={styles.jobCompany}>{exp.company}</span>
        <span className={styles.jobDates}>{exp.dates}</span>
      </li>
    ))}
  </ul>
);

export default ExperienceContent;
