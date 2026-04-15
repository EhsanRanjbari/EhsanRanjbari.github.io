export type Experience = {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
  groups?: { title: string; bullets: string[] }[]
}

export type Education = {
  degree: string
  institution: string
  period: string
  bullets: string[]
}

export type Volunteering = {
  title: string
  period: string
  description?: string
  bullets: string[]
}

export type Publication = {
  citation: string
  venue: string
  year: string
  link?: string
}

export const profile = {
  name: "Ehsan Ranjbari",
  title: "Robotics and Software Engineer",
  tagline:
    "Building digital twins, navigation stacks, and humanoid teleoperation systems — bridging the gap between simulation and the real world.",
  location: "Luxembourg",
  email: "e.ranjbariel@gmail.com",
  phone: "+352 661 181 286",
  github: "https://github.com/EhsanRanjbari",
  linkedin: "https://www.linkedin.com/in/ehsanranjbari/",
}

export const experience: Experience[] = [
  {
    role: "Robotics and Software Engineer",
    company: "R3 Robotics",
    location: "Luxembourg",
    period: "Nov 2025 – Present",
    bullets: [
      "Driving the continuous improvement of the digital twin system to enhance simulation fidelity and real-world alignment.",
      "Designing and implementing new features for the automated battery disassembly pipeline, contributing to a safer and more efficient end-of-life battery processing workflow.",
      "Developing and maintaining KUKA robot programs to ensure reliable and precise execution of industrial disassembly tasks.",
    ],
  },
  {
    role: "Robotics and Software Engineer",
    company: "SolarCleano",
    location: "Luxembourg",
    period: "Sep 2024 – Oct 2025",
    bullets: [
      "Collaborated with the Autonomous Team to develop the navigation system for the B1A robot.",
      "Developed robust controllers to optimize the robot's navigation and operational efficiency in dynamic environments.",
      "Implemented advanced SLAM (Simultaneous Localization and Mapping) algorithms.",
      "Designed and implemented user-friendly UI features using React, ensuring responsive and intuitive interactions.",
      "Developed robust backend APIs and business logic using Express, supporting efficient data handling and client-server communication.",
    ],
  },
  {
    role: "Robotics and Software Engineer",
    company: "Istituto Italiano di Tecnologia",
    location: "Genoa, Italy",
    period: "Mar 2022 – Sep 2024",
    bullets: [],
    groups: [
      {
        title: "WorkFar Robotics Project",
        bullets: [
          "Collaborated with WorkFar Robotics (USA) to enable full teleoperation by integrating their robot into the Gazebo simulation environment.",
          "Conducted extensive modifications to the URDF model and implemented Gazebo plugins to ensure seamless operation within the simulation environment.",
        ],
      },
      {
        title: "The ergoCub Project",
        bullets: [
          "Developed a C++ driver for the WEART TouchDiver and Manus Quantum haptic gloves, facilitating integration with the ergoCub humanoid avatar system.",
          "Devised an algorithm for tracking hand motions using wearable gloves as part of the master's thesis.",
          "Contributed to the ongoing enhancement and maintenance of code for the ergoCub humanoid avatar system.",
        ],
      },
    ],
  },
  {
    role: "Foreign Procurement Specialist",
    company: "Sobh Parlar Asia Industrial Co.",
    location: "Tabriz, Iran",
    period: "Sep 2018 – Jan 2019",
    bullets: [
      "Sourced electronic components from international markets to fulfill project requirements.",
      "Cooperated with the R&D department to assess the quality of procured components.",
      "Performed initial duties related to customs procedures.",
    ],
  },
  {
    role: "Control Engineering Intern",
    company: "Tabriz Petrochemical Company",
    location: "Tabriz, Iran",
    period: "Jun 2017 – Aug 2017",
    bullets: [
      "Fulfilled internship responsibilities within the Measurement and Instrumentation Maintenance Unit.",
      "Gained exposure to the field of project management.",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "University of Tabriz",
    location: "Tabriz, Iran",
    period: "Dec 2017 – Jul 2019",
    bullets: [
      "Served as teaching assistant for the Fundamentals of Robotics course.",
      "Instructed students on the utilization of the Peter Corke Robotics Toolbox for MATLAB.",
      "Managed project assignments and evaluations for more than 50 students across two semesters.",
    ],
  },
]

export const education: Education[] = [
  {
    degree: "Master's Degree in Control Engineering",
    institution: "Sapienza Università di Roma, Italy",
    period: "Sep 2019 – May 2023",
    bullets: [
      "Thesis: Hand Motion Retargeting for Teleoperated Grasping Tasks with a Humanoid Robot Hand.",
      "Devised a novel technique utilizing distance information to derive finger joint values.",
      "Evaluated the developed method through experimentation with the WEART Gloves wearable haptics glove.",
    ],
  },
  {
    degree: "Bachelor's Degree in Electrical – Control Engineering",
    institution: "University of Tabriz, Iran",
    period: "Sep 2014 – Jul 2018",
    bullets: [
      "Thesis: Developed an Arduino-based robot controlled via an Android mobile application.",
    ],
  },
]

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Programming Languages",
    items: ["C++", "Python", "JavaScript"],
  },
  {
    category: "Robotics",
    items: [
      "ROS / ROS2",
      "YARP",
      "SLAM",
      "Autonomous Navigation",
      "Gazebo",
      "IsaacSim",
    ],
  },
  {
    category: "Engineering",
    items: [
      "MATLAB",
      "Siemens SIMATIC Step 7",
      "KUKA Robot Programming",
      "AutoCAD Plant",
      "BIZAGI Studio",
    ],
  },
  {
    category: "Web Development",
    items: ["React", "Express"],
  },
  {
    category: "Data Science",
    items: ["Machine Learning", "PyTorch"],
  },
  {
    category: "DevOps",
    items: ["Git", "Docker", "Scrum"],
  },
  {
    category: "Operating Systems",
    items: ["Linux", "Windows", "macOS"],
  },
  {
    category: "Embedded Systems",
    items: ["Arduino"],
  },
]

export const publications: Publication[] = [
  {
    citation:
      "Elobaid, M., Dafarra, S., Ranjbari, E., Romualdi, G., Chaki, T., Kawakami, T., Yoshiike, T., Pucci, D. (2024). Robot morphology-agnostic remote telepresence over large distances: case studies. IEEE International Conference on Telepresence, June 5th, 2024.",
    venue: "IEEE International Conference on Telepresence",
    year: "2024",
    link: "https://ieeexplore.ieee.org/document/10841750",
  },
]

export const volunteering: Volunteering[] = [
  {
    title: 'Team Leader – "HERMES"',
    period: "February 2018",
    description: "Window Cleaner Robot Design for the PROBLEM Competition",
    bullets: [
      "Led a multidisciplinary team of 6 mechanical and software engineers.",
      "Ranked 15th out of 96 teams and advanced to the second round of the competition.",
    ],
  },
  {
    title: "Team Member – IoT-Based Smart City Bicycle with Smart Station",
    period: "March 2019",
    bullets: ["Secured a position in the competition finals."],
  },
]

export const academicProjects = [
  "Developed a ROS2 package for the Microsoft Kinect Depth Camera.",
  "Simulated a business process using Bizagi Studio and analyzed associated key performance indicators (KPIs).",
  "Executed 3D modeling (Piping and Instrumentation) of a representative Petrochemical Unit using AutoCAD Plant 3D.",
]

export const languages = ["English", "Azerbaijani", "Turkish", "Persian"]
