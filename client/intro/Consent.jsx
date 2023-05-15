import React from "react";

import { Centered, ConsentButton } from "meteor/empirica:core";

export default class Consent extends React.Component {
  render() {
    return (
      <Centered>
        <div className="consent">
          <h1> Consent Form </h1>
          <p>
            This experiment is a sample implementation of the nine dot problem.
            Your response will be recorded. Please agree to proceed.
          </p>
          <br />
          <ConsentButton text="I AGREE" />
        </div>
      </Centered>
    );
  }
}
