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
      'Developed and maintained Single Page Applications (SPAs) using PHP, Laravel, HTML, CSS, JavaScript and Vue.js, ensuring robust and responsive user interfaces',
      'Utilized REST APIs for seamless communication between frontend and backend systems, ensuring efficient data exchange and application functionality.',
      'Applied Test-Driven Development (TDD) principles to ensure the reliability and functionality of codebase components',
    ],
  },
  {
    startDate: 'August 2023',
    endDate: 'Present',
    position: 'Intern - C++/DS',
    company: 'Outscal',
    companyLink: 'https://outscal.com/',
    description: [
      'Conducted daily code reviews and provided timely feedback on C++, Data Structures, and Object-Oriented Programming assignments, resulting in a 20% acceleration of student progress within a two-month period',
      'Addressed queries promptly, ensuring the satisfaction of over 20 students and fostering a supportive learning environment.',
      'Adapted teaching methods based on student needs, contributing to ongoing improvement in performance and understanding.',
    ],
  },
  {
    startDate: 'January 2024',
    endDate: 'Present',
    position: 'Problem Setter',
    company: 'DoSelect',
    companyLink: 'https://doselect.com/',
    description: [
      'Collaborated with team members to develop coding problems and multiple-choice questions (MCQs) primarily centered on Data Structures and Algorithms for use in hiring assessments and online tests.',
      'Improved the problem-solving experience by enhancing the clarity of existing problem statements, introducing comprehensive test cases covering edge cases, addressing problem constraints, adding code stubs, and creating editorials for problems.',
      'Worked closely with team members to ensure the quality and relevance of the assessment content, facilitating an effective evaluation process for candidates.',
      'Contributed to the creation of a robust assessment framework by refining existing problems and developing new ones, aligning them with the desired skill sets and competencies sought by hiring organizations.',
    ],
  },
  {
    startDate: 'January 2023',
    endDate: 'March 2023',
    position: 'Research Intern',
    company: 'Samsung Prism',
    companyLink: 'https://www.samsungprism.com/',
    description: [
      'Contributed to the design and enhancement of an IoT service designed to periodically scan for the optimal access point in the background, seamlessly connecting to the most reliable option within the network.',
      'Utilized QoS parameters to achieve latency of less than 300 millisecond, resulting in an improved experience.',
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
      'A web app that lets user to search and apply to job openings based on their experience, location and salary',
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
  },
]
