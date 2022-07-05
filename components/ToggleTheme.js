import { React } from "react";
import { useTheme } from "../hooks/useTheme";
import { useEffect } from "react";
import { motion } from "framer-motion";

import { FaMoon } from "react-icons/fa";

import { FaSun } from "react-icons/fa";

export default function ToggleTheme() {
  const { changeMode, mode } = useTheme();

  const toggleMode = () => {
    if (mode === "light") {
      changeMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      changeMode("light");
      localStorage.setItem("mode", "light");
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("mode") === "light" ||
      (localStorage.getItem("mode") === "dark" &&
        localStorage.getItem("mode") !== mode)
    ) {
      changeMode(localStorage.getItem("mode"));
    }
  }, []);

  /*
   * When either sun or moon is clicked
   * check what current 'mode' is
   * use changeMode to change it to the opposite
   */

  //Conditionally render either the sun or the moon icon
  return (
    <>
      <div
        className={mode === "dark" ? "toggle-mode-light" : "toggle-mode-dark"}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.8,
            rotate: 360,
          }}
        >
          {mode === "light" && <FaMoon onClick={toggleMode}>dddd </FaMoon>}
          {mode === "dark" && <FaSun onClick={toggleMode}>llll</FaSun>}
        </motion.div>
      </div>
    </>
  );
}
