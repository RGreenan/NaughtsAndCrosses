import React, {Component} from 'react';
import Square from './Square.js';

class SquareView extends Component {
  render() {
    const squares = this.props.listOfSquares.map(square => {
      return (
        <Square key={square.squareID} id={square.squareID} content={square.squareContent}>
        </Square>
      )
    })

    return (
      <>
      {squares}
      </>
    )
  };

}

export default SquareView;
