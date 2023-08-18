import './card.css'
import React from 'react';
const Card=(props)=>{
    const{title,onClick}=props;
    return(
        <div className='card' onClick={onClick}>
            <h1>{title}</h1>
            <h4>Sample photos</h4>
            <p1>Open</p1>
        </div>    
    )
}
export default Card;