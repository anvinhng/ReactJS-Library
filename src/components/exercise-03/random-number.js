import React from "react";
import './random-number.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export class NumGenerator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        min: 1,
        max: 10,
        number: 1
      }
    }
  
    componentDidMount() {
     this.setState({ number: this.generateNumber(this.state.min, this.state.max)})
    }
    
    minChange = (event) => {
      this.setState({ min: event.target.value})
    }
    
    maxChange = (event) => {
      this.setState({ max: event.target.value})
    }
    
    generateNumber = (min, max) => {
      return Math.floor(Math.random()*(max-min+1)+min)
    }
    
    getInputs = () => {
      if(this.state.min > this.state.max ){
        const minTemp = this.state.min
        const maxTemp = this.state.max
        this.setState(
        { 
          min: maxTemp,
          max: minTemp
        }, () =>
          this.setState({
            number: this.generateNumber(this.state.min, this.state.max)  
          })
        );
      } else {
        this.setState({
          number: this.generateNumber(this.state.min, this.state.max)  
        })
      }
    }
    
    render() {
      return (
        <div id="generator">
          <div id="title">Random Number Generator</div>
          <div className="row">
            <p id="rNum">{ this.state.number }</p>
            <div>
                <div id="inputContainer">
                <div id="headers"> 
                <p>Min</p>
                <p>Max</p>
                </div>
                <div id="inputs">
                    <input id="min" min="-9999999999" max="9999999999" type="number" value={ this.state.min } onChange={this.minChange} />
                    <input id="max" min="-9999999999" max="9999999999" type="number" value={ this.state.max } onChange={this.maxChange} />   
                </div>
            </div>
          </div>
          
          
           
          </div>
          <button className="btn-primary" id="generate" type="submit" onClick={ this.getInputs }>Generate Number</button>
        </div>
      );
    }
  }
  