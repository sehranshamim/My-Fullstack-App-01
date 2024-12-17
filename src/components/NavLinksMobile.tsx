import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import LinksMobile from "./LinksMobile";

function NavLinksMobile({ hambMenu, setHambMenu }) {
  const variants = {
    open: {
      x: ["100vw", 0],
    },
  };

  function handleClick() {
    setHambMenu(!hambMenu);
  }

  return (
    <motion.div
      className="fixed z-[10] top-0 left-0"
      animate={hambMenu ? "open" : "close"}
    >
      <motion.div
        className="h-screen w-screen bg-sky-900 z-[8] fixed "
        variants={variants}
        animate="open"
        exit={{ x: [0, "100vw"], transition: { duration: 0.1, delay: 0 } }}
        transition={{ delay: 0, duration: 0.05 }}
      ></motion.div>

      <motion.div
        className="h-screen w-screen bg-primarylight z-[8] fixed "
        variants={variants}
        animate="open"
        exit={{ x: [0, "100vw"], transition: { duration: 0.05, delay: 0.15 } }}
        transition={{ delay: 1, duration: 0.1 }}
      ></motion.div>

      <motion.div
        className="h-screen w-screen bg-cyan-400 z-[9] fixed "
        variants={variants}
        animate="open"
        exit={{ x: [0, "100vw"], transition: { duration: 0.05, delay: 0.1 } }}
        transition={{ delay: 0.2, duration: 0.1 }}
      ></motion.div>

      <motion.div
        className="h-screen w-screen bg-white z-[9] fixed "
        variants={variants}
        animate="open"
        exit={{ x: [0, "100vw"], transition: { duration: 0.05, delay: 0.05 } }}
        transition={{ delay: 0.3, duration: 0.1 }}
      ></motion.div>

      <motion.div
        className="h-screen w-screen flex bg-kala z-[10] fixed p-4 pl-9 "
        variants={variants}
        animate="open"
        exit={{ x: [0, "100vw"], transition: { duration: 0.05, delay: 0 } }}
        transition={{ delay: 0.4, duration: 0.1 }}
      >
        <LinksMobile handleClick={handleClick} />
      </motion.div>
    </motion.div>
  );
}

export default NavLinksMobile;
