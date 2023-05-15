import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InstructionStepOne extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, game } = this.props;

    return (
      <Centered>
        <div className="instructions">
          <h1> Nine Dot Problem </h1>
          <p>
            In this experiment you will be required to solve the nine dot problem.
            A 3x3 grid will be provided and you must draw straight lines through
            the dots in such a way that all 9 dots are covered. You may not draw more
            then 4 lines and each new line must start at the end point of the previos line,
            much like drawing without lifting a pen. You have 2 minutes.
          </p>

          <p>
            <button type="button" onClick={onPrev} disabled={!hasPrev}>
              Previous
            </button>
            <button type="button" onClick={onNext} disabled={!hasNext}>
              Next
            </button>
          </p>
        </div>
      </Centered>
    );
  }
}
