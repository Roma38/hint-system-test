import React from "react";
import { Table, Placeholder, Icon } from "semantic-ui-react";

const PlaceholderLine = () => (
  <Table.Cell>
    <Placeholder>
      <Placeholder.Line length="full" style={{ background: "none" }} />
    </Placeholder>
  </Table.Cell>
);

function TableRowPlaceholder({ index }) {
  return (
    <Table.Row className={index % 2 === 1 ? "odd-row" : undefined}>
      <Table.Cell>
        <Placeholder className="avatar-placeholder">
          <Placeholder.Image />
        </Placeholder>
      </Table.Cell>
      <PlaceholderLine />
      <PlaceholderLine />
      <PlaceholderLine />
      <PlaceholderLine />
      <PlaceholderLine />
      <Table.Cell>
        <Icon name="plus" size="big" color="grey" />
      </Table.Cell>
    </Table.Row>
  );
}

export default TableRowPlaceholder;
