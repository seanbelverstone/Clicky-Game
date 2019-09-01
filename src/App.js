import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    //HTML components go here
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

      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Clicky Game</h1>
          <p class="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
      </div>


    {/* container closing tag */}
    </div>
  );
}

export default App;
