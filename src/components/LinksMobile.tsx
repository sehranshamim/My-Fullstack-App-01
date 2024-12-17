import { div } from "framer-motion/client";
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function LinksMobile({ handleClick }) {
  return (
    <div className="flex bg-bglight gap-9">
      <div className="h-screen rotate-3 w-1 bg-black dark:bg-white scale-110"></div>
      <div className="flex flex-col text-left left-0 border-2 dark:border-white border-black text-3xl font-orbitron italic justify-center rotate-3 bg-primarylight text-textlight p-6 h-screen pl-2 scale-125">
        <motion.NavLink className="" to="/">
          Home
        </motion.NavLink>
        <NavLink onClick={handleClick} className="" to="/about">
          About
        </NavLink>
        <NavLink onClick={handleClick} className="" to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default LinksMobile;
