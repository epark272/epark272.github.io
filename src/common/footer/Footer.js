import styles from "./Footer.module.css";

export function Footer() {
  const { Footer } = styles;

  return (
    <div className={Footer}>
      <p>Copyright © 2022-{new Date().getFullYear()} Edward Park</p>
      <p>
        This website was created using{" "}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          React.js
        </a>
      </p>
    </div>
  );
}
