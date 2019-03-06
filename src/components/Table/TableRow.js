import React, { Component } from "react";
import { Table, Loader, Image } from "semantic-ui-react";
import axios from "axios";

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
      .catch(error => {
        this.setState({ starsAmount: "Can't load data :(" });
        //console.log(error);
      });
  }

  render() {
    const { user } = this.props;
    return (
      <Table.Row>
        <Table.Cell>
          <Image
            src={user.avatar_url}
            circular
            size="mini"
            className="avatar-picture"
          />
        </Table.Cell>
        <Table.Cell>
          <a href={`https://github.com/${user.login}`} target="_blank">
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
