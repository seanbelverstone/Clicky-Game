import React from "react";
import "./style.css";

function Jumbotron() {
    return(
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Clicky Game</h1>
                <p class="lead">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        </div>
    );
};

export default Jumbotron;