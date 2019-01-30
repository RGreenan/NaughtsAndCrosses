import React, {Component} from 'react';

class WonGameButton extends Component {
  constructor(props){
    super(props);

    this.winMessage = this.winMessage.bind(this);
  }

winMessage(){

}


render(){
  return(
    <>
    <button onClick={this.onButtonClick}>have you won?</button>
    </>
  )
}


}

export default WonGameButton;





  
