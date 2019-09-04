import React, {Component} from 'react';
import "./App.css";
import Wrapper from "./components/wrapper";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Card from "./components/card";
import cards from "./cards.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards,
      score: 0,
      topScore: 0
    }
    // this.score = this.score.bind(this);
    // this.topScore = this.topScore.bind(this);
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
          onClick = {function() {
            if (this.clicked = false) {
              this.incrementScore();
              this.incrementTopScore();
            }
          }}
        />
        )}
    </div>
    </Wrapper>
    )
  }
}

export default App;

