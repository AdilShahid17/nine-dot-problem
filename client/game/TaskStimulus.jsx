import React from "react";

export default class TaskStimulus extends React.Component {
  render() {
    return (
      <div className="task-stimulus">
        <h2>Instructions</h2>
        <p>
          You are about to play the Nine Dot Problem game. This is a puzzle where you must connect all nine dots using only four straight lines without lifting your pen.
        </p>
        <p>
          You will see a 3x3 grid of dots. To start, click on any dot. Then, move to any other dot to draw a line between them. You can only start a new line from the end of the previous line.
        </p>
        <p>
          Remember, you are only allowed to draw a total of four lines. You cannot lift your pen until you have drawn all four lines.
        </p>
        <p>
          Good luck!
        </p>
      </div>
    );
  }
}






