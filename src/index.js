// jshint esversion: 6

/*
CIT 382 Winter 2019 Assignment 1
Author: Sean C. Ericksen
Partner: Edward Snowden
Description:
Working with React, JSX and ES6
*/

import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const name = "Sean";
const data = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function Greeting(props) {
  console.log(props.name);
  return (
    <div>
      <h1>Hello, {props.name} </h1>
    </div>
  );
}

class FirstClass extends React.Component {
  render() {
    return <div>Class component prop data: {this.props.data}</div>;
  }
}

function ArrayToDiv(props) {
  console.log(props.array);
  let output = []; //empty array for output

  //selects only 6 items from array to display
  for (let i = 0; i < 6; i++) {
    output.push(props.array[i]);
  }

  // verifies array exists
  if (!props.array) {
    return <div />;
    // has items in array
  } else if (props.array.length == 0) {
    return <div />;
    // lists array items in a JSX element separated by a page break
  } else {
    return (output = output.map(function(i) {
      return (
        <div key={i}>
          {i} <br />
        </div>
      );
    }));
  }
}
console.log(<ArrayToDiv array={data} />);
function App(props) {
  function pop(input) {
    let output = [];
    return (output = input.props.array.map(function(i) {
      output = <option key={i}>{i}</option>;
      return output;
    }));
  }
  return (
    <div id="wrapper">
      {props.input1}
      <h2>Static List</h2>
      <br />
      {props.input3}
      <h2>HTML Elements</h2>
      Static Text <br /> Input Box:
      <input type="text" />
      <br />
      Checkbox: <input type="checkbox" />
      <br />
      Radio:
      <input type="radio" /> Up &nbsp; <input type="radio" /> Down
      <br />
      Text Area: <br />
      <textarea name="text" id="text1" cols="30" rows="5" /> <br />
      <button className="button">Button</button> <br />
      <br />
      Dropdown: <select defaultValue="N/A">{pop(props.input3)}</select>
      <br />
      <br />
      List: <br />
      <select name="months" size="5">
        {pop(props.input3)}
      </select>
      <h2>Use Class Component</h2>
      {props.input2}
    </div>
  );
}

const rootElement = document.getElementById("root");

/*
ReactDOM.render(<Greeting name={name} />, rootElement);
ReactDOM.render(<FirstClass data="Test" />, rootElement);
ReactDOM.render(<ArrayToDiv array={data} />, rootElement);
*/

ReactDOM.render(
  <App
    input1={<Greeting name={name} />}
    input2={<FirstClass data="Test" />}
    input3={<ArrayToDiv array={data} />}
  />,
  rootElement
);
