import React, { Component } from "react";
import { Table, Placeholder } from "semantic-ui-react";

const PlaceholderLine = () => (
  <Table.Cell>
    <Placeholder>
      <Placeholder.Line length="short" />
    </Placeholder>
  </Table.Cell>
);

class TableRowPlaceholder extends Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>
          <Placeholder style={{ height: 35, width: 35 }}>
            <Placeholder.Image />
          </Placeholder>
        </Table.Cell>
        <PlaceholderLine />
        <PlaceholderLine />
        <PlaceholderLine />
        <PlaceholderLine />
        <PlaceholderLine />
      </Table.Row>
    );
  }
}

export default TableRowPlaceholder;
