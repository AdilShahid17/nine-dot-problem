import React from "react";

export default class TaskResponse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [],
      currentDot: null,
      penLifted: false,
      lineCount: 0,
      grid: Array(5).fill().map(() => Array(5).fill(false)),
      hasWon: false,
    };
  }

  handleDotClick = (i, j) => {
    this.setState((state) => {
      // If no dot is currently selected or this dot is the end of the previous line
      if (
        state.currentDot === null ||
        (state.lines.length > 0 &&
          state.lines[state.lines.length - 1][1][0] === i &&
          state.lines[state.lines.length - 1][1][1] === j)
      ) {
        // Select this one
        return { currentDot: [i, j] };
      } else {
        // Draw a line to this dot and select this dot
        const newLine = [state.currentDot, [i, j]];
        const newLineCount = state.lineCount + 1;
        const penLifted = newLineCount >= 4;
  
        // Copy the current grid and mark all covered dots
        const newGrid = [...state.grid];
        const [startX, startY] = state.currentDot;
        const [endX, endY] = [i, j];
        const stepX = (endX - startX) / Math.max(Math.abs(endX - startX), 1);
        const stepY = (endY - startY) / Math.max(Math.abs(endY - startY), 1);
        let x = startX;
        let y = startY;
        while (Math.abs(x - endX) >= Math.abs(stepX) && Math.abs(y - endY) >= Math.abs(stepY)) {
          x += stepX;
          y += stepY;
          newGrid[Math.round(x)][Math.round(y)] = true;
        }
        newGrid[endX][endY] = true;
  
        // Check if all dots in the inner 3x3 grid are covered
        let hasWon = true;
        for (let x = 1; x < 4; x++) {
          for (let y = 1; y < 4; y++) {
            if (!newGrid[x][y]) {
              hasWon = false;
            }
          }
        }

        
  
        return {
          lines: [...state.lines, newLine],
          currentDot: penLifted ? null : [i, j],
          penLifted,
          lineCount: newLineCount,
          grid: newGrid,
          hasWon,
        };
      }
    });
  };

  render() {
    const { lines, currentDot, penLifted, hasWon } = this.state;
  
    return (
      <div className="task-response-container">
        <svg className="task-response" width="520" height="520">
          <rect
            x="80"
            y="80"
            width="360"
            height="360"
            stroke="black"
            strokeWidth="4"
            fill="transparent"
          />
          {Array(5)
            .fill()
            .map((_, i) =>
              Array(5)
                .fill()
                .map((_, j) => (
                  <circle
                    key={`${i}-${j}`}
                    cx={i * 80 + 100}
                    cy={j * 80 + 100}
                    r="20"
                    style={{opacity: (i > 0 && i < 4 && j > 0 && j < 4) ? 1 : 0 }}
                    onClick={!penLifted ? () => this.handleDotClick(i, j) : null}
                  />
                ))
            )}
          {lines.map((line, i) => (
            <line
              key={i}
              x1={line[0][0] * 80 + 100}
              y1={line[0][1] * 80 + 100}
              x2={line[1][0] * 80 + 100}
              y2={line[1][1] * 80 + 100}
              stroke="black"
              strokeWidth="4"
            />
          ))}
          {currentDot && (
            <circle
              cx={currentDot[0] * 80 + 100}
              cy={currentDot[1] * 80 + 100}
              r="30"
              stroke="blue"
              strokeWidth="6"
              fill="transparent"
            />
          )}
        </svg>
        {hasWon && <p className="win-message">Congratulations, you won!</p>}
        {!hasWon && lines.length === 4 && <p className="error-message">You've used all 4 lines but haven't covered all the dots. Try again!</p>}
      </div>
    );
  }
}