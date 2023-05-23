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
              I am a fourth year undergraduate student at the University of
              California, Berkeley, studying EECS. I like to teach data
              structures, read books, and learn cool stuff!
            </p>
            <hr></hr>
            <h2>Experience</h2>
            <ul className={Experience}>
              <li>
                I am a TA for{" "}
                <a
                  href="https://inst.eecs.berkeley.edu/~cs61b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CS 61B
                </a>
                , Berkeley's data structures class. I maintain a list of
                unofficial course resources{" "}
                <a
                  href="https://cs61b.edwardpark.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
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
                  <th rowspan="4">Spring 2023</th>
                  <td>
                    <a
                      href="https://eecs.berkeley.edu/Courses/CS162/"
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
                      href="https://eecs.berkeley.edu/Courses/CS195/"
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
                      href="https://eecs.berkeley.edu/Courses/CS161/"
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
                      href="https://eecs.berkeley.edu/Courses/CS170/"
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
                      href="https://eecs.berkeley.edu/Courses/CS186/"
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
                      href="https://eecs.berkeley.edu/Courses/CS188/"
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
                      href="https://eecs.berkeley.edu/Courses/CS375/"
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
                      href="https://eecs.berkeley.edu/Courses/EE120/"
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
                      href="https://eecs.berkeley.edu/Courses/CS61C/"
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
                      href="https://eecs.berkeley.edu/Courses/CS70/"
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
                      href="https://eecs.berkeley.edu/Courses/CS61B/"
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
                      href="https://www.eecs.berkeley.edu/Courses/EECS16B/"
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
                      href="https://eecs.berkeley.edu/Courses/CS61A/"
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
                      href="https://eecs.berkeley.edu/Courses/EECS16A/"
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
                      href="https://math.berkeley.edu/courses/choosing/lowerdivcourses/math54"
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
              My preferred method of contact is email:{" "}
              <a href="mailto:epark2@berkeley.edu">epark2@berkeley.edu</a>.
            </p>
          </div>
        }
      />
    </div>
  );
}

export default Home;
