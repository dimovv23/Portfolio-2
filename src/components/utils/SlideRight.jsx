import { motion } from "framer-motion";

const SlideRight = ({ children, height = "fit-content", delay = 0 }) => {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        height,
        position: "sticky",
        top: "0",
      }}
    >
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: -60 }}
        transition={{ type: "tween", delay, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SlideRight;
