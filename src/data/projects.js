import blackDiamondImg from '../assets/Screenshot_29-3-2026_12635_blackdiamondcar.com.jpeg';

const projects = [
  {
    id: 1,
    title: 'Pneumonia Detection AI',
    description:
      'An AI-powered platform that analyzes chest X-ray images to detect pneumonia with high accuracy, assisting medical professionals in early diagnosis.',
    platform: 'AI Platform',
    thumbnail: null,
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
    liveUrl: null,
    repoUrl: null,
  },
  {
    id: 2,
    title: 'Sign Language Detection AI',
    description:
      'Real-time sign language recognition system using computer vision and deep learning to bridge communication gaps for the hearing-impaired community.',
    platform: 'AI Platform',
    thumbnail: null,
    techStack: ['Python', 'TensorFlow', 'MediaPipe', 'OpenCV'],
    liveUrl: null,
    repoUrl: 'https://github.com/yabuti/sign_language',
  },
  {
    id: 3,
    title: 'Fleet Management System',
    description:
      'A comprehensive web platform for managing vehicle fleets, tracking routes, monitoring driver performance, and optimizing logistics operations.',
    platform: 'Web Platform',
    thumbnail: null,
    techStack: ['React', 'Python', 'Django', 'PostgreSQL'],
    liveUrl: null,
    repoUrl: null,
  },
  {
    id: 4,
    title: 'Black Diamond Car Company',
    description:
      'Full-stack web and Android application for a car dealership, featuring vehicle listings, booking system, and customer management portal.',
    platform: 'Web + Android',
    thumbnail: blackDiamondImg,
    techStack: ['React', 'Flutter', 'Python', 'Django'],
    liveUrl: 'https://blackdiamondcar.com',
    repoUrl: null,
  },
];

export default projects;
