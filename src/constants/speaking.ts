export interface SpeakingEvent {
  id: string;
  title: string;
  event: string;
  date: string;
  location: string;
  description: string;
  photos: string[];
  url?: string;
}

export const speakingEvents: SpeakingEvent[] = [
  {
    id: '3',
    title: 'Od testera manualnego do testera automatyzującego — wskazówki asesora technicznego',
    event: 'BiałQA Białystok',
    date: 'Jun 2025',
    location: 'Białystok, Poland',
    description:
      "A 1-hour presentation with tips on learning test automation and making a good impression during a job interview, from a technical assessor's standpoint.",
    photos: ['/speaking/bialqa_1.jpg', '/speaking/bialqa_2.jpg', '/speaking/bialqa_3.jpg'],
    url: 'https://www.linkedin.com/events/meetupbia-qa-317325831949703426049/',
  },
  {
    id: '1',
    title: '"Ignore Previous Instructions" czyli o testowaniu AI',
    event: 'meet.js Białystok',
    date: 'Jun 2024',
    location: 'Białystok, Poland',
    description:
      'A 1-hour long presentation on testing AI systems and using AI tools for testing in general.',
    photos: [
      '/speaking/meet.js_ai_1.jpeg',
      '/speaking/meet.js_ai_2.jpeg',
      '/speaking/meet.js_ai_3.jpeg',
    ],
    url: 'https://www.linkedin.com/events/58meet-jsbialystok7206604730624598017/',
  },
  {
    id: '2',
    title: '"Jak zwykle czerwone" - najczęstsze błędy w automatyzacji testów GUI',
    event: 'meet.js Białystok',
    date: 'Oct 2023',
    location: 'Białystok, Poland',
    description:
      'A 1-hour long presentation about the most frequent mistakes in automation of graphical user interface E2E tests.',
    photos: [
      '/speaking/meet.js_automation_1.jpg',
      '/speaking/meet.js_automation_2.jpg',
      '/speaking/meet.js_automation_3.jpg',
    ],
    url: 'https://www.linkedin.com/events/54meet-jsbia-ystok7117967533734789121/',
  },
];

export const speakingIntro = {
  title: 'Public Speaking',
  subtitle: 'Sharing Knowledge & Experience',
  description: `I'm passionate about sharing knowledge and helping others grow in their careers. 
With over 6 years of experience in public speaking through Toastmasters International and technical 
conferences, I've presented on topics ranging from test automation and AI testing to personal 
development and leadership.

My speaking journey includes delivering technical presentations at meet.js and BiałQA meetups, winning 
multiple Toastmasters speech contests, and coordinating large-scale conferences. I believe in making 
complex technical concepts accessible and engaging for diverse audiences.`,
};
