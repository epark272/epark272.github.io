import { Page } from "../../common/page/Page";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const experience = [
  {
    title: "Teaching @ UC Berkeley",
    period: "CS 61B (5 semesters) • CS 61C (1 semester)",
    description:
      "Led labs and discussions, built projects, and coordinated exam logistics for data structures and computer architecture.",
    link: "https://inst.eecs.berkeley.edu/~cs61b/",
    linkLabel: "CS 61B",
  },
  {
    title: "Software Engineering Intern — Capital One",
    period: "React • TypeScript • Node • AWS",
    description:
      "Shipped features across web and services alongside Naveena Premkrishna, focusing on reliability and developer ergonomics.",
    link: "https://www.capitalone.com/",
    linkLabel: "Capital One",
  },
  {
    title: "Android Engineer — Berkeley Mobile",
    period: "Kotlin • Campus experiences",
    description:
      "Built and maintained mobile features that help students find what they need around campus in seconds.",
    link: "https://asuc.org/berkeley-mobile/",
    linkLabel: "Berkeley Mobile",
  },
];

const books = [
  {
    title: "Nomadland",
    author: "Jessica Bruder",
    link: "https://www.goodreads.com/book/show/38212124-nomadland",
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
  {
    title: "The Good Earth",
    author: "Pearl S. Buck",
    link: "https://www.goodreads.com/book/show/1078.The_Good_Earth",
  },
];

function Home() {
  return (
    <Page
      contentMain={
        <div className="space-y-10">
          <section className="hero bg-base-200 rounded-md border border-base-300 shadow-md">
            <div className="hero-content flex-col gap-6 text-center max-w-3xl">
              <div className="space-y-4">
                <p className="text-sm text-base-content/70 tracking-wide">
                  Engineer • Educator • Berkeley EECS
                </p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Hi, I'm Edward. I build calm, useful software.
                </h1>
                <p className="text-base md:text-lg text-base-content/80 max-w-3xl mx-auto">
                  Data structures, teaching, and thoughtful product engineering—always with a focus on clarity and reliability.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    className="btn btn-outline border-2 border-black dark:border-gray-300 text-black dark:text-gray-300 dark:hover:bg-white dark:hover:text-black focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                    href="https://github.com/epark272"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my GitHub profile (opens in new window)"
                  >
                    <FaGithub size={18} aria-hidden="true" />
                    GitHub
                  </a>
                  <a
                    className="btn btn-outline border-2 border-blue-700 dark:border-blue-700 text-blue-700 dark:text-blue-700 dark:hover:bg-blue-700 dark:hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                    href="https://www.linkedin.com/in/edwardpark272/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my LinkedIn profile (opens in new window)"
                  >
                    <FaLinkedin size={18} aria-hidden="true" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card bg-base-100 border border-base-300 shadow-sm rounded-md">
              <div className="card-body space-y-3">
                <h3 className="card-title text-lg">Let’s collaborate</h3>
                <p className="text-sm text-base-content/70">
                  I love teaching, systems, and building thoughtful tools.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <a
                    className="btn btn-sm btn-outline border-2 border-black dark:border-gray-300 text-black dark:text-gray-300 dark:hover:bg-white dark:hover:text-black focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                    href="https://github.com/epark272"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my GitHub profile (opens in new window)"
                  >
                    <FaGithub size={16} aria-hidden="true" />
                    GitHub
                  </a>
                  <a
                    className="btn btn-sm btn-outline border-2 border-blue-700 dark:border-blue-700 text-blue-700 dark:text-blue-700 dark:hover:bg-blue-700 dark:hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
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

            <div className="card bg-base-100 border border-base-300 shadow-sm rounded-md">
              <div className="card-body space-y-2">
                <h3 className="card-title text-lg">Highlights</h3>
                <ul className="space-y-2 text-sm leading-relaxed">
                  <li>Teaching data structures & computer architecture</li>
                  <li>Designing resilient systems and developer tooling</li>
                  <li>Exploring humane, minimalist product design</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Experience</h2>
              <span className="text-sm text-base-content/60">Teaching, engineering, and product work</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experience.map((item) => (
                <div
                  key={item.title}
                  className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow rounded-md focus-within:ring-2 focus-within:ring-blue-600"
                >
                  <div className="card-body space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="card-title text-lg">{item.title}</h3>
                      <a
                        className="link link-primary text-sm focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.linkLabel} (opens in new window)`}
                      >
                        {item.linkLabel}
                      </a>
                    </div>
                    <p className="text-sm text-base-content/70">{item.period}</p>
                    <p className="text-sm leading-relaxed text-base-content/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="card bg-base-100 border border-base-300 shadow-sm rounded-md">
            <div className="card-body space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="card-title text-2xl">Coursework</h2>
                <span className="badge badge-outline" aria-label="Berkeley Electrical Engineering and Computer Sciences">Berkeley EECS</span>
              </div>
              <div className="overflow-x-auto" role="region" aria-label="Coursework table">
                <table className="table w-full text-left" summary="Complete list of coursework taken at UC Berkeley, organized by term, including course codes and course titles">
                  <thead>
                    <tr>
                      <th>Term</th>
                      <th>Class</th>
                      <th>Title</th>
                    </tr>
                  </thead>
                  <tbody className="bg-base-100">
                    <tr>
                      <th rowSpan="2">Spring 2024</th>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2024-spring-compsci-168-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          COMPSCI 168
                        </a>
                      </td>
                      <td>Introduction to the Internet: Architecture and Protocols</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2024-spring-compsci-184-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          COMPSCI 184
                        </a>
                      </td>
                      <td>Foundations of Computer Graphics</td>
                    </tr>
                  </tbody>
                  <tbody className="bg-base-200">
                    <tr>
                      <th rowSpan="3">Fall 2023</th>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2023-fall-compsci-c191-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          COMPSCI C191
                        </a>
                      </td>
                      <td>Introduction to Quantum Computing</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2023-fall-econ-c110-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          ECON C110
                        </a>
                      </td>
                      <td>Game Theory in the Social Sciences</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2023-fall-music-30-1-lec-1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          MUSIC 30
                        </a>
                      </td>
                      <td>Computational Creativity for Music and the Arts</td>
                    </tr>
                  </tbody>
                  <tbody className="bg-base-100">
                    <tr>
                      <th rowSpan="4">Spring 2023</th>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2023-spring-compsci-162-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          COMPSCI 162
                        </a>
                      </td>
                      <td>Operating Systems and System Programming</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2023-spring-compsci-195-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          COMPSCI 195
                        </a>
                      </td>
                      <td>Social Implications of Computer Technology</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2023-spring-hum-120-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          HUM 120
                        </a>
                      </td>
                      <td>Entrepreneurship for All: An Insiders' Guide to Startups</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2023-spring-ugba-105-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          UGBA 105
                        </a>
                      </td>
                      <td>Leading People</td>
                    </tr>
                  </tbody>
                  <tbody className="bg-base-200">
                    <tr>
                      <th rowSpan="3">Fall 2022</th>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2022-fall-compsci-161-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          COMPSCI 161
                        </a>
                      </td>
                      <td>Computer Security</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2022-fall-compsci-170-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          COMPSCI 170
                        </a>
                      </td>
                      <td>Efficient Algorithms and Intractable Problems</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2022-fall-linguis-100-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          LINGUIS 100
                        </a>
                      </td>
                      <td>Introduction to Linguistic Science</td>
                    </tr>
                  </tbody>
                  <tbody className="bg-base-100">
                    <tr>
                      <th rowSpan="4">Spring 2022</th>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2022-spring-compsci-186-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          COMPSCI 186
                        </a>
                      </td>
                      <td>Introduction to Database Systems</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2022-spring-compsci-188-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          COMPSCI 188
                        </a>
                      </td>
                      <td>Introduction to Artificial Intelligence</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2022-spring-compsci-375-001-dis-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          COMPSCI 375
                        </a>
                      </td>
                      <td>Teaching Techniques for Computer Science</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2022-spring-eleng-120-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          ELENG 120
                        </a>
                      </td>
                      <td>Signals and Systems</td>
                    </tr>
                  </tbody>
                  <tbody className="bg-base-200">
                    <tr>
                      <th rowSpan="4">Fall 2021</th>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2021-fall-asamst-150-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          ASAMST 150
                        </a>
                      </td>
                      <td>Gender and Generation in Asian American Families</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2021-fall-compsci-61c-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          COMPSCI 61C
                        </a>
                      </td>
                      <td>Great Ideas of Computer Architecture (Machine Structures)</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2021-fall-compsci-70-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          COMPSCI 70
                        </a>
                      </td>
                      <td>Discrete Mathematics and Probability Theory</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2021-fall-philos-3-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          PHILOS 3
                        </a>
                      </td>
                      <td>The Nature of Mind</td>
                    </tr>
                  </tbody>
                  <tbody className="bg-base-100">
                    <tr>
                      <th rowSpan="4">Spring 2021</th>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2021-spring-colwrit-r4b-004-sem-004"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          COLWRIT R4B
                        </a>
                      </td>
                      <td>Reading, Composition, and Research</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2021-spring-compsci-61b-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          COMPSCI 61B
                        </a>
                      </td>
                      <td>Data Structures</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2021-spring-eecs-16b-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          EECS 16B
                        </a>
                      </td>
                      <td>Designing Information Devices and Systems II</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2021-spring-sociol-3ac-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          SOCIOL 3AC
                        </a>
                      </td>
                      <td>Principles of Sociology: American Cultures</td>
                    </tr>
                  </tbody>
                  <tbody className="bg-base-200">
                    <tr>
                      <th rowSpan="5">Fall 2020</th>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2020-fall-compsci-61a-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          COMPSCI 61A
                        </a>
                      </td>
                      <td>The Structure and Interpretation of Computer Programs</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2020-fall-eecs-16a-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          EECS 16A
                        </a>
                      </td>
                      <td>Designing Information Devices and Systems I</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2020-fall-math-54-002-lec-002"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          MATH 54
                        </a>
                      </td>
                      <td>Linear Algebra and Differential Equations</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2020-fall-physics-5b-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          PHYSICS 5B
                        </a>
                      </td>
                      <td>Introductory Electromagnetism, Waves, and Optics</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2020-fall-physics-5bl-101-lab-101"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                        >
                          PHYSICS 5BL
                        </a>
                      </td>
                      <td>Introduction to Experimental Physics I</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      }
      contentRight={
        <div className="space-y-4">
          <div className="card bg-base-100 shadow-md border border-base-300">
            <div className="card-body space-y-3">
              <h3 className="card-title text-lg">Reading lately</h3>
              <ul className="space-y-2 text-sm">
                {books.map((book) => (
                  <li key={book.title} className="flex flex-col">
                    <a
                      className="link link-hover focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${book.title} by ${book.author} on Goodreads (opens in new window)`}
                    >
                      {book.title}
                    </a>
                    <span className="text-base-content/60">{book.author}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md border border-base-300">
            <div className="card-body space-y-3">
              <h3 className="card-title text-lg">Looking for</h3>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li>Opportunities to teach and mentor</li>
                <li>Systems work that values clarity over complexity</li>
                <li>Teams that care about accessibility and calm design</li>
              </ul>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default Home;
