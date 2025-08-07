import React, { useState } from 'react';
import styles from './SkillsTabs.module.css';
import TabNavigation from './tabs/TabNavigation';
import ExperienceContent from './tabs/ExperienceContent';
import EducationContent from './tabs/EducationContent';
import SkillsContent from './tabs/SkillsContent';
import bgImage from '../../assets/images/background-img.jpg';

const SkillsTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'skills' | 'experience' | 'education'
  >('skills');
  const bgImg = {
    backgroundImage: `url(${bgImage})`,
  };
  //   className={styles.section}
  return (
    <section id="tab-titles">
      <div className={styles.tabSection} style={bgImg}>
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className={styles.tabContent}>
          {activeTab === 'skills' && <SkillsContent />}
          {activeTab === 'experience' && <ExperienceContent />}
          {activeTab === 'education' && <EducationContent />}
        </div>
      </div>
    </section>
  );
};

export default SkillsTabs;
