// ScrollLinked.jsx
import React from "react";
import { motion, useSpring, useScroll } from "framer-motion";

const ScrollLinked = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 10,
        originX: 0,
        backgroundColor: "#16a085",
      }}
    />
  );
};

export default ScrollLinked;
