export const myProjects = [
  {
    id: 1,
    title: "EduMate",
    description:
      "An Tutor/educational analytics platform that enables students and teachers to upload class session and visualize academic insights through classes",
    subDescription: [
      "Built using React.js and TailwindCSS with support for role-based access (student/teacher).",
      "Excel file uploads enable pie chart and KPI analysis using Chart.js.",
      "Implemented a sleek responsive UI and deployed on Vercel.",
      "Includes login/signup and intuitive page transitions for modern UX."
    ],
    href: "https://edumate-website.vercel.app/",
    logo: "",
    image: "/assets/projects/Edumate.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" }
    ]
  },
];

export const mySocials = [
  {
    id:1,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/subham-kumar-8048052a7/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    id:2,
    name: "GitHub",
    href: "https://github.com/CSEsubham",
    icon: "/assets/socials/github-mark.svg",
  }
  
  
];

export const experiences = [
      
        {
    title: "Web Development Intern",
    job: "Embrizon Training",
    date: "Aug 2024",
    contents: [
      "Built responsive websites using HTML, CSS, JavaScript.",
      "Implemented modern UI features and mobile-first designs.",
      "Learned project collaboration and teamwork.",
    ],
},
  {
    title: "Web Development Intern",
    job: "Linkerr",
    date: "May 2025 – Present",
    contents: [
      "Developed and maintained React-based components for the buzzer project.",
      "Worked with Git branching strategy (e.g., `intern/subham`) and collaborative development.",
      "Enhanced the UI with TailwindCSS and responsive design.",
      "Handled Git conflicts, rebasing, and debugging deployment issues.",
    ],
  }
];
  


export const reviews = [
 
  {
    name: "Gayatri College Peer",
    username: "@cse_peer",
    body: "Subham helped me debug and deploy my website. He’s great at explaining technical concepts clearly.",
    img: "https://robohash.org/peer",
  },
  {
    name: "Team Linkerr",
    username: "@linkerr_team",
    body: "Fast learner. His contribution to the frontend was valuable to our project deadlines.",
    img: "https://robohash.org/linkerr",
  },
];
