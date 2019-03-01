import React, { Component } from "react";
import { Input, Table, Header } from "semantic-ui-react";
import { API_HOST, NUMBER_OF_USERS } from "../config";
import { connect } from "react-redux";
import { getUsers } from "../redux/actions/users";
import TableRowPlaceholder from "./Table/TableRowPlaceholder";
import TableRow from "./Table/TableRow";
import UsersTable from "./Table/UsersTable";
import FullInfo from "./Table/FullInfo";

class MainContentComponent extends Component {
  state = { chosenUser: null, searchQuery: "" };

  handleChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  componentDidMount() {
    this.props.getUsers(`${API_HOST}/?results=${NUMBER_OF_USERS}`);
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
        <UsersTable>
          <Table.Body>
            {this.props.users.requestState === "loading" &&
              [...Array(NUMBER_OF_USERS)].map((item, index) => (
                <TableRowPlaceholder key={index} index={index} />
              ))}

            {this.props.users.requestState === "succeed" &&
              (filtredUsers.length ? (
                filtredUsers.map((user, index) => (
                  <React.Fragment key={user.phone}>
                    {/* в качестве key я использовал бы user.id, но у некоторых юзеров он почему-то равен null, по этому я взял user.phone */}
                    <TableRow
                      index={index}
                      user={user}
                      chosenUser={this.state.chosenUser}
                      handleClick={() =>
                        this.setState({
                          chosenUser:
                            this.state.chosenUser === index ? null : index
                        })
                      }
                    />
                    {this.state.chosenUser === index && (
                      <FullInfo index={index} user={user} />
                    )}
                  </React.Fragment>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={7}>
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
