export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  period: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  certificateFile?: string; // Path to PDF or image file in /public
}

export interface Skill {
  name: string;
  category: 'technical' | 'soft' | 'tools' | 'programming' | 'language';
  level?: 1 | 2 | 3; // 1 = Basic, 2 = Intermediate, 3 = Advanced
}

export interface Publication {
  id: string;
  title: string;
  event: string;
  date: string;
  description: string;
  url?: string;
}

// Professional Experience
export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Test Automation Engineer',
    company: 'Sii Poland',
    companyUrl: 'https://sii.pl/en/',
    location: 'Białystok, Podlaskie, Poland · Remote',
    period: 'Oct 2023 - Present · 2 yrs 1 mo',
    description:
      'Leading test automation initiatives, conducting technical assessments, and implementing modern E2E testing solutions. B2B cooperation.',
    achievements: [
      'Conducted 80+ technical interviews with candidates for test automation engineer positions',
      'Reviewed and improved existing test automation frameworks across multiple projects',
      'Automated end-to-end (E2E) tests using Microsoft Playwright',
      'Created and maintained E2E test CI/CD pipelines',
      'Collaborated with 10+ companies on automation strategies and best practices',
    ],
  },
  {
    id: '2',
    title: 'Senior Software Test Engineer',
    company: 'GFT Technologies',
    companyUrl: 'https://www.gft.com/',
    location: 'Białystok, Podlaskie, Poland · Remote',
    period: 'Nov 2022 - Sep 2023 · 11 mos',
    description:
      'Maintained and developed automated testing infrastructure for 15+ repositories using TestCafe, TypeScript, and BrowserStack. B2B cooperation.',
    achievements: [
      'Maintained 15+ repositories with automated tests (TestCafe + TypeScript + BrowserStack)',
      'Developed automated tests for new and existing projects',
      'Set up and adjusted CI pipelines for automated E2E tests',
      'Managed AWS infrastructure adjustments and bug fixes',
      'Analyzed documentation and requirements, created comprehensive test cases',
      'Collaborated daily with team members and clients',
    ],
  },
  {
    id: '3',
    title: 'Experienced Software Test Engineer',
    company: 'GFT Technologies',
    companyUrl: 'https://www.gft.com/',
    location: 'Białystok, Podlaskie, Poland · Remote',
    period: 'Feb 2022 - Nov 2022 · 10 mos',
    description:
      'Developed testing frameworks and implemented automated testing solutions across multiple projects. B2B cooperation.',
    achievements: [
      'Developed testing frameworks from scratch for multiple projects',
      'Implemented automated API and E2E tests, achieving 65% coverage across 4 projects',
      'Automated smoke tests for various customer products, increasing CI efficiency by ~50%',
      'Maintained and enhanced existing automated tests and frameworks',
      'Conducted code reviews and knowledge-sharing sessions',
    ],
  },
  {
    id: '4',
    title: 'Senior Quality Assurance Engineer',
    company: 'Netguru',
    companyUrl: 'https://www.netguru.com/',
    location: 'Białystok, Podlaskie, Poland · Remote',
    period: 'Sep 2021 - Feb 2022 · 6 mos',
    description:
      'Led automated testing implementation and quality assurance initiatives across multiple client projects. B2B cooperation.',
    achievements: [
      'Implemented automated API and E2E tests from scratch across 3 customer projects',
      'Reduced regression testing time by 70% through strategic test automation',
      'Planned and executed comprehensive QA processes for new feature releases',
      'Identified critical bugs during acceptance and regression testing',
    ],
  },
  {
    id: '5',
    title: 'Junior Test Automation Specialist',
    company: 'CERI International (Commerzbank AG Group)',
    companyUrl: 'https://www.ceri.pl/',
    location: 'Białystok, Podlaskie, Poland',
    period: 'Nov 2020 - Mar 2021 · 5 mos',
    description: 'Developed test automation solutions for banking systems.',
    achievements: [
      'Implemented test automation frameworks',
      'Contributed to banking software quality assurance',
    ],
  },
  {
    id: '6',
    title: 'Junior Software Tester',
    company: 'CERI International (Commerzbank AG Group)',
    companyUrl: 'https://www.ceri.pl/',
    location: 'Białystok, Podlaskie, Poland',
    period: 'May 2019 - Oct 2020 · 1 yr 6 mos',
    description:
      'Performed software testing for banking applications with German language support.',
    achievements: [
      'Executed comprehensive software testing',
      'Worked with German-language banking systems',
      'Contributed to quality assurance processes',
    ],
  },
];

