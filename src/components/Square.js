import React, {Component} from 'react';

class Square extends Component{
  render() {
    return (
      <div className="squares">
        <p>square ID:{this.props.id}</p>
        <p>square content: {this.props.content}</p>
      </div>
    )}
  }

  export default Square;
