import { motion, useScroll, useTransform } from "framer-motion";
import { JSX, useRef } from "react";

type props = {
  children: JSX.Element | string | JSX.Element[];
  del?: number;
  once?: boolean;
};

const ScrlPop = ({ children }: props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  return (
    <motion.div
      ref={ref}
      style={{
        scale: useTransform(
          scrollYProgress,
          [0, 0.14, 0.2, 0.8, 1],
          [0.7, 0.95, 1, 1, 0.7]
        ),
        opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
        y: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]),
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrlPop;
