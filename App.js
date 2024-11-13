import React from "react";
import "./App.css";
import Dot from "./Dot";
import imageData from "./product.json";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Beauty Products</h1>

      {imageData.map((item, index) => (
        <div key={index} className="image-container">
          <div className="image-wrapper">
            <img src={item.imageSrc} alt={item.altText} />
            {item.dots.map((dot, dotIndex) => (
              <div
                key={dotIndex}
                style={{
                  position: "absolute",
                  marginLeft: dot.marginLeft,
                  bottom: dot.bottom,
                }}
              >
                <Dot name={dot.name} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
