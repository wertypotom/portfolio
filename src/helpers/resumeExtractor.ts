export const extractResumeText = async (pdfPath: string): Promise<string> => {
  // For now, return a hardcoded version of your resume text
  // Later you can implement PDF parsing if needed
  return `
Andrey Povstyanko
Milwaukee, WI / Email: andrey.povstyanko.00@gmail.com / Phone: +1 414-324-2621 / GitHub / LinkedIn
Senior Software Engineer  
Available for full-time, W-2 employment, Willing to relocate

SUMMARY:
Senior Frontend Engineer with 5 years of experience building scalable web applications across frontend and backend. Proven success in fast-paced startups and structured Agile environments, delivering solutions in the legal and consulting domains. Specialized in modern Single Page Applications (SPA) with SSR capabilities using React, Next.js, and TypeScript. Proficient with Node.js frameworks, SQL/NoSQL databases, and cloud-ready architectures. Collaborative team player with strong communication skills and a proactive mindset, driving clarity and alignment across cross-functional teams.

●	Languages: JavaScript, TypeScript, SQL, NoSQL, HTML5, CSS3
●	Frontend: React, Next.js, Redux, Overmind, MobX, Zustand, Effector, Styled Components, MUI, Ant Design, Tailwind, Sass, TanStack Query
●	Backend: Node.js, Express
●	Databases: MySQL, PostgreSQL
●	Testing: Jest, React Testing Library, Cypress, Playwright
●	DevOps & Cloud: Vite, Webpack, Docker, CI/CD, ESLint, AWS (EC2, S3, CloudFront, VPC, Load Balancer, IAM, Monitoring)
●	Tools & Design: Git, GitHub, GitLab, Figma
●	AI-Assisted Development Tools: ChatGPT, Claude, GitHub Copilot
●	Technologies: SPA, WCAG and a11y, REST, GraphQL, Responsive design, Performance optimization, Cross-browser compatibility, Feature flags

PROFESSIONAL EXPERIENCE:

BRAINEX
Client: M-Files, a Finnish tech company providing innovative information management software that utilizes metadata for efficient data organization and automation
Jan 2023 – Jan 2025, Kazakhstan — Remote
	
Full Stack Developer                                                                  
Contributed to an internal marketing automation tool (MVP) and a multi-tenant SaaS platform. Took ownership of core frontend architecture, testing, and performance improvements using React, Next.js (SSR), Node.js, and TypeScript.
●	Developed an internal marketing tool from scratch, using Next.js, Node.js, and TypeScript, achieving a fully functional MVP in 4 months that reduced client processing time by 600%.
●	Optimized performance-critical modules, using JavaScript, Styled Components, and Web Performance techniques, achieving a 30% reduction in bundle size and page load times.
●	Migrated a legacy React frontend from JavaScript to TypeScript, using ESLint and React Testing Library, reducing runtime bugs by 35% and improving code maintainability.
●	Migrated over 100 UI components using Ant Design and Styled Components to align with a new design system, completing the transition in under 4 weeks while preserving UX and accessibility.
●	Built and maintained 48+ end-to-end tests using Playwright, achieving 80% test coverage and improving release stability across critical user flows.
●	Implemented dynamic localization using i18next, made the application language-agnostic, and reduced future language integration effort by 90%.
●	Implemented WCAG-compliant accessibility, enabling full keyboard navigation, screen reader support, and raising Lighthouse score from 65 to 90+.

Technologies Used: JavaScript, TypeScript, HTML5, CSS3, React.js, Next.js, Node.js, MongoDB, REST APIs, Styled Components, SASS, Ant Design, Overmind.js, Flux, Git, GitLab, Jest, React Testing Library, Cypress, Figma.

AVERO 
B2B SaaS Platform for Legal and Government Clients
February 2020 – December 2022, Kazakhstan — Remote

Frontend Developer
Progressed from junior to mid-level role while working on a B2B SaaS platform for legal and government clients. Led frontend automation, UI modernization, and testing using React, TypeScript, Redux and Cypress.	        
●	Architected centralized state management using Redux Toolkit and RTK Query, resolving 15+ data storage related bugs and improving app scalability and maintainability.
●	Migrated 70+ UI components from an outdated Material Design system to modern MUI and Storybook, improving visual consistency, accessibility, and long-term maintainability.
●	Optimized React app performance by introducing lazy loading and refactoring re-renders, reducing initial page load time by 40% and improving Core Web Vitals.
●	Architected 5+ automation features in a government system using React and Node.js, cutting processing time for key tasks by 85%.
●	Refactored security-critical React modules, resolving 5+ vulnerabilities and ensuring zero critical issues in subsequent security reviews.
●	Coached junior developers through weekly code reviews, improving adherence to best practices and reducing pull request defects by 25%.

Technologies Used: JavaScript, TypeScript, HTML5, CSS3, React.js, Redux.js, Flux, MUI, REST APIs, React Testing Library, Jest, Git, GitHub.
ACADEMIC PROJECTS
●	Cloud Deployment Architectures — Engineered and deployed a full-stack React/Node.js application on AWS using two approaches:
1.	Serverless stack with Lambda, API Gateway, Cognito, DynamoDB, CloudFront, and S3, including a CI/CD pipeline for automated builds.
2.	VPC-based stack with EC2 instances, Application Load Balancer, NAT Gateway, route tables, and target groups for high availability and scalability.

●	AI-Powered Git Workflow Automation — Automated commit and pull request generation by integrating OpenAI with Git workflows. Standardized commit messages for every code change and generated meaningful pull request summaries, improving developer productivity, review quality, and team-wide consistency.

EDUCATION:

Maharishi International University	2025 – 2027
Master’s in Computer Science

NAZARBAYEV UNIVERSITY								     		      2019 – 2023
Bachelor in Biological Science
`
}
