import './App.css';
import React from 'react';


class Square extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {value: null};
  }

  render() {
    return (
      <div>
        <button className="square"

          onClick={() => this.setState({value: 'X'})}>
          {this.state.value}

        </button>
        <button className="square" onClick={() => console.log("First game")}>First Game</button>
      </div>
    );
  }
}

class Board extends React.Component{
  renderSquare(i) {
    return <Square value={i} />;
  }

  render(){
    const status = 'Next player: X';
    return (
      <div>
        <div className="status" >{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

export class App extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>
            <li>Collect all squares</li>
            <li>Be careful</li>
          </ol>
        </div>
      </div>
    );
}
}
