import React from "react";
import { Table, Header, Icon, Image, List } from "semantic-ui-react";

function FullInfo({ index, user }) {
  return (
    <Table.Row className={index % 2 === 1 ? "odd-row" : undefined}>
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
          <Image className="user-picture" src={user.picture.large} circular />
        </div>
      </Table.Cell>
    </Table.Row>
  );
}

export default FullInfo;
