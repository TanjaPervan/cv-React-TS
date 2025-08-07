import React from 'react';
import { educationItems } from '../skillsdata';
import styles from '../SkillsTabs.module.css';

const EducationContent: React.FC = () => (
  <ul>
    {educationItems.map((edu, i) => (
      <li key={i} className={styles.educationItem}>
        <span className="silverText">{edu.title}</span>
        <span className={styles.degree}>{edu.degree}</span>
        <span className={styles.school}>{edu.school}</span>
      </li>
    ))}
  </ul>
);

export default EducationContent;
