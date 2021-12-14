import React from 'react'
import './tic-tac-toe.css'

export default function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }