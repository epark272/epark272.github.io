import { Page } from "../../common/page/Page";

function Home() {
  return (
    <div className={Home}>
      <Page
        contentLeft={<p>This is the homepage</p>}
        contentMain={<p>Main Content</p>}
        contentRight={<p>Right sidebar</p>}
      />
    </div>
  );
}

export default Home;
