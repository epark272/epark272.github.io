import { Page } from "../../common/page/Page";

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
      contentLeft={
        <div className="space-y-4">
          <div className="card bg-base-100 shadow-xl border border-base-300">
            <div className="card-body space-y-2">
              <p className="badge badge-primary badge-outline w-fit">Contact</p>
              <h3 className="card-title text-lg">Let's collaborate</h3>
              <p className="text-sm text-base-content/70">
                I love teaching, systems, and building thoughtful tools.
              </p>
              <div className="space-y-2 text-sm">
                <a
                  className="link link-primary"
                  href="mailto:epark2@berkeley.edu"
                >
                  epark2@berkeley.edu
                </a>
                <div className="flex gap-2">
                  <a
                    className="btn btn-sm btn-primary"
                    href="https://github.com/epark272"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="btn btn-sm btn-outline"
                    href="https://www.linkedin.com/in/edward-park-8340301a5/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md border border-base-300">
            <div className="card-body space-y-2">
              <p className="badge badge-secondary badge-outline w-fit">Highlights</p>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li>Teaching data structures & computer architecture</li>
                <li>Designing resilient systems and developer tooling</li>
                <li>Exploring humane, minimalist product design</li>
              </ul>
            </div>
          </div>
        </div>
      }
      contentMain={
        <div className="space-y-10">
          <section className="hero bg-gradient-to-r from-base-300/50 via-base-200 to-base-200 rounded-3xl border border-base-300 shadow-xl">
            <div className="hero-content flex-col lg:flex-row gap-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="badge badge-primary badge-outline">Engineer • Educator</div>
                  <div className="badge badge-outline">Berkeley EECS</div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Hi, I'm Edward. I build calm, useful software.
                </h1>
                <p className="text-base md:text-lg text-base-content/80 max-w-3xl">
                  Recent UC Berkeley EECS graduate focused on data structures, teaching,
                  and thoughtful product engineering. I enjoy working on systems that feel
                  reliable, clear, and humane.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    className="btn btn-primary"
                    href="mailto:epark2@berkeley.edu"
                  >
                    Get in touch
                  </a>
                  <a
                    className="btn btn-outline"
                    href="https://github.com/epark272/epark272.github.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View this site on GitHub
                  </a>
                </div>
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
                  className="card bg-base-100 border border-base-300 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="card-body space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="card-title text-lg">{item.title}</h3>
                      <a
                        className="link link-primary text-sm"
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
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

          <section className="card bg-base-100 border border-base-300 shadow-xl">
            <div className="card-body space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="card-title text-2xl">Coursework</h2>
                <span className="badge badge-outline">Berkeley EECS</span>
              </div>
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full text-left">
                  <thead>
                    <tr>
                      <th>Term</th>
                      <th>Class</th>
                      <th>Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th rowSpan="2">Spring 2024</th>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2024-spring-compsci-168-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
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
                        >
                          COMPSCI 184
                        </a>
                      </td>
                      <td>Foundations of Computer Graphics</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <th rowSpan="3">Fall 2023</th>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2023-fall-compsci-c191-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          COMPSCI C191
                        </a>
                      </td>
                      <td>Introduction to Quantum Computing</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2023-fall-compsci-161-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          COMPSCI 161
                        </a>
                      </td>
                      <td>Computer Security</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2023-fall-compsci-194-198-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          COMPSCI 194-198
                        </a>
                      </td>
                      <td>Justice Through Code</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <th rowSpan="4">Spring 2023</th>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2023-spring-compsci-162-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          COMPSCI 162
                        </a>
                      </td>
                      <td>Operating Systems and System Programming</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2023-spring-compsci-170-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          COMPSCI 170
                        </a>
                      </td>
                      <td>Efficient Algorithms and Intractable Problems</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2023-spring-compsci-190-198-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          COMPSCI 190-198
                        </a>
                      </td>
                      <td>UEP: The Art of Teaching Computer Science</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2023-spring-compsci-195-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          COMPSCI 195
                        </a>
                      </td>
                      <td>Social Implications of Computer Technology</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <th rowSpan="3">Fall 2022</th>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2022-fall-compsci-61c-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          COMPSCI 61C
                        </a>
                      </td>
                      <td>The Great Ideas of Computer Architecture (Machine Structures)</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2022-fall-compsci-170-001-lec-002"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          COMPSCI 170
                        </a>
                      </td>
                      <td>Efficient Algorithms and Intractable Problems</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2022-fall-math-53-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          MATH 53
                        </a>
                      </td>
                      <td>Multivariable Calculus</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <th rowSpan="4">Spring 2022</th>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2022-spring-compsci-61b-002-lec-002"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          COMPSCI 61B
                        </a>
                      </td>
                      <td>Data Structures and Algorithms</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2022-spring-compsci-70-002-lec-002"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          COMPSCI 70
                        </a>
                      </td>
                      <td>Discrete Mathematics and Probability Theory</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2022-spring-eecs-16b-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          EECS 16B
                        </a>
                      </td>
                      <td>Designing Information Devices and Systems II</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2022-spring-math-110-002-lec-002"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          MATH 110
                        </a>
                      </td>
                      <td>Linear Algebra</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <th rowSpan="4">Fall 2021</th>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2021-fall-compsci-61a-002-lec-002"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          COMPSCI 61A
                        </a>
                      </td>
                      <td>The Structure and Interpretation of Computer Programs</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2021-fall-compsci-47b-001-lab-001"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          COMPSCI 47B
                        </a>
                      </td>
                      <td>Completion of Work in Data Structures</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2021-fall-civeng-c30-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          CIVENG C30
                        </a>
                      </td>
                      <td>
                        Basic Mechanics and Selected Topics in Civil and Environmental Engineering
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2021-fall-eps-80-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          EPS 80
                        </a>
                      </td>
                      <td>Environmental Earth System Science</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <th rowSpan="4">Spring 2021</th>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2021-spring-compsci-10-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          COMPSCI 10
                        </a>
                      </td>
                      <td>The Beauty and Joy of Computing</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2021-spring-english-180l-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ENGLISH 180L
                        </a>
                      </td>
                      <td>Short Fiction</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2021-spring-psych-2-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          PSYCH 2
                        </a>
                      </td>
                      <td>Principles of Learning</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2021-spring-spanish-1-002-lec-002"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          SPANISH 1
                        </a>
                      </td>
                      <td>Elementary Spanish</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <th rowSpan="5">Fall 2020</th>
                      <td>
                        <a
                          href="https://classes.berkeley.edu/content/2020-fall-compsci-61a-001-lec-001"
                          target="_blank"
                          rel="noopener noreferrer"
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
                      className="link link-hover"
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
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
