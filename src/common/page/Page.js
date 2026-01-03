import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export function Page(props) {
  const { contentLeft, contentMain, contentRight } = props;

  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Header />
      <main className="max-w-6xl mx-auto px-4 lg:px-6 py-10 flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {contentLeft && (
            <aside className="w-full lg:w-1/4 space-y-4">{contentLeft}</aside>
          )}
          <section className="w-full flex-1 space-y-6">{contentMain}</section>
          {contentRight && (
            <aside className="w-full lg:w-1/4 space-y-4">{contentRight}</aside>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
