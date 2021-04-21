"use strict";

var _interopRequireWildcard = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getErrorContext = getErrorContext;
exports.default = ErrorProvider;

var _slicedToArray2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var context = /*#__PURE__*/_react.default.createContext({
  errorMessage: "",
  updateErrorMessage: function updateErrorMessage() {}
});

function getErrorContext() {
  return context;
}

function ErrorProvider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(""),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      errorMessage = _useState2[0],
      setErrorMesage = _useState2[1];

  var ErrorContext = getErrorContext();

  var updateErrorMessage = function updateErrorMessage(message) {
    setErrorMesage(message);
  };

  var providerValue = {
    errorMessage: errorMessage,
    updateErrorMessage: updateErrorMessage
  };
  return /*#__PURE__*/_react.default.createElement(ErrorContext.Provider, {
    value: providerValue
  }, children);
}