import { motion } from "framer-motion";

const SlideDown = ({ children, delay = 0 }) => {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <motion.div
        animate={{ opacity: 1, y: 1 }}
        initial={{ opacity: 0, y: 0 }}
        transition={{ type: "tween", delay, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SlideDown;
