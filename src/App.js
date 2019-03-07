import React, { Component } from "react";
import MainContent from "./components/MainContent";
import { Container } from "semantic-ui-react";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  padding-top: 40px;
  display: flex !important;
  flex-direction: column;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <StyledContainer>
        <MainContent />
      </StyledContainer>
    );
  }
}

export default App;
