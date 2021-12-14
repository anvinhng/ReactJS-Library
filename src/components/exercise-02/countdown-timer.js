import React from 'react';
import './countdown-timer.css'

export default class Clock extends React.Component {
    format(time) {
      let seconds = time % 60;
      let minutes = Math.floor(time / 60);
      minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
      seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
      return minutes + ':' + seconds;
    }
    render () {
      const {time} = this.props;
      return (
        <div className="displayedTime">
          <h1>{this.format(time)}</h1>
        </div>
      )
    }
  }
  
  class Input extends React.Component {
    
    onSubmit(event) {
      event.preventDefault();
      const strSeconds = this.refs.seconds.value;
      if(strSeconds.match(/[0-9]/)) {
        this.refs.seconds.value = '';
        this.props.onSetCountdown(parseInt(strSeconds, 10));
      }
    }
    
    render() {
      return (
        <form ref="form" onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <input type="submit" value="Start"></input>
        </form>
      )
    }
  }
  
  class Button extends React.Component {
    render() {
      return (
          <button onClick={this.props.onClickHandler}>{this.props.label}</button>    
      );
    }
  }
  
  export class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        running: false,
      }
    }
    
    componentDidUpdate(prevProps, prevState) {
      if(this.state.running !== prevState.running){
        switch(this.state.running) {
          case true:
            this.handleStart();
            break;
          default:
            return            
        }
      };   
    }

    handleStart() {
      this.timer = setInterval(() => {
        const newCount = this.state.count - 1;
        this.setState(
          {count: newCount >= 0 ? newCount : 0}
        );
      }, 1000);
    }
    
    handleStop() {
      if(this.timer) {
        clearInterval(this.timer);
        this.setState(
          {running:false}
        )
      }
    }
    
    handleReset() {
      this.setState(
        {count: 0}
      );
    }
    
    handleCountdown(seconds) {
      this.setState({
        count: seconds,
        running: true
      })
    }

    componentWillUnmount(){
      if(this.prevState.count === 1) {
        clearInterval(this.timer);
        this.setState(
          {running:false}
        );
          alert('Time is up');
          console.log('time is up')
      }
    }
    
    render() {
      const {count} = this.state;
      return (
        <div className="container">
          <Clock time={count}/>
          <Input onSetCountdown={this.handleCountdown.bind(this)}/>
          <Button label="Stop" onClickHandler={this.handleStop.bind(this)}/><br/>
          <Button label="Reset" onClickHandler={this.handleReset.bind(this)}/>
        </div>
      )
    }
  }
