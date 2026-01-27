import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Page(props) {
  const { contentMain, contentRight } = props;

  return (
    <div className="min-h-screen bg-base-100 text-base-content flex flex-col">
      <Header />
      <main id="main-content" className="flex-grow max-w-5xl mx-auto w-full px-4 lg:px-6 py-10 flex flex-col gap-8" role="main">
        <div className={contentRight ? "flex flex-col lg:flex-row gap-8" : "w-full space-y-8"}>
          <div className={contentRight ? "flex-1 space-y-8" : "w-full space-y-8"}>{contentMain}</div>
          {contentRight && <aside className="lg:w-80 space-y-4">{contentRight}</aside>}
        </div>
      </main>
      <Footer />
    </div>
  );}
