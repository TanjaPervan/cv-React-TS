import type { EducationItem, ExperienceItem, SkillGroup } from './skillsType';

export const experienceItems: ExperienceItem[] = [
  {
    title: 'Frontend Developer',
    company: 'Velocitech',
    dates: 'Nov 2023 - Jun 2024',
  },
  {
    title: 'Mobile Application Developer',
    company: 'Goxee Dealer Software',
    dates: 'Mar 2023 - Oct 2023',
  },
  {
    title: 'Flutter Developer',
    company: 'Credeo GmbH',
    dates: 'Sep 2022 - Mar 2023',
  },
];

export const educationItems: EducationItem[] = [
  {
    title: 'Professor of Mathematics and Computer Science',
    degree: "Master's Degree",
    school: 'University of Belgrade Faculty of Mathematics 2013',
  },
  {
    title: 'Database Foundations',
    degree: 'Oracle Academy',
    school: 'Oracle 2022',
  },
];

export const skillGroups: SkillGroup[][] = [
  ['JS / TS / HTML / CSS', 'React', 'React Native'],
  ['Flutter / Dart', 'Java / Kotlin', 'C / C++', 'MySQL'],
  [
    'Clean Architecture',
    'Design Patterns',
    'Data Structures',
    'Algorithms',
    'RESTful APIs',
  ],
  ['GIT', 'CI/CD', 'Figma', 'JIRA'],
];
