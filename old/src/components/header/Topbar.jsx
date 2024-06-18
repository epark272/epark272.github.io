import Navbar from "./Navbar";

function Topbar(props) {
  return (
    <div className="Topbar w-full bg-white flex flex-row justify-between p-0 border-b border-slate-400">
      <h1 className="text-2xl font-semibold p-2">Eddie Park</h1>
      <Navbar
        condensedClickHandler={props.condensedClickHandler}
        isCondensed={props.isCondensed}
      />
    </div>
  );
}

export default Topbar;
