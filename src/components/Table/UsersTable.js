import React from "react";
import { Table } from "semantic-ui-react";

function UsersTable({ children }) {
  return (
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
      {children}
    </Table>
  );
}

export default UsersTable;
