import React, {Component} from 'react';
import Square from './Square.js';

class SquareView extends Component {
  constructor(props){
    super(props);

    //this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event){
  //   console.log("event", event.target.value);
  //   this.props.onSquareChange(event.target.value);
  // }

  render() {
    const squares = this.props.listOfSquares.map(square => {
      return (
        <Square
        key={square.squareID}
        id={square.squareID}
        content={square.squareContent}
        handleChange={this.props.onSquareChange}>
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
