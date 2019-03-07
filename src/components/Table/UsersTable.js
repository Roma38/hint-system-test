import React from "react";
import { Table } from "semantic-ui-react";

function UsersTable({ children }) {
  return (
    <Table striped collapsing unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Total stars</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {children}
    </Table>
  );
}

export default UsersTable;
