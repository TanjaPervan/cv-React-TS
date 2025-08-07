import workImg1 from '../../assets/images/work-1.png';
import workImg2 from '../../assets/images/work-2.png';
import workImg3 from '../../assets/images/work-3.png';
import type { WorkItem } from './workTypes';

export const workItems: WorkItem[] = [
  {
    id: 1,
    title: 'Movie App',
    image: workImg1,
    description: [
      'Building UI',
      'Creating widgets and screens',
      'Clean code and pixel-perfect design',
    ],
    link: '#',
  },
  {
    id: 2,
    title: 'Vehicle Marketplace',
    image: workImg2,
    description: [
      'US vehicle sales app',
      'Fixing and optimizing code',
      'Preparing for release',
    ],
    link: '#',
  },
  {
    id: 3,
    title: 'Healthy Lifestyle App',
    image: workImg3,
    description: [
      'UK Launch',
      'New features',
      'Integration with Fitbit and Apple Watch',
    ],
    link: '#',
  },
];
