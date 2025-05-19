import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa'
import { BiLogoJavascript } from 'react-icons/bi'
import { SiExcpress, SiMongodb, SiMysql, SiWebpack } from 'react-icons/si'
import {
  VscVscode,
  VscCommentUnresolved,
  VscTerminalPowershell,
} from 'react-icons/vsc'
import { FaGitAlt, FaXTwitter, FaDribbble } from 'react-icons/fa6'
import { MdGroups3 } from 'react-icons/md'

import PROJECT_IMG_1 from '../assets/images/project-1.png'

export const MENU_LINK = [
  { id: '01', label: 'Home', offset: -100, to: 'hero' },
  { id: '02', label: 'Skills', offset: -80, to: 'skills' },
  { id: '03', label: 'About Me', offset: -80, to: 'about' },
  { id: '04', label: 'Projects', offset: -80, to: 'projects' },
  { id: '05', label: 'Contact', offset: -80, to: 'contact' },
]

export const STATS = [
  { id: '01', count: 10, label: 'Years of \nExperience' },
  { id: '02', count: 12, label: 'Certifications \nEarned' },
  { id: '03', count: 43, label: 'Projects \nCompleted' },
  { id: '04', count: 37, label: 'Happy \nClients' },
]

export const SKILLS_TABS = [
  { id: '01', label: 'All', value: 'all' },
  { id: '02', label: 'Frontend', value: 'frontend' },
  { id: '03', label: 'Backend', value: 'backend' },
  { id: '04', label: 'Tools', value: 'tools' },
  { id: '05', label: 'Skills', value: 'soft-skills' },
]

export const SKILLS = [
  {
    id: '01',
    icon: FaReact,
    skill: 'React JS',
    progress: 95,
    type: 'frontend',
    description:
      'I have extensive experience in React JS, having worked on numerous projects that utilize its component-based architecture and state management capabilities. I am proficient in using React Router for navigation and have a strong understanding of hooks, context API, and Redux for state management. My experience includes building responsive and user-friendly interfaces, optimizing performance, and implementing best practices for code quality and maintainability.',
  },
  {
    id: '02',
    icon: FaHtml5,
    skill: 'HTML5',
    progress: 95,
    type: 'frontend',
    description:
      'I have a strong command of HTML5, which I have used extensively in my web development projects. I am proficient in creating semantic and accessible markup, utilizing new HTML5 features such as audio and video elements, and implementing best practices for SEO and performance. My experience includes building responsive layouts with HTML5 and CSS3, ensuring cross-browser compatibility, and optimizing code for maintainability.',
  },
  {
    id: '03',
    icon: FaCss3,
    skill: 'CSS3',
    progress: 90,
    type: 'frontend',
    description: 
      'I have a strong command of CSS3, which I have used extensively in my web development projects. I am proficient in creating responsive and visually appealing layouts using Flexbox and Grid, as well as implementing animations and transitions to enhance user experience. My experience includes working with preprocessors like SASS and LESS, ensuring cross-browser compatibility, and optimizing CSS for performance and maintainability.',
  },
  {
    id: '04',
    icon: BiLogoJavascript,
    skill: 'JavaScript',
    progress: 90,
    type: 'frontend',
    description:
      'I have a strong command of JavaScript, which I have used extensively in my web development projects. I am proficient in ES6+ features, including arrow functions, destructuring, and async/await. My experience includes building interactive web applications using JavaScript frameworks like React and Vue, as well as implementing best practices for code quality and performance optimization.',
  },
  {
    id: '05',
    icon: FaNodeJs,
    skill: 'Node JS',
    progress: 85,
    type: 'backend',
    description:
      'I have a strong command of Node.js, which I have used extensively in my backend development projects. I am proficient in building RESTful APIs and microservices using Express.js, as well as working with databases like MongoDB and MySQL. My experience includes implementing authentication and authorization, optimizing performance, and ensuring security best practices in Node.js applications.',
  },
  {
    id: '06',
    icon: SiExcpress,
    skill: 'Express JS',
    progress: 85,
    type: 'backend',
    description:
      'I have a strong command of Express.js, which I have used extensively in my backend development projects. I am proficient in building RESTful APIs and web applications using Express.js middleware, routing, and templating engines. My experience includes implementing authentication and authorization, optimizing performance, and ensuring security best practices in Express.js applications.',
  },
  {
    id: '07',
    icon: SiMongodb,
    skill: 'MongoDB',
    progress: 80,
    type: 'backend',
    description:
      'I have a strong command of MongoDB, which I have used extensively in my database management projects. I am proficient in designing and implementing NoSQL databases using MongoDB, including data modeling, indexing, and aggregation. My experience includes building RESTful APIs that interact with MongoDB databases, optimizing performance, and ensuring data integrity and security.',
  },
  {
    id: '08',
    icon: SiMysql,
    skill: 'MySQL',
    progress: 80,
    type: 'backend',
    description:
      'I have a strong command of MySQL, which I have used extensively in my database management projects. I am proficient in designing and implementing relational databases using MySQL, including data modeling, indexing, and query optimization. My experience includes building RESTful APIs that interact with MySQL databases, ensuring data integrity and security, and optimizing performance for large datasets.',
  },
  {
    id: '09',
    icon: SiWebpack,
    skill: 'Webpack',
    progress: 80,
    type: 'tools',
    description:
      'I have a strong command of Webpack, which I have used extensively in my frontend development projects. I am proficient in configuring Webpack for module bundling, code splitting, and optimizing performance. My experience includes using Webpack with various loaders and plugins to enhance development workflows, as well as integrating it with frameworks like React and Vue.',
  },
  {
    id: '10',
    icon: VscVscode,
    skill: 'VS Code',
    progress: 90,
    type: 'tools',
    description:
      'I have a strong command of Visual Studio Code (VS Code), which I have used extensively as my primary code editor. I am proficient in utilizing its features such as IntelliSense, debugging, and version control integration. My experience includes customizing VS Code with extensions and themes to enhance productivity and streamline my development workflow.',
  },
  {
    id: '11',
    icon: FaGitAlt,
    skill: 'Git & GitHub',
    progress: 90,
    type: 'tools',
    description:
      'I have a strong command of Git and GitHub, which I have used extensively for version control and collaboration on software projects. I am proficient in using Git commands for branching, merging, and resolving conflicts, as well as utilizing GitHub features such as pull requests, issues, and project boards. My experience includes collaborating with teams on open-source projects and managing repositories effectively.',
  },
  {
    id: '12',
    icon: VscTerminalPowershell,
    skill: 'Terminal / CMD',
    progress: 85,
    type: 'tools',
    description:
      'I have a strong command of using the terminal (CMD) for various tasks in my development workflow. I am proficient in navigating file systems, executing commands, and managing processes using command-line tools. My experience includes using the terminal for version control with Git, running build scripts, and automating tasks with shell scripting.',
  },
  {
    id: '13',
    icon: MdGroups3,
    skill: 'Teamwork',
    progress: 90,
    type: 'soft-skills',
    description:
      'I have a strong command of teamwork and collaboration, which I have developed through my experience working in various team environments. I am proficient in communicating effectively with team members, sharing ideas, and providing constructive feedback. My experience includes collaborating on projects using Agile methodologies, participating in code reviews, and contributing to a positive team culture.',
  },
  {
    id: '14',
    icon: VscCommentUnresolved,
    skill: 'Problem Solving',
    progress: 90,
    type: 'soft-skills',
    description:
      'I have a strong command of problem-solving skills, which I have developed through my experience in software development. I am proficient in analyzing complex problems, breaking them down into manageable components, and implementing effective solutions. My experience includes debugging code, optimizing performance, and applying critical thinking to overcome challenges in projects.',
  },
]

