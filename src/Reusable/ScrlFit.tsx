import { motion, useScroll, useTransform } from "framer-motion";
import { JSX, useRef } from "react";

type props = {
  children: JSX.Element | string | JSX.Element[];
  del?: number;
  once?: boolean;
};

const ScrlFit = ({ children, del }: props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });
  return (
    <div
      ref={ref}
      style={{
        overflow: "hidden",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <motion.div
        style={{
          scale: useTransform(
            scrollYProgress,
            [0.15 + (del || 0), 0.4 + (del || 0)],
            [1.2, 1]
          ),
          opacity: useTransform(
            scrollYProgress,
            [0.15 + (del || 0), 0.4 + (del || 0)],
            [0.5, 1]
          ),
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrlFit;
