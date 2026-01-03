import { Alert } from "../../common/alert/Alert";
import { Page } from "../../common/page/Page";
import styles from "./Home.module.css";

function Home() {
  const { Experience, Coursework } = styles;

  return (
    <div className={Home}>
      <Page
        contentMain={
          <div>
            <p>
              I am a recent graduate from the University of
              California, Berkeley, studying EECS. I like to teach data
              structures, read books, and learn cool stuff!
            </p>
            <hr></hr>
            <h2>Experience</h2>
            <ul className={Experience}>
              <li>
                I was a teaching assistant for{" "}
                <a
                  href="https://inst.eecs.berkeley.edu/~cs61b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CS 61B
                </a>{" "}
                (Data Structures) for 5 semesters (Spring 2022, Fall 2022, 
                Spring 2023, Fall 2023, Spring 2024) and{" "}
                <a
                  href="https://inst.eecs.berkeley.edu/~cs61c/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CS 61C
                </a>{" "}
                (Computer Architecture) for 1 semester (Summer 2023). On top of
                teaching duties, I have been primarily involved in exam logistics,
                project development, and staff management. I have also been active
                in content development, course infrastructure development, and other
                administrative duties.
              </li>
              <li>
                I worked at{" "}
                <a
                  href="https://www.capitalone.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Capital One
                </a>{" "}
                as a software engineering intern, under{" "}
                <a
                  href="https://www.linkedin.com/in/naveena-premkrishna/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Naveena Premkrishna
                </a>
                . The project included working with{" "}
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  React
                </a>
                ,{" "}
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TypeScript
                </a>
                ,{" "}
                <a href="https://nodejs.dev/" target="_blank" rel="noreferrer">
                  Node
                </a>
                ,{" "}
                <a
                  href="https://aws.amazon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AWS
                </a>
                , and internal Capital One technologies.
              </li>
              <li>
                I was on the Android team for{" "}
                <a
                  href="https://asuc.org/berkeley-mobile/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Berkeley Mobile
                </a>
                , a one-stop shop for Berkeley students to get the information
                they need.
              </li>
            </ul>
            <hr></hr>
            <h2>Coursework</h2>
            <table className={Coursework}>
              <thead>
                <tr>
                  <th>Term</th>
                  <th>Class</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th rowspan="2">Spring 2024</th>
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
                  <th rowspan="3">Fall 2023</th>
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
                      href="https://classes.berkeley.edu/content/2023-fall-econ-c110-001-lec-001"
                      target="_blank"
                      rel="noopener noreferrer"
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
                    >
                      MUSIC 30
                    </a>
                  </td>
                  <td>Computational Creativity for Music and the Arts</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th rowspan="4">Spring 2023</th>
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
                      href="https://classes.berkeley.edu/content/2023-spring-compsci-195-001-lec-001"
                      target="_blank"
                      rel="noopener noreferrer"
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
                    >
                      UGBA 105
                    </a>
                  </td>
                  <td>Leading People</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th rowspan="3">Fall 2022</th>
                  <td>
                    <a
                      href="https://classes.berkeley.edu/content/2022-fall-compsci-161-001-lec-001"
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
                      href="https://classes.berkeley.edu/content/2022-fall-compsci-170-001-lec-001"
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
                      href="https://classes.berkeley.edu/content/2022-fall-linguis-100-001-lec-001"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LINGUIS 100
                    </a>
                  </td>
                  <td>Introduction to Linguistic Science</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th rowspan="4">Spring 2022</th>
                  <td>
                    <a
                      href="https://classes.berkeley.edu/content/2022-spring-compsci-186-001-lec-001"
                      target="_blank"
                      rel="noopener noreferrer"
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
                    >
                      ELENG 120
                    </a>
                  </td>
                  <td>Signals and Systems</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th rowspan="4">Fall 2021</th>
                  <td>
                    <a
                      href="https://classes.berkeley.edu/content/2021-fall-asamst-150-001-lec-001"
                      target="_blank"
                      rel="noopener noreferrer"
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
                    >
                      COMPSCI 61C
                    </a>
                  </td>
                  <td>
                    Great Ideas of Computer Architecture (Machine Structures)
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://classes.berkeley.edu/content/2021-fall-compsci-70-001-lec-001"
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
                      href="https://classes.berkeley.edu/content/2021-fall-philos-3-001-lec-001"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PHILOS 3
                    </a>
                  </td>
                  <td>The Nature of Mind</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th rowspan="4">Spring 2021</th>
                  <td>
                    <a
                      href="https://classes.berkeley.edu/content/2021-spring-colwrit-r4b-004-sem-004"
                      target="_blank"
                      rel="noopener noreferrer"
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
                    >
                      SOCIOL 3AC
                    </a>
                  </td>
                  <td>Principles of Sociology: American Cultures</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th rowspan="5">Fall 2020</th>
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
            <hr></hr>
            <h2>Literature</h2>
            Here are some books that I've recently read and enjoyed:
            <ul>
              <li>
                <a
                  href="https://www.goodreads.com/book/show/38212124-nomadland"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nomadland
                </a>{" "}
                by Jessica Bruder
              </li>
              <li>
                <a
                  href="https://www.goodreads.com/book/show/9126253-the-blame-game"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Blame Game
                </a>{" "}
                by Ben Dattner {"&"} Darren Dahl
              </li>
              <li>
                <a
                  href="https://www.goodreads.com/book/show/31670196-scale"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Scale
                </a>{" "}
                by Geoffrey West
              </li>
              <li>
                <a
                  href="https://www.goodreads.com/book/show/1078.The_Good_Earth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Good Earth
                </a>{" "}
                by Pearl S. Buck
              </li>
            </ul>
            <hr></hr>
            <h2>Contact</h2>
            <p>
              My preferred method of contact is email: epark2 (at) berkeley (dot) edu.
            </p>
          </div>
        }
      />
    </div>
  );
}

export default Home;
