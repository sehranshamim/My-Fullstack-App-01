import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <motion.div
      className="hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <NavLink className="bg-kala" to="/">
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </motion.div>
  );
}

export default NavLinks;
