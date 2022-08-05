import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function Home() {
  return (
    <div className="Home">
      <Header />
      <p className="p-2">
        Hi there! I'm Eddie, a third year undergraduate student at the
        University of California, Berkeley, studying EECS. I like to teach data
        structures, read books, and learn cool stuff!
      </p>
      <Footer />
    </div>
  );
}

export default Home;
