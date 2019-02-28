import React, { Component } from "react";
import { Modal, Button } from "semantic-ui-react";
import { PieChart } from "react-easy-chart";
import { connect } from "react-redux";
import { NUMBER_OF_USERS } from "../config";

class GenderChartComponent extends Component {
  render() {
    let femaleNumber = this.props.users.items.filter(
      ({ gender }) => gender === "female"
    ).length;

    return (
      <>
        <Modal
          closeIcon
          style={{ maxWidth: "444px" }}
          trigger={<Button>Show Gender Chart</Button>}
        >
          <Modal.Header>Gender Chart</Modal.Header>
          <Modal.Content>
            <PieChart
              labels
              data={[
                {
                  key: `Female - ${((femaleNumber / NUMBER_OF_USERS) * 100).toFixed(1)}%`,
                  value: femaleNumber
                },
                {
                  key: `Male - ${
                    (100 -(femaleNumber / NUMBER_OF_USERS) * 100).toFixed(1)}%`,
                  value: NUMBER_OF_USERS - femaleNumber
                }
              ]}
            />
          </Modal.Content>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users
});
const GenderChart = connect(mapStateToProps)(GenderChartComponent);

export default GenderChart;
