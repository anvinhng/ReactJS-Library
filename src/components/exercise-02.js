import './exercise-02.css';
import React from 'react';

class Exercise02 extends React.Component {
    state = {date: new Date()}
  
    render() {
      return (
        <div class="date">
            <h1>Hello, I am Clock</h1>
          <h4>Now is <span> {this.state.date.toLocaleTimeString()}</span></h4>
        </div>
      );
    }
  }

export default Exercise02;