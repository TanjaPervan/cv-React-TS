import React from 'react';
import { skillGroups } from '../skillsdata';
import styles from '../SkillsTabs.module.css';

const SkillsContent: React.FC = () => (
  <ul>
    {skillGroups.map((group, i) => (
      <li className={styles.skillGroup} key={i}>
        {group.map((skill, j) => (
          <span className="darkText" key={j}>
            {skill}
          </span>
        ))}
      </li>
    ))}
  </ul>
);

export default SkillsContent;
