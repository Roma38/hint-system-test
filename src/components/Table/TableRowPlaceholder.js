import React from "react";
import { Table, Placeholder } from "semantic-ui-react";

const PlaceholderLine = () => (
  <Table.Cell>
    <Placeholder>
      <Placeholder.Line length="full" style={{ background: "none" }} />
    </Placeholder>
  </Table.Cell>
);

function TableRowPlaceholder() {
  return (
    <Table.Row>
      <Table.Cell>
        <Placeholder className="avatar-placeholder">
          <Placeholder.Image />
        </Placeholder>
      </Table.Cell>
      <PlaceholderLine />
      <PlaceholderLine />
    </Table.Row>
  );
}

export default TableRowPlaceholder;
