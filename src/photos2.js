import React from "react";
import './photos1.css'
const Photos2=()=>{
    return (
      <div className="photosc">
        <div className="heading">
          <h1>🤩Chef-Photos🤩</h1>
        </div>

        <div className="photos">
        <img src= {process.env.PUBLIC_URL + "/images2/i21.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images2/i22.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images2/i23.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images2/i24.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images2/i25.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images2/i26.jpg"} alt="" />
        </div>
      </div>
    );
}
export default Photos2;