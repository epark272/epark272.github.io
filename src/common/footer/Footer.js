import styles from "./Footer.module.css";

export function Footer() {
  const { Component, Content } = styles;

  return (
    <div className={Component}>
      <div className={Content}>
        <p>Copyright © 2022-{new Date().getFullYear()} Edward Park</p>
        <p>
          View this page on{" "}
          <a
            href="https://github.com/epark272/epark272.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
