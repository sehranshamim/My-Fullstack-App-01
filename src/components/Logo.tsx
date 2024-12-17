import React from "react";
import { animate, motion } from "framer-motion";
import ShLogo from "../assets/logo2.svg";

function Logo() {
  const logoContainerVarient = {
    initial: {
      opacity: 0,
      y: "-50%",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.3,
    },
  };
  return (
    <motion.div
      className="rounded-[5px] border-white border-t-[0.6px] border-l-[0.6px] h-[36.11px] w-[50px] top-0 shadow-chawa z-[99] bg-black/10 dark:bg-glass backdrop-blur-[5px] "
      variants={logoContainerVarient}
      initial="initial"
      animate="animate"
      whileTap="hover"
      whileHover="hover"
    >
      <img
        className="h-[36.11px] left-[2.22px] top-[-10px] fill"
        src={ShLogo}
        alt="SH"
      />
    </motion.div>
  );
}

export default Logo;
