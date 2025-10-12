export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  testId: string;
  level?: 'primary' | 'secondary'; // primary = main expertise, secondary = can help depending on complexity
}

export const services: Service[] = [
  // PRIMARY EXPERTISE
  {
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Test Automation",
    description: "Expert test automation services including E2E testing, API testing, and CI/CD integration. Frameworks: Playwright, Cypress, TestCafe, Selenium with custom solutions tailored to your needs.",
    features: [
      "End-to-End Test Suites", 
      "API & Integration Testing", 
      "Performance & Load Testing", 
      "Test Strategy & Framework Design"
    ],
    testId: "service-testing",
    level: "primary"
  },
  {
    icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
    title: "Public Speaking",
    description: "Engaging presentations and workshops on technical topics, leadership, and personal development. From IT meetups to corporate events and conferences—tailored to your audience.",
    features: [
      "Technical Conference Talks", 
      "Corporate Training Workshops", 
      "Leadership & Soft Skills Sessions", 
      "Custom Presentation Development"
    ],
    testId: "service-speaking",
    level: "primary"
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Consulting & Training",
    description: "Technical consulting, team training, and code reviews. Helping teams improve testing practices, adopt modern development workflows, and build quality into their process.",
    features: [
      "Testing Strategy & Best Practices", 
      "Team Technical Training", 
      "Code Quality Reviews", 
      "Technical Assessment Services"
    ],
    testId: "service-consulting",
    level: "primary"
  },
  
  {
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    title: "Software Development",
    description: "Professional websites and web applications built with modern technologies. This very website is an example of my work—fully responsive, performant, and tailored to your needs. Specialized in React, Next.js, TypeScript with quality and testing at the core.",
    features: [
      "Professional Portfolio Websites", 
      "React & Next.js Applications", 
      "TypeScript & Python Projects", 
      "Responsive & Performance-Optimized"
    ],
    testId: "service-web-dev",
    level: "primary"
  },
  
  // ADDITIONAL AREAS (depending on complexity)
  {
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    title: "DevOps & Cloud",
    description: "I can help depending on project complexity. CI/CD pipelines, containerization, and cloud infrastructure: Docker, Kubernetes, AWS, Azure, Terraform—automating deployments and ensuring reliability.",
    features: [
      "CI/CD Pipeline Implementation", 
      "Docker & Kubernetes Setup", 
      "Infrastructure as Code (Terraform)", 
      "AWS & Azure Cloud Architecture"
    ],
    testId: "service-devops",
    level: "secondary"
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "AI & Automation",
    description: "I can help depending on project complexity. Testing AI systems, implementing AI-powered tools, and exploring automation possibilities. Practical AI integration for testing and development workflows.",
    features: [
      "AI System Testing Strategies", 
      "AI-Assisted Test Generation", 
      "Automation Tool Integration", 
      "AI API Integration & Testing"
    ],
    testId: "service-ai",
    level: "secondary"
  }
];

export interface Stat {
  value: string;
  label: string;
  delay: string;
}

export const stats: Stat[] = [
  { value: '10+', label: 'Companies Collaborated', delay: '0ms' },
  { value: '80+', label: 'Technical Assessments', delay: '100ms' },
  { value: '50+', label: 'Toastmasters Speeches', delay: '200ms' },
  { value: '3+', label: 'IT Meetup Talks', delay: '300ms' },
  { value: '5+', label: 'Mentees Guided', delay: '400ms' }
];
