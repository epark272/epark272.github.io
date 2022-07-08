import styles from "./Header.module.css";

export function Header() {
  const { Header, Navbar } = styles;

  return (
    <div className={Header}>
      <h1>Edward Park</h1>
      {/* TODO figure out routing: react-router-dom? */}
      <ul className={Navbar}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/resources">Resources</a>
        </li>
      </ul>
    </div>
  );
}
