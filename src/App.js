import React, {Component} from 'react';
import Wrapper from "./components/wrapper";
import Card from "./components/card";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards
  }


render() {
  return(
    <Wrapper>
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

