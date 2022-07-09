import styles from "./Page.module.css";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export function Page(props) {
  const { Page, Content, ContentLeft, ContentMain, ContentRight } = styles;

  return (
    <div className={Page}>
      <Header />
      <div className={Content}>
        <div className={ContentLeft}>{props.contentLeft}</div>
        <div className={ContentMain}>{props.contentMain}</div>
        <div className={ContentRight}>{props.contentRight}</div>
      </div>
      <Footer />
    </div>
  );
}
