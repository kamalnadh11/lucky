import React from "react";
import './photos1.css'
const Photos1=()=>{
    return (
      <div className="photosc">
        <div className="heading">
          <h1>🤩New-Born Photos🤩</h1>
        </div>

        <div className="photos">
          <img src= {process.env.PUBLIC_URL + "/images1/i11.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images1/i12.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images1/i13.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images1/i14.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images1/i15.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images1/i16.jpg"} alt="" />
        </div>
      </div>
    );
}
export default Photos1;