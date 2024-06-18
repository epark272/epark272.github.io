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
        <hr className="my-2"></hr>
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

      <Footer />
    </div>
  );
}

export default Home;
