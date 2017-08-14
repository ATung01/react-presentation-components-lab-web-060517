// Code SimplerComponentHere Here
import React from 'react'

let handleClick = () => {
  console.log("sup?")
}

const SimplerComponent = (props) => <div onClick={props.handleClick}>"I am just happy"</div>;

export default SimplerComponent
