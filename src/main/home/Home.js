import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { Page } from "../../common/page/Page";

const experience = [
  {
    role: "Forward Deployed Software Engineer",
    company: "Palantir",
    period: "Nov 2024 – Present",
    description:
      "Working directly with customers to deploy AI-powered data integration and analytics platforms into production environments. Building systems that transform raw data into actionable intelligence through custom integrations, real-time pipelines, and ML-driven workflows. Collaborating with cross-functional teams to solve complex technical challenges and deliver mission-critical software solutions.",
    link: "https://www.palantir.com/",
  },
  {
    role: "Teaching Assistant",
    company: "UC Berkeley",
    period: "Jan 2022 – May 2024",
    description:
      "Led labs and discussions for CS 61B (Data Structures, 5 semesters) and CS 61C (Computer Architecture, 1 semester). Responsibilities included:\n\n• Designing and building course projects and assignments used by 1,500+ students\n• Holding 6+ hours of office hours per week to provide individualized student support\n• Coordinating exam logistics and grading for courses with 1,000+ enrolled students\n• Mentoring students through fundamental computer science concepts including data structures, algorithms, assembly programming, and computer architecture\n• Developing course infrastructure and tooling to improve the student learning experience",
    link: "https://eecs.berkeley.edu/cs/",
  },
  {
    role: "Software Engineering Intern",
    company: "Capital One",
    period: "Jun 2022 – Aug 2022",
    description:
      "Shipped production features across web and backend services with a focus on reliability and developer experience:\n\n• Built customer-facing banking features using React, TypeScript, Node.js, and AWS\n• Implemented comprehensive test suites and monitoring dashboards to ensure system reliability\n• Collaborated with senior engineers to design scalable API architectures\n• Participated in code reviews and contributed to team best practices\n• Improved developer ergonomics through tooling and documentation enhancements",
    link: "https://www.capitalone.com/",
  },
  {
    role: "Android Engineer",
    company: "Berkeley Mobile",
    period: "Sep 2020 – May 2022",
    description:
      "Built and maintained mobile features in Kotlin for Berkeley's official campus app used by thousands of students daily:\n\n• Developed navigation, dining, and library systems to help students find campus resources\n• Implemented real-time data synchronization and offline-first architecture\n• Collaborated with designers and product managers to improve user experience\n• Conducted code reviews and mentored new team members\n• Reduced app crash rate by 40% through systematic debugging and testing",
    link: "https://asuc.org/berkeley-mobile/",
  },
];

const books = [
  {
    title: "The Signal and the Noise: Why So Many Predictions Fail—But Some Don't",
    author: "Nate Silver",
    link: "https://www.goodreads.com/book/show/13588394-the-signal-and-the-noise",
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    link: "https://www.goodreads.com/book/show/10127019-the-lean-startup",
  },
  {
    title: "The Blame Game",
    author: "Ben Dattner & Darren Dahl",
    link: "https://www.goodreads.com/book/show/9126253-the-blame-game",
  },
  {
    title: "Scale",
    author: "Geoffrey West",
    link: "https://www.goodreads.com/book/show/31670196-scale",
  },
];

