import React, { Component } from "react";
import { Input, Table, Header } from "semantic-ui-react";
import { API_HOST, NUMBER_OF_USERS, SEARCHING_CITY } from "../config";
import { connect } from "react-redux";
import { getUsers } from "../redux/actions/users";
import TableRowPlaceholder from "./Table/TableRowPlaceholder";
import TableRow from "./Table/TableRow";
import UsersTable from "./Table/UsersTable";

class MainContentComponent extends Component {
  state = { searchQuery: "" };

  handleChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  componentDidMount() {
    this.props.getUsers(
      `${API_HOST}/search/users?q=location:${SEARCHING_CITY}&sort:followers`
    );
  }

  render() {
    const filtredUsers = this.props.users.items.filter(({ login }) =>
      login.includes(this.state.searchQuery)
    );
    return (
      <>
        <Input
          onChange={this.handleChange}
          icon={{ name: "search", circular: true, link: true }}
          placeholder="Search..."
          className="search-input"
        />
        <UsersTable>
          <Table.Body>
            {this.props.users.requestState === "loading" &&
              [...Array(NUMBER_OF_USERS)].map((item, index) => (
                <TableRowPlaceholder key={index} />
              ))}

            {this.props.users.requestState === "succeed" &&
              (filtredUsers.length ? (
                filtredUsers.map((user, index) => (
                  <TableRow key={user.id} user={user} />
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={3}>
                    <Header content="No one found :(" textAlign="center" />
                  </Table.Cell>
                </Table.Row>
              ))}

            {this.props.users.requestState === "error" && (
              <Table.Row>
                <Table.Cell colSpan={7}>
                  <Header
                    content="Oops... something went wrong :("
                    size="huge"
                    color="red"
                    textAlign="center"
                  />
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </UsersTable>
      </>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users
});

const mapDispatchToProps = dispatch => ({
  getUsers: url => dispatch(getUsers(url))
});

const MainContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContentComponent);

export default MainContent;
