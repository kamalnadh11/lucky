import React from "react";
const Photos5=()=>{
    return (
      <div className="photosc">
        <div className="heading">
          <h1>🤩Mermaid Photos🤩</h1>
        </div>

        <div className="photos">
        <img src= {process.env.PUBLIC_URL + "/images5/i51.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images5/i52.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images5/i53.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images5/i54.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images5/i55.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images5/i56.jpg"} alt="" />
        </div>
      </div>
    );
}
export default Photos5;