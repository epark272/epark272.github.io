import { useEffect, useState } from "react";
import Navmenu from "./Navmenu";
import Topbar from "./Topbar";

function Header() {
  // screen is 480px wide or larger
  const screenSizeQuery = window.matchMedia("(min-width: 480px)");

  const [menuIsExpanded, setMenuIsExpanded] = useState(false);
  const [isCondensed, setIsCondensed] = useState(!screenSizeQuery.matches);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (screenSizeQuery.matches) {
        setIsCondensed(false);
        setMenuIsExpanded(false);
      } else {
        setIsCondensed(true);
      }
    });
  });

  return (
    <div className="Header ">
      <Topbar
        condensedClickHandler={() => {
          setMenuIsExpanded(!menuIsExpanded);
        }}
        isCondensed={isCondensed}
      />
      {isCondensed && menuIsExpanded ? <Navmenu></Navmenu> : <></>}
    </div>
  );
}

export default Header;
