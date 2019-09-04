import React, {Component} from 'react';
import Wrapper from "./components/wrapper";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Card from "./components/card";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards
  }


render() {
  return(
    <Wrapper>

    <Navbar />
    <Jumbotron />
    <div className="container">
      {/* This map goes through all of my json data so we can access each card individually */}
      {this.state.cards.map(cards =>
        <Card
          key = {cards.id}
          url = {cards.url}
        />
        )}
    </div>
    </Wrapper>
    )
  }
}

export default App;

