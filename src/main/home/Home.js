import styles from "./Home.module.css";
import { Page } from "../../common/page/Page";

function Home() {
  const { Experience, Coursework } = styles;

  return (
    <div className={Home}>
      <Page
        contentMain={
          <div>
            <p>
              I am a third year undergraduate student at the University of
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
                  href="cs61b.edwardpark.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </li>
              <li>
                I am at{" "}
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
                  <th rowspan="4">Spring 2022</th>
                  <td>COMPSCI 186</td>
                  <td>Introduction to Database Systems</td>
                </tr>
                <tr>
                  <td>COMPSCI 188</td>
                  <td>Introduction to Artificial Intelligence</td>
                </tr>
                <tr>
                  <td>COMPSCI 375</td>
                  <td>Teaching Techniques for Computer Science</td>
                </tr>
                <tr>
                  <td>ELENG 120</td>
                  <td>Signals and Systems</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th rowspan="4">Fall 2021</th>
                  <td>ASAMST 150</td>
                  <td>Gender and Generation in Asian American Families</td>
                </tr>
                <tr>
                  <td>COMPSCI 61C</td>
                  <td>
                    Great Ideas of Computer Architecture (Machine Structures)
                  </td>
                </tr>
                <tr>
                  <td>COMPSCI 70</td>
                  <td>Discrete Mathematics and Probability Theory</td>
                </tr>
                <tr>
                  <td>PHILOS 3</td>
                  <td>The Nature of Mind</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th rowspan="4">Spring 2021</th>
                  <td>COLWRIT R4B</td>
                  <td>Reading, Composition, and Research</td>
                </tr>
                <tr>
                  <td>COMPSCI 61B</td>
                  <td>Data Structures</td>
                </tr>
                <tr>
                  <td>EECS 16B</td>
                  <td>Designing Information Devices and Systems II</td>
                </tr>
                <tr>
                  <td>SOCIOL 3AC</td>
                  <td>Principles of Sociology: American Cultures</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th rowspan="5">Fall 2020</th>
                  <td>COMPSCI 61A</td>
                  <td>The Structure and Interpretation of Computer Programs</td>
                </tr>
                <tr>
                  <td>EECS 16A</td>
                  <td>Designing Information Devices and Systems I</td>
                </tr>
                <tr>
                  <td>MATH 54</td>
                  <td>Linear Algebra and Differential Equations</td>
                </tr>
                <tr>
                  <td>PHYSICS 5B</td>
                  <td>Introductory Electromagnetism, Waves, and Optics</td>
                </tr>
                <tr>
                  <td>PHYSICS 5BL</td>
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
                  href="https://www.goodreads.com/book/show/32191706-the-color-of-law"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Color of Law
                </a>{" "}
                by Richard Rothstein
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
