import React, { Component } from "react";
import "./App.css";
import UsersTable from "./components/UsersTable";
import { Container } from "semantic-ui-react";
import GenderChart from "./components/GenderChart";

class App extends Component {
  render() {
    return (
      <Container textAlign='center' className="main-container">
        <GenderChart />
        <UsersTable />
      </Container>
    );
  }
}

export default App;
