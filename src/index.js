import React from "react"; 
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./App";
import "./index.css";

// btn btn-danger: predefined  css class from the bootstrap.css file
// var element = <button class = "btn btn-danger">Hello World</button>;
// ReactDOM.render(element, document.getElementById("root")); //rendering inside the root folder
// console.log(element); //shows the value on the console

ReactDOM.render(<NavBar/>, document.getElementById("root"));