export const ABOUT_ME = {
  content: `I'm a passionate web developer with a strong foundation in both frontend and backend technologies. I have a keen eye for detail and a commitment to delivering high-quality, user-friendly applications. My experience includes working with various frameworks and libraries, as well as collaborating with cross-functional teams to bring projects to life. I am always eager to learn new skills and stay updated with the latest industry trends.`,
  socialLinks: [
    { id: '01', label:'Facebook' ,icon: FaFacebook, link: 'https://www.facebook.com/' },
    { id: '02', label: 'Instagram' ,icon: FaInstagram, link: 'https://www.instagram.com/' },
    { id: '03', label: 'Twitter' ,icon: FaLinkedin, link: 'https://www.linkedin.com/' },
    { id: '04', label: 'LinkedIn' ,icon: FaXTwitter, link: 'https://twitter.com/' },
    { id: '05', label: 'Dribble',icon: FaDribbble, link: 'https://dribbble.com/' },
  ],
  email: 'test@mail.com',
  phone: '+1 234 567 890',
  website: 'https://www.example.com',
}

export const PROJECTS = [
  {
    id: 1,
    title: 'Project 1',
    image: PROJECT_IMG_1,
    tags: ['React', 'Express.js', 'MongoDB', 'Node.js'],
  },
  {
    id: 2,
    title: 'Project 2',
    image: PROJECT_IMG_1,
    tags: ['React', 'HTML', 'CSS'],
  },
  {
    id: 3,
    title: 'Project 3',
    image: PROJECT_IMG_1,
    tags: ['JavaScript', 'Node.js', 'Express.js'],
  },
  {
    id: 4,
    title: 'Project 4',
    image: PROJECT_IMG_1,
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 5,
    title: 'Project 5',
    image: PROJECT_IMG_1,
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 6,
    title: 'Project 6',
    image: PROJECT_IMG_1,
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
]