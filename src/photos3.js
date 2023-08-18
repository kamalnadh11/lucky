import React from "react";
import './photos1.css'
const Photos3=()=>{
    return (
      <div className="photosc">
        <div className="heading">
          <h1>🤩Mango-Tree Photos🤩</h1>
        </div>

        <div className="photos">
        <img src= {process.env.PUBLIC_URL + "/images3/i31.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images3/i32.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images3/i33.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images3/i34.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images3/i35.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images3/i36.jpg"} alt="" />
        </div>
      </div>
    );
}
export default Photos3;