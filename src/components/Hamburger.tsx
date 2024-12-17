import { motion } from "framer-motion";

function Hamburger({ hambMenu, setHambMenu, isActive, setIsActive }) {

  return (
    <motion.div
      hambMenue={hambMenu}
      className="rounded-[5px] bg-black/10 dark:bg-glass h-[36.11px] w-[50px] flex flex-col gap-[4px] backdrop-blur-[5px] border-t-[0.6px] border-l-[0.6px] justify-center items-center z-[99] shadow-chawa "
      onClick={() => {
        setHambMenu(!hambMenu);
        setIsActive(!isActive);
      }}
      initial={{ opacity: 0, y: "-50%" }}
      animate={[hambMenu ? "open" : "closed", { opacity: 1, y: 0 }]}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.div
        className="rounded-[10px] w-[30px] h-[5px] bg-primarylight relative"
        variants={{
          open: {
            rotate: ["0deg", "-35deg"],
            top: [0, "4.2px"],
            width: ["30px", "20px"],
          },
          closed: {
            rotate: ["-35deg", "0deg"],
            top: ["4.2px", 0],
            width: ["20px", "30px"],
          },
        }}
      ></motion.div>
      <motion.div
        className="rounded-[10px] w-[30px] h-[5px] bg-primarylight relative "
        variants={{
          open: {
            left: [0, "25vw"],
            opacity: [1, 0],
          },
          closed: {
            left: ["25vw", 0],
            opacity: [0, 1],
          },
        }}
      ></motion.div>
      <motion.div
        className="rounded-[10px] w-[30px] h-[5px] bg-primarylight relative "
        variants={{
          open: {
            rotate: ["0deg", "35deg"],
            bottom: [0, "4.2px"],
            width: ["30px", "20px"],
          },
          closed: {
            rotate: ["35deg", "0deg"],
            bottom: ["4.2px", 0],
            width: ["20px", "30px"],
          },
        }}
      ></motion.div>
    </motion.div>
  );
}

export default Hamburger;
