//Import React
//class declaration
//constructor function
//handleChange function
//render function
//Within render there must be an event handler that calls handleChange
//export statement at the end

import React, {Component} from 'react';

class ColorInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: ""
    }
  };//end constructor

  handleChange = (event) => {
   this.setState({text: event.target.value});
   document.getElementById("box").style.backgroundColor = event.target.value;
  }//end handleChange


  render(){
    return(
      <li className="ColorInput cards-item">
            <div className="card">
              <div className="card-content">
                <div class="card-image" id="box"> 
                </div>
                <div className="card-title">Color</div>
                <p className="card-text">
                  <div className="input btn-block">
                    <input type="color" className="colorButton" onChange={this.handleChange}/>
                  </div>
                  <div className="output" >
                    <label for="colorOutput">State: {this.state.text} </label>
                    <span name="colorOutput"></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
    );//end return
  }//end render
}//end class

export default ColorInput;