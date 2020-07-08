"use strict";

console.log('App is running');
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer'
};
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item one"), /*#__PURE__*/React.createElement("li", null, "Item two")));
var count = 0;

var addOne = function addOne() {
  count++;
  console.log('addOne', count);
};

var minusOne = function minusOne() {
  console.log('minusOne');
};

var reset = function reset() {
  console.log('reset');
};

var template2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count: ", count), /*#__PURE__*/React.createElement("button", {
  onClick: addOne
}, "+1"), /*#__PURE__*/React.createElement("button", {
  onClick: minusOne
}, "-1"), /*#__PURE__*/React.createElement("button", {
  onClick: reset
}, "Reset"));
var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);
