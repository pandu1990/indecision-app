"use strict";

console.log('App is running'); //JSX - JavaScript XML

var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Indecision App"), /*#__PURE__*/React.createElement("p", null, "This is some info"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item one"), /*#__PURE__*/React.createElement("li", null, "Item two")));
var appRoot = document.getElementById('app');
var user = {
  name: 'Pandurang',
  age: 30,
  location: 'Los Angeles'
};
var template2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, user.name), /*#__PURE__*/React.createElement("p", null, "Age: ", user.age), /*#__PURE__*/React.createElement("p", null, "Location: ", user.location));
ReactDOM.render(template2, app);
