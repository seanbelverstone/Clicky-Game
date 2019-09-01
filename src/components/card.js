import React from "react";
import "./style.css";

function Card (props) {
    return(
        <div class="card">
            <img alt={props.name} src={props.url}></img>
        </div>
    )
}

export default Card;