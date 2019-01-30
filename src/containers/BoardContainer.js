import React, {Component} from 'react';
import SquareView from '../components/SquareView.js';
import WonGameButton from '../components/WonGameButton.js';

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
      ],
      winMessage: ""
    };
    this.handleSquareChange = this.handleSquareChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleSquareChange(value, id){
    console.log(value, id);

    const newBoard = Array.from(this.state.board)
    const selectedSquare = newBoard[id - 1];
    selectedSquare.squareContent = value;
    this.setState({board: newBoard})
    console.log("state", selectedSquare.squareContent);
  }

  handleButtonClick(){
    console.log("this worked");
    const newWinMessage = this.state.winMessage = "Well Done";
    this.setState({winMessage: newWinMessage})
  }

  render(){
    return(
      <>
      <h1>Noughts & Crosses</h1>
      < SquareView
      listOfSquares={this.state.board}
      onSquareChange={this.handleSquareChange}/>


      <button onClick={this.handleButtonClick}>have you won?</button>

      <h2>{this.winMessage}</h2>
      </>
    )
  }




}

export default BoardContainer;
