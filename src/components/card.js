import React from "react";
import "./style.css";

function Card (props) {
    return(
        <div className="card" key={props.id} id={props.id}>
            <div className="img-container">
                <img 
                    alt={props.name} 
                    src={props.url}
        
                    ></img>
            </div>
        </div>
    );
}

export default Card;