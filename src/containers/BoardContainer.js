import React, {Component} from 'react';
import SquareView from '../components/SquareView.js';

class BoardContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      board: [
        {squareID: 1,
        squareContent: ""},
        {squareID: 2,
        squareContent: ""},
        {squareID: 3,
        squareContent: ""},
        {squareID: 4,
        squareContent: ""},
        {squareID: 5,
        squareContent: ""},
        {squareID: 6,
        squareContent: ""},
        {squareID: 7,
        squareContent: ""},
        {squareID: 8,
        squareContent: ""},
        {squareID: 9,
        squareContent: ""}
      ]
    };
    this.handleSquareChange = this.handleSquareChange.bind(this);
  }

  handleSquareChange(value, id){
    console.log(value, id);

    const newBoard = Array.from(this.state.board)
    const selectedSquare = newBoard[id - 1];
    selectedSquare.squareContent = value;
    this.setState({board: newBoard})
    console.log("state", selectedSquare.squareContent);
  }

  render(){
    return(
      <>
      <h1>Noughts & Crosses</h1>
      < SquareView
      listOfSquares={this.state.board}
      onSquareChange={this.handleSquareChange}/>

      </>
    )
  }




}

export default BoardContainer;
