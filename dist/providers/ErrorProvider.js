import _slicedToArray from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from "react";
var context = React.createContext({
  errorMessage: "",
  updateErrorMessage: function updateErrorMessage() {}
});
export function getErrorContext() {
  return context;
}
export default function ErrorProvider(_ref) {
  var children = _ref.children;

  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
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
  return /*#__PURE__*/React.createElement(ErrorContext.Provider, {
    value: providerValue
  }, children);
}