import { motion } from "motion/react"

const FloatingAnimation = () => {
  return (
    <motion.div
      initial={{ y: 0 }} // Initial position
      animate={{ y: [0, -10, 0] }} // Animation keyframes
      transition={{
        duration: 2, // Animation duration
        repeat: Infinity, // Infinite loop
        ease: "easeInOut", // Smooth easing
      }}
      className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg shadow-lg"
    >
      Float
    </motion.div>
  );
};
 
export default FloatingAnimation;
