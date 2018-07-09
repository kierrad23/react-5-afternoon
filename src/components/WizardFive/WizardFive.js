import React, { Component } from "react";
import { Link } from "react-router-dom";
import { updateAgent } from "../../ducks/reducer";
import { connect } from "react-redux";

class WizardFive extends Component {
  render() {
    const { updateAgent } = this.props;
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p>Are you currently working with a real estate agent?</p> <br />
          <div className="row">
            <Link to="/wSix">
              <button onClick={() => updateAgent(true)}>Yes</button>
            </Link>
            <Link to="/wSix">
              <button onClick={() => updateAgent(false)}>No </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    agent: state.realEstateAgent
  };
}

export default connect(
  mapStateToProps,
  { updateAgent }
)(WizardFive);
