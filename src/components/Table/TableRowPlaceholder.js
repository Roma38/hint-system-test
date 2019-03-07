import React from "react";
import { Table, Placeholder } from "semantic-ui-react";
import styled from "styled-components";

const StyledPlaceholder = styled(Placeholder)`
  border: 2px solid white;
  margin-left: 15px;
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;

const PlaceholderLine = () => (
  <Table.Cell>
    <Placeholder>
      <Placeholder.Line style={{ background: "none" }} />
    </Placeholder>
  </Table.Cell>
);

function TableRowPlaceholder() {
  return (
    <Table.Row>
      <Table.Cell>
        <StyledPlaceholder>
          <Placeholder.Image />
        </StyledPlaceholder>
      </Table.Cell>
      <PlaceholderLine />
      <PlaceholderLine />
    </Table.Row>
  );
}

export default TableRowPlaceholder;
