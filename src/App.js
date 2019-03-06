import React, { Component } from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Container textAlign="center" className="main-container">
        <MainContent />
      </Container>
    );
  }
}

export default App;
