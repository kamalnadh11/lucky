import React from "react";
const Photos6=()=>{
    return (
      <div className="photosc">
        <div className="heading">
          <h1>🤩Mother's-day Photos🤩</h1>
        </div>

        <div className="photos">
        <img src= {process.env.PUBLIC_URL + "/images6/i61.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images6/i62.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images6/i63.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images6/i64.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images6/i65.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images6/i66.jpg"} alt="" />
        </div>
      </div>
    );
}
export default Photos6;