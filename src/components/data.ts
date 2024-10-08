export type project = {
  title: string
  githubLink: string
  description: string[]
  techStack: string[]
}

export const projects: project[] = [
  {
    title: 'Task Scheduler',
    githubLink: 'https://github.com/sagnik6969/task_scheduler_backend',
    description: [
      'A task scheduler application that lets managers create tasks with detailed information such as title, description, deadline, and priority.',
      'Implemented email verification and notification features to enhance communication and providing timely updates on task changes.',
      'Designed intuitive dashboards for users and admins, streamlining task management and providing comprehensive oversight and control.',
      'Integrated Kanban board-like functionality for task organization, facilitating workflow management through drag-and-drop features.',
    ],
    techStack: ['Vue.js', 'PHP', 'Laravel', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'URL Shortener',
    githubLink: 'https://github.com/sameertrip123/url-shortener',
    description: [
      'Developed a URL shortening application enabling users to convert lengthy URLs into shorter, more manageable links.',
      'Implemented Redis for efficient storage and management of URL mappings, ensuring rapid access and scalability.',
      'Engineered robust URL validation during the shortening process, enhancing security and usability.',
      'Integrated rate limiting functionality to prevent abuse by malicious users, ensuring the stability and integrity of the system.',
    ],
    techStack: ['Go', 'Fiber', 'Redis'],
  },
  {
    title: 'Job Board',
    githubLink: 'https://github.com/sameertrip123/job-board',
    description: [
      'A web app that lets user to search and apply to job openings based on their experience, location and salary.',
      'Implemented job search functionality, allowing users to filter job listings based on skills, salary, experience, location, and title, enhancing the user experience and helping them find relevant opportunities.',
      'Developed a user-centric platform where job seekers can create accounts, sign in, and apply for jobs using their resumes.',
      'Developed a dedicated Applied Jobs section for users to track and manage their applications with the added functionality to withdraw applications.',
    ],
    techStack: ['Vue.js', 'PHP', 'Laravel', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'Distributed Cache',
    githubLink: '',
    description: [
      'Developments are ongoing for this project. There are some issues with it, will update on the website once everything is fixed and completed.',
    ],
    techStack: ['Go'],
  },
]

type work = {
  startDate: string
  endDate?: string
  position: string
  company: string
  companyLink: string
  description: string[]
}

export const experiences: work[] = [
  {
    startDate: 'July 2023',
    endDate: 'Present',
    position: 'Software Engineer - Backend',
    company: '1Bee.ai',
    companyLink: 'https://1bee.ai/',
    description: [
      'Developed and maintained RESTful APIs for the company’s core product, a platform for AI-driven customer service automation.'
    ],
  },
  {
    startDate: 'October 2023',
    endDate: 'June 2024',
    position: 'Software Engineer Intern',
    company: 'Recruit CRM',
    companyLink: 'https://recruitcrm.io/',
    description: [
      'Revamped the candidates module, migrating the tech stack from PHP to Java, Spring Boot, Microservices and SOA, yielding a performance boost of 57.58%',
      'Conducted analysis for 14 different existing endpoints, contributed to high-level and low-level design, developed new endpoints, and documented the entire process on Confluence.',
      'Wrote unit tests for the new endpoints using JUnit and Mockito, ensuring 100% code coverage.',
    ],
  },
  {
    startDate: 'August 2023',
    endDate: 'Present',
    position: 'Intern - C++/DS',
    company: 'Outscal',
    companyLink: 'https://outscal.com/',
    description: [
      'Conducted daily code reviews and provided timely feedback on C++, Data Structures, and Object-Oriented Programming assignments, resulting in a 20% acceleration of student progress within a two-month period.',
      'Addressed queries promptly, ensuring the satisfaction of over 20 students and fostering a supportive learning environment.',
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
    ],
  },
  {
    startDate: 'January 2023',
    endDate: 'March 2023',
    position: 'Research Intern',
    company: 'Samsung Prism',
    companyLink: 'https://www.samsungprism.com/',
    description: [
      'Contributed to the design and enhancement of an IoT service designed to periodically scan for the optimal access point in the background.',
      'Utilized QoS parameters to achieve latency of less than 300 millisecond, resulting in an improved experience.',
    ],
  },
]
