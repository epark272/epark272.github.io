import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export function Header() {
  const { Component, Content, Navbar } = styles;

  return (
    <div className={Component}>
      <div className={Content}>
        <h1>Edward Park</h1>
        <ul className={Navbar}>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li> */}
          <li>
            <a
              href="https://cs61b.edwardpark.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              CS61B Resources
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
