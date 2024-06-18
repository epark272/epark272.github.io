import { useNavigate } from "react-router-dom";
import StyledButton from "../button/StyledButton";

function Navbar(props) {
  const navigate = useNavigate();

  if (props.isCondensed) {
    return (
      // TODO replace with hamburger icon
      <StyledButton
        onClick={props.condensedClickHandler}
        className={"inline-flex"}
      >
        M
      </StyledButton>
    );
  } else {
    return (
      <div className="Navbar text-xl inline-flex">
        <StyledButton onClick={() => navigate("/")}>
          Home
        </StyledButton>
        <StyledButton
          onClick={() =>
            window.open(
              "https://cs61b.edwardpark.org",
              "_self",
              "noopener",
              "noreferrer"
            )
          }
        >
          CS 61B
        </StyledButton>
      </div>
    );
  }
}

export default Navbar;