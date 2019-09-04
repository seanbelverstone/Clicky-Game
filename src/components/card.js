import React from "react";
import "./style.css";
import Navbar from "./navbar";

function Card (props) {
    return(
        <div className="card" key={props.id} id={props.id}>
            <div className="img-container">
                <img 
                    alt={props.name} 
                    src={props.url}

                    onClick={() => {

                        if (props.clicked === false) {
                            alert("clicked");
                            Navbar.score++;
                            Navbar.topScore++;
                        }

                    }}
                    ></img>
            </div>
        </div>
    );
}

export default Card;