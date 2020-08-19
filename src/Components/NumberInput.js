import React, {Component} from 'react';

class NumberInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: null
    }
  }

handleChange = (event) => {
    this.setState({"text": event.target.value});
  }
  
  render() {
    return(
      <li className="NumberInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-title">Number</div>
                <p className="card-text">
                  <div className="input btn-block">
                    <input type="number" className="textInput" onChange={this.handleChange}/>
                  </div>
                  <div className="output">
                    <label for="numberOutput">State: {this.state.text} </label>
                    <span name="numberOutput"></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
    );
  }
}

export default NumberInput;
