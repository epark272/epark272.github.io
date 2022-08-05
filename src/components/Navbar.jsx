import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();

  const buttonStyle =
    "flex items-center mx-1 my-2 px-1 border bg-blue-100 rounded-md border-transparent hover:border-blue-400 hover:drop-shadow active:border-blue-400 active:drop-shadow";

  if (props.isCondensed) {
    return (
      // TODO replace with hamburger icon
      <button
        onClick={props.condensedClickHandler}
        className={"inline-flex " + buttonStyle}
      >
        M
      </button>
    );
  } else {
    return (
      <div className="Navbar text-xl inline-flex">
        <button onClick={() => navigate("/")} className={buttonStyle}>
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
          className={buttonStyle}
        >
          CS 61B
        </button>
      </div>
    );
  }
}

export default Navbar;
