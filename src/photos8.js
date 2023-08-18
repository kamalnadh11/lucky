import React from "react";
const Photos8=()=>{
    return (
      <div className="photosc">
        <div className="heading">
          <h1>🤩Family Photos🤩</h1>
        </div>

        <div className="photos">
        <img src= {process.env.PUBLIC_URL + "/images8/i81.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images8/i82.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images8/i83.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images8/i84.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images8/i85.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images8/i86.jpg"} alt="" />
        </div>
      </div>
    );
}
export default Photos8;