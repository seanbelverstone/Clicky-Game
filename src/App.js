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
      clickedCards: [],
    }

  this.checkClick = this.checkClick.bind(this) //binds the function to this, meaning the app

  }

  incrementScore() {
    this.setState({score: this.state.score +1})
  }

  incrementTopScore() {
    if (this.state.topScore <= this.state.score) {
      this.setState({topScore: this.state.topScore +1})
    }
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

  randomizeArray() {

    cards.sort(() => Math.random() - 0.5);
    
    this.setState({cards: this.state.cards});
    //this sorts the array randomly and re-sets the state. I struggled with a long, complex solution
    //for some time but after many hours this appeared to be the quickest, cleanest option. Apparently
    //it's not 100% random, but that's ok.
  }

  checkClick(id) {

    if (!this.state.clickedCards.includes(id)) {
      let message = document.getElementById("message");
      message.innerHTML = "You guessed correctly!";

      this.pushToArray(id);
      this.incrementScore();
      this.incrementTopScore();
      this.randomizeArray();
      
    } else {

      this.setState({score: 0});
      this.setState({clickedCards: []});

      let message = document.getElementById("message");
      message.innerHTML = "You guessed incorrectly!";
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

