import React from "react";
import "./style.css";

function Navbar({score, topScore}) {
    return(
        <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-light bg-light">
                    <div className="col-3">
                        <p id="message">Click an Image to Begin!</p>
                    </div>
                    <div className="col-2">
                        <p id="score">Score: {score}</p>
                    </div>
                    <div className="col-1">
                        <p id="divider">|</p>
                    </div>
                    <div className="col-2">
                        <p id="topScore">Top Score: {topScore} </p>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;