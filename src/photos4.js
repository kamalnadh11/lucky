import React from "react";
const Photos4=()=>{
    return (
      <div className="photosc">
        <div className="heading">
          <h1>🤩Love Photos🤩</h1>
        </div>

        <div className="photos">
        <img src= {process.env.PUBLIC_URL + "/images4/i41.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images4/i42.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images4/i43.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images4/i44.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images4/i45.jpg"} alt="" />
          <img src= {process.env.PUBLIC_URL + "/images4/i46.jpg"} alt="" />
        </div>
      </div>
    );
}
export default Photos4;