const coursework = [
  {
    term: "Spring 2024",
    courses: [
      { code: "COMPSCI 168", title: "Introduction to the Internet: Architecture and Protocols", link: "https://classes.berkeley.edu/content/2024-spring-compsci-168-001-lec-001" },
      { code: "COMPSCI 184", title: "Foundations of Computer Graphics", link: "https://classes.berkeley.edu/content/2024-spring-compsci-184-001-lec-001" },
    ],
  },
  {
    term: "Fall 2023",
    courses: [
      { code: "COMPSCI C191", title: "Introduction to Quantum Computing", link: "https://classes.berkeley.edu/content/2023-fall-compsci-c191-001-lec-001" },
      { code: "ECON C110", title: "Game Theory in the Social Sciences", link: "https://classes.berkeley.edu/content/2023-fall-econ-c110-001-lec-001" },
      { code: "MUSIC 30", title: "Computational Creativity for Music and the Arts", link: "https://classes.berkeley.edu/content/2023-fall-music-30-1-lec-1" },
    ],
  },
  {
    term: "Spring 2023",
    courses: [
      { code: "COMPSCI 162", title: "Operating Systems and System Programming", link: "https://classes.berkeley.edu/content/2023-spring-compsci-162-001-lec-001" },
      { code: "COMPSCI 195", title: "Social Implications of Computer Technology", link: "https://classes.berkeley.edu/content/2023-spring-compsci-195-001-lec-001" },
      { code: "HUM 120", title: "Entrepreneurship for All: An Insiders' Guide to Startups", link: "https://classes.berkeley.edu/content/2023-spring-hum-120-001-lec-001" },
      { code: "UGBA 105", title: "Leading People", link: "https://classes.berkeley.edu/content/2023-spring-ugba-105-001-lec-001" },
    ],
  },
  {
    term: "Fall 2022",
    courses: [
      { code: "COMPSCI 161", title: "Computer Security", link: "https://classes.berkeley.edu/content/2022-fall-compsci-161-001-lec-001" },
      { code: "COMPSCI 170", title: "Efficient Algorithms and Intractable Problems", link: "https://classes.berkeley.edu/content/2022-fall-compsci-170-001-lec-001" },
      { code: "LINGUIS 100", title: "Introduction to Linguistic Science", link: "https://classes.berkeley.edu/content/2022-fall-linguis-100-001-lec-001" },
    ],
  },
  {
    term: "Spring 2022",
    courses: [
      { code: "COMPSCI 186", title: "Introduction to Database Systems", link: "https://classes.berkeley.edu/content/2022-spring-compsci-186-001-lec-001" },
      { code: "COMPSCI 188", title: "Introduction to Artificial Intelligence", link: "https://classes.berkeley.edu/content/2022-spring-compsci-188-001-lec-001" },
      { code: "COMPSCI 375", title: "Teaching Techniques for Computer Science", link: "https://classes.berkeley.edu/content/2022-spring-compsci-375-001-dis-001" },
      { code: "ELENG 120", title: "Signals and Systems", link: "https://classes.berkeley.edu/content/2022-spring-eleng-120-001-lec-001" },
    ],
  },
  {
    term: "Fall 2021",
    courses: [
      { code: "ASAMST 150", title: "Gender and Generation in Asian American Families", link: "https://classes.berkeley.edu/content/2021-fall-asamst-150-001-lec-001" },
      { code: "COMPSCI 61C", title: "Great Ideas of Computer Architecture (Machine Structures)", link: "https://classes.berkeley.edu/content/2021-fall-compsci-61c-001-lec-001" },
      { code: "COMPSCI 70", title: "Discrete Mathematics and Probability Theory", link: "https://classes.berkeley.edu/content/2021-fall-compsci-70-001-lec-001" },
      { code: "PHILOS 3", title: "The Nature of Mind", link: "https://classes.berkeley.edu/content/2021-fall-philos-3-001-lec-001" },
    ],
  },
  {
    term: "Spring 2021",
    courses: [
      { code: "COLWRIT R4B", title: "Reading, Composition, and Research", link: "https://classes.berkeley.edu/content/2021-spring-colwrit-r4b-004-sem-004" },
      { code: "COMPSCI 61B", title: "Data Structures", link: "https://classes.berkeley.edu/content/2021-spring-compsci-61b-001-lec-001" },
      { code: "EECS 16B", title: "Designing Information Devices and Systems II", link: "https://classes.berkeley.edu/content/2021-spring-eecs-16b-001-lec-001" },
      { code: "SOCIOL 3AC", title: "Principles of Sociology: American Cultures", link: "https://classes.berkeley.edu/content/2021-spring-sociol-3ac-001-lec-001" },
    ],
  },
  {
    term: "Fall 2020",
    courses: [
      { code: "COMPSCI 61A", title: "The Structure and Interpretation of Computer Programs", link: "https://classes.berkeley.edu/content/2020-fall-compsci-61a-001-lec-001" },
      { code: "EECS 16A", title: "Designing Information Devices and Systems I", link: "https://classes.berkeley.edu/content/2020-fall-eecs-16a-001-lec-001" },
      { code: "MATH 54", title: "Linear Algebra and Differential Equations", link: "https://classes.berkeley.edu/content/2020-fall-math-54-002-lec-002" },
      { code: "PHYSICS 5B", title: "Introductory Electromagnetism, Waves, and Optics", link: "https://classes.berkeley.edu/content/2020-fall-physics-5b-001-lec-001" },
      { code: "PHYSICS 5BL", title: "Introduction to Experimental Physics I", link: "https://classes.berkeley.edu/content/2020-fall-physics-5bl-101-lab-101" },
    ],
  },
];

