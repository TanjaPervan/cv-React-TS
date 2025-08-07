export type SkillGroup = string;

export interface ExperienceItem {
  title: string;
  company: string;
  dates: string;
}

export interface EducationItem {
  title: string;
  degree: string;
  school: string;
}

export interface TabData {
  skills: SkillGroup[][];
  experience: ExperienceItem[];
  education: EducationItem[];
}
