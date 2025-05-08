import { useState } from "react";
import eye from "../assets/logos/eye.svg";
import eyes from "../assets/logos/eye-s.svg";

const PassInp = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="inp-div">
      <input
        style={{ border: "none", padding: 0, borderRadius: 0 }}
        type={show ? "text" : "password"}
      />
      <img
        style={{ height: 20, width: 20 }}
        src={show ? eyes : eye}
        onClick={() => {
          setShow((p) => !p);
        }}
      />
    </div>
  );
};

export default PassInp;