function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  
  return (
    <Page
      contentMain={
        <div className="space-y-10">
          <section className="hero bg-base-200 rounded-lg border border-base-300 shadow-sm">
            <div className="hero-content flex-col gap-6 text-center max-w-3xl">
              <div className="space-y-4">
                <p className="text-sm text-base-content/70 tracking-wide">
                  Forward Deployed Engineer • AI & Production Systems
                </p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Hi, I'm Edward. I build software where it matters most.
                </h1>
                <p className="text-base md:text-lg text-base-content/80 max-w-3xl mx-auto">
                  Forward deployed software engineer deploying AI and data systems into production. Former educator who taught data structures at Berkeley. I care about building safe, reliable systems that solve real problems at scale.
                </p>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card bg-base-100 border border-base-300 shadow-sm rounded-lg">
              <div className="card-body space-y-3">
                <h3 className="card-title text-lg">Connect</h3>
                <p className="text-sm text-base-content/70">
                  Working on forward deployed engineering and AI systems. Always interested in discussing challenging technical problems.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <a
                    className="btn btn-sm border-2 border-black bg-white text-black hover:bg-black hover:text-white dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
                    href="https://github.com/epark272"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my GitHub profile (opens in new window)"
                  >
                    <FaGithub size={16} aria-hidden="true" />
                    GitHub
                  </a>
                  <a
                    className="btn btn-sm border-2 border-[#005893] bg-white text-[#005893] hover:bg-[#005893] hover:text-white dark:border-white dark:bg-[#004471] dark:text-white dark:hover:bg-white dark:hover:text-[#004471]"
                    href="https://www.linkedin.com/in/edwardpark272/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my LinkedIn profile (opens in new window)"
                  >
                    <FaLinkedin size={16} aria-hidden="true" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 border border-base-300 shadow-sm rounded-lg">
              <div className="card-body space-y-2">
                <h3 className="card-title text-lg">Current Focus</h3>
                <ul className="space-y-2 text-sm leading-relaxed">
                  <li>Deploying AI systems into production</li>
                  <li>Forward deployed engineering and customer integration</li>
                  <li>Building reliable data pipelines and analytics platforms</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Experience</h2>
            </div>
            <div className="space-y-3">
              {experience.map((item, index) => (
                <div
                  key={item.role + item.company}
                  className={`collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow rounded-lg ${openIndex === index ? 'collapse-open' : 'collapse-close'}`}
                >
                  <button 
                    className="collapse-title cursor-pointer w-full text-left"
                    onClick={(e) => {
                      if (!e.target.closest('a')) {
                        setOpenIndex(openIndex === index ? null : index);
                      }
                    }}
                    aria-expanded={openIndex === index}
                    aria-controls={`experience-${index}`}
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                        <h3 className="font-semibold text-lg">
                          {item.role} — {' '}
                          <a
                            className="link link-primary font-semibold no-underline hover:underline inline-flex items-center gap-1.5"
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {item.company}
                            <FaExternalLinkAlt className="text-sm" aria-hidden="true" />
                          </a>
                        </h3>
                      </div>
                      <p className="text-normal text-base-content/60">{item.period}</p>
                    </div>
                  </button>
                  <div className="collapse-content">
                    <p className="text-sm leading-relaxed text-base-content/80 pt-2 whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm rounded-lg">
            <input type="checkbox" name="coursework-accordion" />
            <div className="collapse-title">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Coursework</h2>
              </div>
            </div>
            <div className="collapse-content">
              <div className="overflow-x-auto pt-2">
                <table className="table w-full text-left" summary="Complete list of coursework taken at UC Berkeley, organized by term, including course codes and course titles">
                  <thead>
                    <tr>
                      <th>Term</th>
                      <th>Class</th>
                      <th>Title</th>
                    </tr>
                  </thead>
                  {coursework.map((term, termIndex) => (
                    <tbody key={term.term} className={termIndex % 2 === 0 ? "bg-base-100" : "bg-base-200"}>
                      {term.courses.map((course, courseIndex) => (
                        <tr key={course.code}>
                          {courseIndex === 0 && <th rowSpan={term.courses.length}>{term.term}</th>}
                          <td>
                            <a
                              href={course.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="no-underline hover:underline inline-flex items-center gap-1.5 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                            >
                              <span>{course.code}</span>
                              <FaExternalLinkAlt className="text-sm" aria-hidden="true" />
                            </a>
                          </td>
                          <td>{course.title}</td>
                        </tr>
                      ))}
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </section>

          <section className="card bg-base-100 border border-base-300 shadow-sm rounded-lg">
            <div className="card-body space-y-3">
              <h2 className="card-title text-2xl">Currently Reading</h2>
              <ul className="space-y-3 text-sm">
                {books.map((book) => (
                  <li key={book.title} className="flex flex-col">
                    <a
                      className="link link-hover focus:outline-2 focus:outline-offset-2 focus:outline-blue-600 inline-flex items-center gap-1 font-medium"
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${book.title} by ${book.author} on Goodreads (opens in new window)`}
                    >
                      <span>{book.title}</span>
                      <FaExternalLinkAlt className="text-md" aria-hidden="true" />
                    </a>
                    <span className="text-base-content/60 text-sm mt-1">{book.author}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="card bg-base-100 border border-base-300 shadow-sm rounded-lg">
            <div className="card-body space-y-3">
              <h2 className="card-title text-2xl">Interests</h2>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-outline badge-lg">Teaching</span>
                <span className="badge badge-outline badge-lg">Computer Graphics</span>
                <span className="badge badge-outline badge-lg">Reading</span>
                <span className="badge badge-outline badge-lg">Cycling</span>
                <span className="badge badge-outline badge-lg">Urban Planning</span>
                <span className="badge badge-outline badge-lg">Independent Journalism</span>
                <span className="badge badge-outline badge-lg">Hiking</span>
                <span className="badge badge-outline badge-lg">Journaling</span>
                <span className="badge badge-outline badge-lg">Consumer Tech</span>
                <span className="badge badge-outline badge-lg">PC Gaming</span>
              </div>
            </div>
          </section>
        </div>
      }
    />
  );
}

export default Home;
