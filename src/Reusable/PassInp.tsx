import { useState } from "react";
import eye from "../assets/logos/eye.svg";
import eyes from "../assets/logos/eye-s.svg";
import { AnimatePresence, motion } from "framer-motion";

const PassInp = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="inp-div">
      <input
        style={{ border: "none", padding: 0 }}
        type={show ? "text" : "password"}
      />
      <AnimatePresence>
        {show && (
          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            style={{ height: 20, width: 20 }}
            src={eyes}
            onClick={() => {
              setShow((p) => !p);
            }}
          />
        )}
        {!show && (
          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            style={{ height: 20, width: 20 }}
            src={eye}
            onClick={() => {
              setShow((p) => !p);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PassInp;
