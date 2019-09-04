import React from "react";
import "./style.css";

function Card (props) {
    return(
        <div className="card" key={props.id}>
            <img alt={props.name} src={props.url}></img>
        </div>
    )
}

export default Card;