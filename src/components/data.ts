type work = {
  startDate: string
  endDate?: string
  position: string
  company: string
  companyLink: string
  description: string[]
}

export type project = {
  title: string
  description: string
  docLink?: string
  githubLink: string
  outLink?: string
}

export const experiences: work[] = [
  {
    startDate: 'October 2023',
    endDate: 'Present',
    position: 'Software Engineer Intern',
    company: 'Recruit CRM',
    companyLink: 'https://recruitcrm.io/',
    description: [
      "World's first Real Estate NER (Named Entity Recognition). Developed voice‑based real estate search which can handle contextual natural language Search ‑ \"sea facing properties in  Malad east\"",
      "Delivered the latest iteration of Blox frontend using Next.js. Incorporated a middleware (Go/BFF) for aggregating API calls and caching.",
      'Developed RASA-based chatbot which is capable of searching properties, performing actions such as site booking and answering non-domain specific questions like chat GPT ',
      'Developed a novel method to separate voices in an audio using deep feature extraction followed by k-means clustering.',
    ],
  },
  {
    startDate: 'August 2023',
    endDate: 'Present',
    position: 'Intern - C++/DS',
    company: 'Outscal',
    companyLink: 'https://outscal.com/',
    description: [
      'Contributed to gRPC backend services responsible for generating insights for compass listings. Improved test coverage of the service codebase from 10% to 86%. Currently contributing to new features to gather openhouse and email-campaign insights',
      'Developed a backend microservice to gather insights on the third party support ticketing service, which helped product team to identify the problem areas in customer support and helped the support team to reduce the resolution time by 25%.',
      'Delivered frontend features using React to enhance article search used in the compass Support and Onboarding System',
      'Worked with CRM and TM Android team and delivered crucial features such as Client Dashboard, Contact Import, Household Support which are being used by over 10 thousands compass agents',
      'Fixed over 10 production crashes during on-call duty and refactored over 5000 lines of code on the Android codebase',
    ],
  },
  {
    startDate: 'January 2024',
    endDate: 'Present',
    position: 'Problem Setter',
    company: 'DoSelect',
    companyLink: 'https://doselect.com/',
    description: [
      'Developed a pClick model to predict clickability of bing ads from global market data using Aether and Scope',
      'Studied impact of the global model on the large and small markets where the global model performed as good (less by 0.01%) as market specific models',
    ],
  },
  {
    startDate: 'January 2023',
    endDate: 'March 2023',
    position: 'Research Intern',
    company: 'Samsung Prism',
    companyLink: 'https://www.samsungprism.com/',
    description: [
      'Developed a pClick model to predict clickability of bing ads from global market data using Aether and Scope',
      'Studied impact of the global model on the large and small markets where the global model performed as good (less by 0.01%) as market specific models',
    ],
  },
]

export const projects: project[] = [
  {
    title: 'Job board',
    githubLink: 'https://github.com/ashis0013/feedback-ingestion',
    docLink:
      'https://docs.google.com/document/d/1zE1wLhNrZn8bFSIiHCW75SIGVYvzuEjvgRINzFFeRzg/edit?usp=sharing',
    description:
      'Plugable and scalable feedback ingestion system written in go. Able to pull feedbacks related to relevant tenants from different sources.',
  },
  {
    title: 'COVID detection from X-Ray',
    githubLink: 'https://github.com/ashis0013/Inverted-Bell-Curve-Ensemble',
    docLink: 'https://link.springer.com/article/10.1007/s00521-021-06737-6',
    description:
      'An ensemble of transfer learned model using a novel weighted average scheme using inverted bell curves to detect COVID from X-Ray images',
  },
  {
    title: 'gollection',
    description:
      'Functional utilites for go slices and maps implimented with go generics. Includes useful methods like map, filter etc',
    githubLink: 'https://github.com/ashis0013/gollections',
    outLink: 'https://pkg.go.dev/github.com/ashis0013/gollections',
  }
]
