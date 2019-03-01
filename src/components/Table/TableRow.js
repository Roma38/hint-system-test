import React from "react";
import { Table, Icon, Image } from "semantic-ui-react";

function TableRow({ index, user, chosenUser, handleClick }) {
  return (
    <Table.Row
      className={index % 2 === 1 ? "odd-row" : undefined}
      onClick={handleClick}
    >
      <Table.Cell>
        <Image
          src={user.picture.thumbnail}
          circular
          size="mini"
          className="avatar-picture"
        />
      </Table.Cell>
      <Table.Cell>{user.name.last}</Table.Cell>
      <Table.Cell>{user.name.first}</Table.Cell>
      <Table.Cell>{user.login.username}</Table.Cell>
      <Table.Cell>{user.phone}</Table.Cell>
      <Table.Cell>{user.location.state}</Table.Cell>
      <Table.Cell>
        <Icon
          name={chosenUser === index ? "minus" : "plus"}
          size="big"
          color="grey"
        />
      </Table.Cell>
    </Table.Row>
  );
}

export default TableRow;
