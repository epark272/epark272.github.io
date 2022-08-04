import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="Navbar text-xl inline-flex">
      <button
        onClick={() => navigate("/")}
        className="flex items-center mx-1 my-2 px-1 border bg-slate-200 rounded-lg 
        border-transparent hover:border-white hover:drop-shadow"
      >
        Home
      </button>
      <button
        onClick={() =>
          window.open(
            "https://cs61b.edwardpark.org",
            "_blank",
            "noopener",
            "noreferrer"
          )
        }
        className="flex items-center mx-1 my-2 px-1 border bg-slate-200 rounded-lg border-transparent hover:border-white hover:drop-shadow"
      >
        CS 61B
      </button>
    </div>
  );
}

export default Navbar;
