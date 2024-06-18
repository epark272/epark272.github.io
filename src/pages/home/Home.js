import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="Content p-2">
        <p className="">
          Hi there! I'm Eddie, a third year undergraduate student at the
          University of California, Berkeley, studying EECS. I like to teach
          data structures, read books, and learn cool stuff!
        </p>
      </div>
      <hr className="my-2"></hr>
      <div className="Content p-2">
        <h2 className="Experience text-xl font-medium">Experience</h2>
        <ul className="list-outside list-circle">
          <li>
            I am a TA for{" "}
            <a
              href="https://inst.eecs.berkeley.edu/~cs61b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CS 61B
            </a>
            , Berkeley's data structures class. I maintain a list of unofficial
            course resources{" "}
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
            . The front-end project included working with{" "}
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
            <a
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
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
            , a one-stop shop for Berkeley students to get the information they
            need.
          </li>
        </ul>
      </div>
      <hr className="my-2"></hr>
      <div className="Content p-2">
      <h2 className="Coursework text-xl font-medium">Coursework</h2>
        <table className="table-auto border-solid border-collapse [&>tbody:nth-child(odd)]:bg-white [&>tbody:nth-child(even)]:bg-blue-100">
        <thead>
            <tr className="bg-blue-400">
              <th>Term</th>
              <th>Class</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody className="">
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
      </div>
      <Footer />
    </div>
  );
}

export default Home;