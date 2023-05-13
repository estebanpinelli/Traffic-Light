import React from "react";
import { useState } from "react";

const RedLight = () => {
  const [light, setLight] = useState(true);

  function Switch() {
    let newValue;
    if (light) {
      newValue = false;
    } else {
      newValue = true;
    }
        setLight(newValue);
    window.location.reload(); // recarga la pagina cuando cambia el estado del boton
  }

  return (

          <div className="App">
            {light && (
              <button 
              onClick={Switch} 
              style={{ 
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                backgroundColor: "red", 
                }}
              >
              </button>
            )}
            {!light && (
              <button 
                onClick={Switch} 
                style={{ 
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "red", 
                  boxShadow: "0px 0px 10px 10px rgba(249, 231, 159)"
                }}              
              ></button>
            )}

    </div>
  );
};

export default RedLight;