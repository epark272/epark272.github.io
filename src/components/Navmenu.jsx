import { useNavigate } from "react-router-dom";

function Navmenu() {
  const navigate = useNavigate();

  return (
    <div className="Navmenu flex flex-col border-b border-slate-400">
      <button
        onClick={() => navigate("/")}
        className="text-lg active:text-blue-600 active:underline"
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
        className="text-lg active:text-blue-600 active:underline"
      >
        CS 61B Guide
      </button>
    </div>
  );
}
export default Navmenu;
