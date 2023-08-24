import React from 'react';
import ReactDOM from 'react-dom';

const time = new Date().getFullYear();

ReactDOM.render(
  <h1>Hello {time}</h1>,
  document.getElementById("root")
)