// Education
export const education: Education[] = [
  {
    id: '1',
    degree: "Bachelor's degree, Economics",
    institution: 'Uniwersytet w Białymstoku (University of Białystok)',
    institutionUrl: 'https://weif.uwb.edu.pl/',
    location: 'Białystok, Poland',
    period: '',
    description:
      'Comprehensive economics education with focus on analytical and quantitative skills that later supported transition to technical roles.',
  },
];

// Certifications
export const certifications: Certification[] = [
  {
    id: '1',
    name: 'Career Essentials in Generative AI by Microsoft and LinkedIn',
    issuer: 'Microsoft',
    date: 'Apr 2024',
    credentialId: '',
    credentialUrl:
      'https://www.linkedin.com/learning/certificates/8b07e4c5d9161689b119206acaa12fb23e930df5019a02696041fbb321ded369',
  },
  {
    id: '2',
    name: "CS50 Python - Harvard University's Introduction to Programming with Python",
    issuer: 'CS50 (Harvard University)',
    date: 'Mar 2024',
    credentialId: '05789f8d-8868-4d2b-bb12-9ce14e6f8bee',
    credentialUrl: 'https://certificates.cs50.io/05789f8d-8868-4d2b-bb12-9ce14e6f8bee.pdf',
  },
  {
    id: '3',
    name: 'LambdaTest Software Testing Professional Certificate',
    issuer: 'LambdaTest',
    date: 'Mar 2024',
    credentialId: '',
    credentialUrl:
      'https://www.linkedin.com/learning/certificates/00bcdec6f3717fe494ae4cb2c187f21d199ef6477c131463f75a756e8c6e662d',
  },
  {
    id: '4',
    name: "CS50x - Harvard University's Introduction to Computer Science",
    issuer: 'CS50 (Harvard University)',
    date: 'Feb 2024',
    credentialId: '1396f58b-4d4d-44ce-a7c9-daca6e03482d',
    credentialUrl:
      'https://certificates.cs50.io/1396f58b-4d4d-44ce-a7c9-daca6e03482d.pdf?size=letter',
  },
  {
    id: '5',
    name: 'ISTQB Certified Tester – AI Testing',
    issuer: 'ISTQB® - International Software Testing Qualifications Board',
    date: 'Jan 2024',
    credentialId: 'AI-2024-00005-SJSI',
    credentialUrl: '',
    certificateFile: '/certificates/istqb-ai.pdf',
  },
  {
    id: '6',
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'Aug 2023',
    credentialId: '79C792C8FF02891B',
    credentialUrl:
      'https://learn.microsoft.com/en-us/users/hubert-niewinski/credentials/79c792c8ff02891b',
  },
  {
    id: '7',
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Jul 2023',
    credentialId: 'HHEQY1BKX1F41CSJ',
    credentialUrl: 'https://www.credly.com/badges/0282fc49-2a73-48e4-9c6c-42b0f5f05e7f',
  },
  {
    id: '8',
    name: 'Introduction to Software Testing',
    issuer: 'University of Minnesota',
    date: 'Sep 2022',
    credentialId: '',
    credentialUrl: 'https://coursera.org/share/b21c5df59e2484d3be2ccce31c9baefc',
  },
  {
    id: '9',
    name: 'Getting Started with Software Testing',
    issuer: 'LinkedIn',
    date: 'Sep 2021',
    credentialId: '',
    credentialUrl:
      'https://www.linkedin.com/learning/certificates/48f1dc67bfbdb9f93b93676908953f9c658df4409eef59f6df72154066e66b18',
  },
  {
    id: '10',
    name: 'ISTQB Certified Tester Foundation Level (CTFL)',
    issuer: 'ISTQB® - International Software Testing Qualifications Board',
    date: 'Sep 2020',
    credentialId: '15211/FLCT/2020',
    credentialUrl: '',
    certificateFile: '/certificates/istqb-foundation.jpeg',
  },
  {
    id: '11',
    name: 'Certificate of Proficiency - Effective Coaching Path',
    issuer: 'Toastmasters International',
    date: 'Apr 2020',
    credentialId: '',
    credentialUrl: '',
    certificateFile: '/certificates/toastmasters-coaching.jpeg',
  },
];

