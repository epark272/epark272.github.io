import Navbar from "./Navbar";

function Header() {
  return (
    <div className="Header w-full bg-slate-300 flex flex-row justify-between p-0">
      <h1 className="Title text-2xl font-semibold p-2">Edward Park</h1>
      <Navbar />
    </div>
  );
}

export default Header;
