import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type props = {
  str: string;
  fs?: number;
};

const Headings = (props: props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-250px" });

  const strarr: string[] = props.str.split("");

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        fontSize: (props.fs || 3) + "rem",
      }}
      ref={ref}
    >
      {isInView && (
        <div style={{ display: "flex" }}>
          {strarr.map((el, i) => {
            return (
              <motion.p
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                key={i}
                transition={{
                  type: "spring",
                  duration: 0.3,
                  delay: i * 0.025,
                }}
                style={{ width: el === " " ? 40 : "auto" }}
              >
                {el}
              </motion.p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Headings;