// Skills organized by category
export const skills: Skill[] = [
  // Programming Languages (sorted 3 → 1)
  { name: 'JavaScript', category: 'programming', level: 3 },
  { name: 'TypeScript', category: 'programming', level: 3 },
  { name: 'HTML/CSS', category: 'programming', level: 3 },
  { name: 'SQL', category: 'programming', level: 3 },
  { name: 'Python', category: 'programming', level: 2 },
  { name: 'Bash/Zsh', category: 'programming', level: 2 },
  { name: 'Java', category: 'programming', level: 1 },

  // Technical Skills (sorted 3 → 1)
  { name: 'Manual Testing', category: 'technical', level: 3 },
  { name: 'Test Automation', category: 'technical', level: 3 },
  { name: 'Front-End Development', category: 'technical', level: 2 },
  { name: 'DevOps', category: 'technical', level: 2 },
  { name: 'Cloud Computing', category: 'technical', level: 2 },
  { name: 'AI Utilization', category: 'technical', level: 2 },
  { name: 'Back-End Development', category: 'technical', level: 1 },

  // Tools & Technologies (sorted 3 → 1)
  { name: 'Playwright', category: 'tools', level: 3 },
  { name: 'Cypress', category: 'tools', level: 3 },
  { name: 'Git', category: 'tools', level: 3 },
  { name: 'BrowserStack', category: 'tools', level: 3 },
  { name: 'Postman', category: 'tools', level: 3 },
  { name: 'Selenium', category: 'tools', level: 2 },
  { name: 'React', category: 'tools', level: 2 },
  { name: 'Next.js', category: 'tools', level: 2 },
  { name: 'Docker', category: 'tools', level: 2 },
  { name: 'Express', category: 'tools', level: 2 },
  { name: 'Kubernetes', category: 'tools', level: 1 },
  { name: 'Terraform', category: 'tools', level: 1 },

  // Professional Skills (sorted 3 → 1)
  { name: 'Public Speaking', category: 'soft', level: 3 },
  { name: 'Technical Mentoring', category: 'soft', level: 3 },
  { name: 'Technical Assessment', category: 'soft', level: 3 },
  { name: 'Team Leadership', category: 'soft', level: 2 },

  // Languages (sorted 3 → 1)
  { name: 'Polish', category: 'language', level: 3 },
  { name: 'English', category: 'language', level: 3 },
  { name: 'German', category: 'language', level: 2 },
];

// Speaking Engagements
export interface SpeakingEngagement {
  id: string;
  title: string;
  event: string;
  date: string;
  description: string;
  topics: string[];
}

export const speakingEngagements: SpeakingEngagement[] = [
  {
    id: '1',
    title: 'Presentation Title',
    event: 'meet.js / BiałQA / Other Event',
    date: 'Month Year',
    description: 'Brief description of the talk',
    topics: ['Test Automation', 'DevOps', 'Best Practices'],
  },
  // Add more speaking engagements (you mentioned 3+ IT meetups)
];

// Toastmasters Achievements
export interface ToastmastersAchievement {
  id: string;
  title: string;
  level: string;
  date: string;
  description: string;
}

export const toastmastersAchievements: ToastmastersAchievement[] = [
  {
    id: '1',
    title: 'Club President',
    level: 'Toastmasters Białystok',
    date: 'Jul 2019 - Jun 2020',
    description:
      'Led Toastmasters Białystok club for 1 year, overseeing club operations and member development.',
  },
  {
    id: '2',
    title: 'Conference Coordinator',
    level: 'Efekt WidziMisie Białystok 2020 Conference',
    date: 'Feb 2020',
    description:
      'Coordinated one of the biggest personal development conferences in eastern Poland, featuring 30 speakers and over 200 participants from Poland, United Kingdom, Germany and other countries.',
  },
  {
    id: '3',
    title: 'Club Vice President Membership',
    level: 'Toastmasters Białystok',
    date: 'Oct 2018 - Jun 2019',
    description: 'Managed club membership growth and retention strategies for 9 months.',
  },
];

// Publications & Presentations
export const publications: Publication[] = [
  {
    id: '1',
    title: 'Od testera manualnego do testera automatyzującego — wskazówki asesora technicznego',
    event: 'BiałQA Białystok',
    date: 'Jun 12, 2025',
    description:
      "A 1-hour presentation with tips on learning test automation and making a good impression during a job interview, from a technical assessor's standpoint.",
    url: 'https://www.linkedin.com/events/meetupbia-qa-317325831949703426049/',
  },
  {
    id: '2',
    title: '"Ignore Previous Instructions" czyli o testowaniu AI',
    event: 'meet.js Białystok',
    date: 'Jun 25, 2024',
    description:
      'A 1-hour long presentation on testing AI systems and using AI tools for testing in general.',
    url: 'https://www.linkedin.com/events/58meet-jsbialystok7206604730624598017/',
  },
  {
    id: '3',
    title: '"Jak zwykle czerwone" - najczęstsze błędy w automatyzacji testów GUI',
    event: 'meet.js Białystok',
    date: 'Oct 25, 2023',
    description:
      'A 1-hour long presentation about the most frequent mistakes in automation of graphical user interface E2E tests.',
    url: 'https://www.linkedin.com/events/54meet-jsbia-ystok7117967533734789121/',
  },
];
