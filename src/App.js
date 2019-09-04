import React, {Component} from 'react';
import Wrapper from "./components/wrapper";
import Navbar from "./components/navbar";
import Card from "./components/card";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards
  }


render() {
  return(
    <Wrapper>

    <Navbar>
      
    </Navbar>
      {/* This map goes through all of my json data so we can access each card individually */}
      {this.state.cards.map(cards =>
        <Card
          key = {cards.id}
          url = {cards.url}
        />
        )}
    </Wrapper>
    )
  }
}

export default App;

