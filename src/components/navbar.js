import React from "react";
import "./style.css";

function Navbar() {
    return(
        <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-light bg-light">
                    <div className="col-4">
                        <a className="navbar-brand" href="#">Navbar</a>
                    </div>
                    <div className="col-4">
                        <p>Click an Image to Begin!</p>
                    </div>
                    <div className="col-1">
                        <p>Score: </p>
                    </div>
                    <div className="col-1">
                        <p>|</p>
                    </div>
                    <div className="col-2">
                        <p>Top Score: </p>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;