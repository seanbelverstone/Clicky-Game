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
      topScore: 0,
      clickedCards: []
    }
  this.checkClick = this.checkClick.bind(this) //binds the function to this, meaning the app

  }

  incrementScore() {
    this.setState({score: this.state.score +1})
  }

  incrementTopScore() {
    this.setState({topScore: this.state.topScore +1})
  }

  pushToArray(id) {
    const clickedCards = this.state.clickedCards.slice();
    clickedCards.push(id);
    this.setState({clickedCards}, () => console.log(clickedCards)) //sets the old clickedCards array to be the new one
  }


  checkClick(id) {

    if (!this.state.clickedCards.includes(id)) {

        this.pushToArray(id);


    } else {
      this.incrementScore();
      this.incrementTopScore();
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
          onClick = {this.checkClick}
        />
        )}
    </div>
    </Wrapper>
    )
  }
}

export default App;

