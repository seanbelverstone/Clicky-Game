import React, {Component} from 'react';
import "./App.css";
import Wrapper from "./components/wrapper";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Card from "./components/card";
import cards from "./cards.json";

class App extends Component {

    state = {
      cards,
      score: 0,
      topScore: 0,
      clickedCards: []
    }


  incrementScore() {
    this.setState(state => ({
      score: state.score++
    }))
  }

  incrementTopScore() {
    this.setState(state => ({
      topScore: state.topScore++
    }))
  }

  checkClick(props) {
    if (//Put in here an if statement asking if the id of the clicked deepjoy is already in the array, if not
      //push to the array and run increment functions. If yes, then set score to 0, empty array and say you lost
      console.log("yeee")) {

    }
  }
  


render() {
  return(
    <Wrapper>

    <Navbar score = {0} topScore = {0}/>
    <Jumbotron />
    <div className="container">
      {/* This map goes through all of my json data so we can access each card individually */}
      {this.state.cards.map(cards =>
        <Card
          key = {cards.id}
          id = {cards.id}
          url = {cards.url}
          clicked = {false}
        />
        )}
    </div>
    </Wrapper>
    )
  }
}

export default App;

