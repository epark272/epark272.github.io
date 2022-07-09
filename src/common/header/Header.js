import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export function Header() {
  const { Header, Navbar } = styles;

  return (
    <div className={Header}>
      <h1>Edward Park</h1>
      <ul className={Navbar}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
      </ul>
    </div>
  );
}
