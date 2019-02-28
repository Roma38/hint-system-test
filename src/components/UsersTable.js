import React, { Component } from "react";
import { Input, Icon, Image, Table, Header, List } from "semantic-ui-react";
import { API_HOST, NUMBER_OF_USERS } from "../config";
import axios from "axios";
import { connect } from "react-redux";
import {
  usersLoadStart,
  usersLoadSucceed,
  usersLoadFailed
} from "../redux/actions/users";
import TableRowPlaceholder from "./TableRowPlaceholder";

class UsersTableComponent extends Component {
  state = { chosenUser: null, searchQuery: "" };

  handleChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  componentDidMount() {
    this.props.usersLoadStart();
    axios
      .get(`${API_HOST}/?results=${NUMBER_OF_USERS}`)
      .then(({ data }) => {
        this.props.usersLoadSucceed(data.results);
      })
      .catch(() => {
        this.props.usersLoadFailed();
      });
  }

  render() {
    const filtredUsers = this.props.users.items.filter(({ name }) =>
      name.first.includes(this.state.searchQuery)
    );
    return (
      <>
        <Input
          onChange={this.handleChange}
          icon={{ name: "search", circular: true, link: true }}
          placeholder="Search..."
          className="search-input"
        />
        <Table basic="very" unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Last</Table.HeaderCell>
              <Table.HeaderCell>First</Table.HeaderCell>
              <Table.HeaderCell>Username</Table.HeaderCell>
              <Table.HeaderCell>Phone</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.users.requestState === "loading" &&
              [...Array(+NUMBER_OF_USERS)].map((item, index) => (
                <TableRowPlaceholder key={index} index={index} />
              ))}

            {this.props.users.requestState === "succeed" &&
              (filtredUsers.length ? (
                filtredUsers.map((
                  user,
                  index /*в качестве key я использовал бы user.id, но у некоторых юзеров он почему-то равен null, по этому я взял user.phone */
                ) => (
                  <React.Fragment key={user.phone}>
                    <Table.Row
                      className={index % 2 === 1 ? "odd-row" : undefined}
                      onClick={() =>
                        this.setState({
                          chosenUser:
                            this.state.chosenUser === index ? null : index
                        })
                      }
                    >
                      <Table.Cell>
                        <Image
                          src={user.picture.thumbnail}
                          circular
                          size="mini"
                        />
                      </Table.Cell>
                      <Table.Cell>{user.name.last}</Table.Cell>
                      <Table.Cell>{user.name.first}</Table.Cell>
                      <Table.Cell>{user.login.username}</Table.Cell>
                      <Table.Cell>{user.phone}</Table.Cell>
                      <Table.Cell>{user.location.state}</Table.Cell>
                      <Table.Cell>
                        <Icon
                          name={
                            this.state.chosenUser === index ? "minus" : "plus"
                          }
                          size="big"
                          color="grey"
                        />
                      </Table.Cell>
                    </Table.Row>
                    {this.state.chosenUser === index && (
                      <Table.Row
                        className={index % 2 === 1 ? "odd-row" : undefined}
                      >
                        <Table.Cell colSpan={7}>
                          <Header textAlign="center" size="huge">
                            {user.name.first} {user.name.last}
                            <Icon name={user.gender} />
                          </Header>
                          <div className="user-info">
                            <List>
                              <List.Item>
                                <b>Username: </b>
                                {user.login.username}
                              </List.Item>
                              <List.Item>
                                <b>Registered date: </b>
                                {new Date(user.registered.date).toDateString()}
                              </List.Item>
                              <List.Item>
                                <b>Email: </b>
                                {user.email}
                              </List.Item>
                              <List.Item>
                                <b>Location: </b>
                                {user.location.street}
                              </List.Item>
                              <List.Item>
                                <b>Birthday: </b>
                                {new Date(user.dob.date).toDateString()}
                              </List.Item>
                              <List.Item>
                                <b>Phone: </b>
                                {user.phone}
                              </List.Item>
                              <List.Item>
                                <b>Cell: </b>
                                {user.cell}
                              </List.Item>
                            </List>
                            <Image
                              className="user-picture"
                              src={user.picture.large}
                              circular
                            />
                          </div>
                        </Table.Cell>
                      </Table.Row>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={7}>
                    <Header content="Noone found :(" textAlign="center" />
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
        </Table>
      </>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users
});

const mapDispatchToProps = dispatch => ({
  usersLoadStart: () => dispatch(usersLoadStart()),
  usersLoadSucceed: users => dispatch(usersLoadSucceed(users)),
  usersLoadFailed: () => dispatch(usersLoadFailed())
});

const UsersTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersTableComponent);

export default UsersTable;
