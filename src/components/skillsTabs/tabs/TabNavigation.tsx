import React from 'react';
import styles from '../SkillsTabs.module.css';

interface TabNavigationProps {
  activeTab: 'skills' | 'experience' | 'education';
  setActiveTab: (tab: 'skills' | 'experience' | 'education') => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  setActiveTab,
}) => (
  <div className={styles.tabTitles}>
    {['skills', 'experience', 'education'].map((tab) => (
      <p
        key={tab}
        className={`${styles.tabLink} ${
          activeTab === tab ? styles.active : ''
        }`}
        onClick={() => setActiveTab(tab as any)}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </p>
    ))}
  </div>
);

export default TabNavigation;
