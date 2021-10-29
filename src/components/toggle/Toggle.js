import React, { useContext } from "react";
import "./toggle.css";
import { WiDaySunny } from "react-icons/wi";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import { ThemeContext } from "../../context";
function Toggle() {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <WiDaySunny
        className="t-icon"
        style={{ color: theme.state.darkMode ? "black" : "black" }}
      />
      <WiMoonAltWaningCrescent4
        className="t-icon"
        style={{ color: theme.state.darkMode ? "black" : "white" }}
      />
      <div
        className="t-button"
        onClick={handleClick}
        style={{
          left: theme.state.darkMode ? 0 : 26,
          transition: "0.3s linear",
        }}
      ></div>
    </div>
  );
}

export default Toggle;
