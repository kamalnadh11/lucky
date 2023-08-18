import { useNavigate } from "react-router-dom";
import Card from "./card";
import React from "react";
const Home=()=>{
    const navigate = useNavigate()
    const onCardClick=(Route)=>{
        navigate(Route)

    }
    return(
        <div className='cardc'>
          <Card title="New-Born" onClick={()=>onCardClick('/photos1')}/>
          <Card title="Chef" onClick={()=>onCardClick('/photos2')}/>
          <Card title="Mango-Tree" onClick={()=>onCardClick('/photos3')}/>
          <Card title="Love" onClick={()=>onCardClick('/photos4')}/>
          <Card title="Mermaid" onClick={()=>onCardClick('/photos5')}/>
          <Card title="Mothersday" onClick={()=>onCardClick('/photos6')}/>
          <Card title="Ugadi" onClick={()=>onCardClick('/photos7')}/>
          <Card title="Family" onClick={()=>onCardClick('/photos8')}/>
      </div>
    )
}
export default Home;