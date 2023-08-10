
import React, { useState } from "react";

const Yellowlight = () => {
  const [light, setLight] = useState(true);

  const buttonStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "yellow",
  };

  const switchLight = () => {
    setLight(prevLight => !prevLight);
  };

  return (
    <div className="App">
      <button
        onClick={switchLight}
        style={{
          ...buttonStyle,
          boxShadow: light ? "none" : "0px 0px 10px 10px rgba(249, 231, 159)",
        }}
      ></button>
    </div>
  );
};

export default Yellowlight;