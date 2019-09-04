import React from "react";
import "./style.css";

function navbar() {
    return(
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="navbar navbar-light bg-light">
                        <div class="col-4">
                            <a class="navbar-brand" href="#">Navbar</a>
                        </div>
                        <div class="col-4">
                            <p>Click an Image to Begin!</p>
                        </div>
                        <div class="col-1">
                            <p>Score: </p>
                        </div>
                        <div class="col-1">
                            <p>|</p>
                        </div>
                        <div class="col-2">
                            <p>Top Score: </p>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default navbar;