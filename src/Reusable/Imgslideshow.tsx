import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type props = {
  arr: string[];
  time?: number;
  height?: number | string;
  width?: number | string;
};

const Imgslideshow = ({ arr, height, width, time }: props) => {
  const [img, setImg] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setImg((p) => (p + 1) % arr.length);
    }, time || 4000);

    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div
      style={{
        height: height || 400,
        width: width || "100%",
        position: "relative",
        overflow: "clip",
      }}
    >
      {arr.map((el, i) => {
        return (
          <AnimatePresence>
            {img == i && (
              <motion.img
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                src={el}
                style={{
                  width: width || "100%",
                  height: height || 400,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                  objectFit: "cover",
                }}
              />
            )}
          </AnimatePresence>
        );
      })}
    </div>
  );
};

export default Imgslideshow;
