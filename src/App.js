import React, { Component } from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import { Container } from "semantic-ui-react";
import GenderChart from "./components/GenderChart";

class App extends Component {
  render() {
    return (
      <Container textAlign="center" className="main-container">
        <GenderChart />
        <MainContent />
      </Container>
    );
  }
}

export default App;
