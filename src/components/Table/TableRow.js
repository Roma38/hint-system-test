import React, { Component } from "react";
import { Table, Loader, Image } from "semantic-ui-react";
import axios from "axios";
import styled from "styled-components";

const StyledImage = styled(Image)`
  border: 2px solid white;
  margin-left: 15px;
`;

class TableRow extends Component {
  state = { starsAmount: null };

  componentDidMount() {
    axios
      .get(this.props.user.repos_url)
      .then(({ data }) => {
        let stars = 0;
        data.forEach(element => {
          stars += element.stargazers_count;
        });
        this.setState({ starsAmount: stars });
      })
      .catch(() => this.setState({ starsAmount: "Can't load data :(" }));
  }

  render() {
    const { user } = this.props;
    return (
      <Table.Row>
        <Table.Cell>
          <StyledImage src={user.avatar_url} circular size="mini" />
        </Table.Cell>
        <Table.Cell>
          <a
            href={`https://github.com/${user.login}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.login}
          </a>
        </Table.Cell>
        <Table.Cell>
          {this.state.starsAmount === null ? (
            <Loader active inline />
          ) : (
            this.state.starsAmount
          )}
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default TableRow;
