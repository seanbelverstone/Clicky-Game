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

    //sets the states of cards, score, topscore and the clicked cards array
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
    // Function for pushing the selected cards to another array, to then allow us to check if they've been clicked
    // or not yet later on
    const clickedCards = this.state.clickedCards;
    clickedCards.push(id);
    this.setState({clickedCards}, () => console.log(clickedCards)) 
    //sets the old clickedCards array to be the new one
    //this console log is just to check. Can delete with the arrow function later

  }                           

  checkClick(id) {

    if (!this.state.clickedCards.includes(id)) {
      console.log('yo');
      this.pushToArray(id);
      this.incrementScore();
      this.incrementTopScore();
      //shuffle array and redisplay.
      // will need to create a new array, which uses a random number generator to push random indexes over.
    } else {
      console.log("you lose sucka");
    }
  }
  


render() {
  return(
    <Wrapper>

    <Navbar score = {this.state.score} topScore = {this.state.topScore}/>
    <Jumbotron />
    <div className="container">
      {/* This map goes through all of my json data so we can access each card individually */}
      {this.state.cards.map(cards =>
        <Card
          key = {cards.id}
          id = {cards.id}
          url = {cards.url}
          clicked = {false}
          onClick = {() => this.checkClick(cards.id)}
        />
        )}
    </div>
    </Wrapper>
    )
  }
}

export default App;

