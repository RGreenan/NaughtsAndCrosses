import React, {Component} from 'react';

class Square extends Component{
  constructor(props){
    super(props);

    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  handleDropdownChange(event){
    console.log(event.target.value, this.props.id);
    this.props.handleChange(event.target.value, this.props.id);
  }

  render() {
    return (
      <div className="squares" >
        <p>square ID:{this.props.id}</p>
        <p>square content: {this.props.content}</p>

        <select defaultValue="default"
        onChange={this.handleDropdownChange}>
          <option disabled value="default"> </option>
          <option value="X"> "X" </option>
          <option value="O"> "O" </option>

        </select>
      </div>
    )}
  }

  export default Square;
