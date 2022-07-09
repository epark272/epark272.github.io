import styles from "./App.css";
import { Page } from "../../common/page/Page";

function App() {
  const { App } = styles;
  return (
    <div className={App}>
      <Page
        contentLeft={<p>This is the homepage</p>}
        contentMain={<p>Main Content</p>}
        contentRight={<p>Right sidebar</p>}
      />
    </div>
  );
}

export default App;
