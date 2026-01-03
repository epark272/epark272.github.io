import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export function Page(props) {
  const { contentMain } = props;

  return (
    <div className="min-h-screen bg-base-100 text-base-content flex flex-col">
      <Header />
      <main id="main-content" className="flex-grow max-w-5xl mx-auto w-full px-4 lg:px-6 py-10 flex flex-col gap-8" role="main">
        <div className="w-full space-y-8">{contentMain}</div>
      </main>
      <Footer />
    </div>
  );
}
