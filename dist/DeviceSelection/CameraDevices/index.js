"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _Styled = require("../Styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CameraDevices = function CameraDevices() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Heading, {
    tag: "h2",
    level: 6,
    css: _Styled.title
  }, "Video"), /*#__PURE__*/_react.default.createElement(_Styled.StyledInputGroup, null, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.CameraSelection, null)), /*#__PURE__*/_react.default.createElement(_Styled.StyledInputGroup, null, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.QualitySelection, null)), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Label, {
    style: {
      display: "block",
      marginBottom: ".5rem"
    }
  }, "Video preview"), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.PreviewVideo, null));
};

var _default = CameraDevices;
exports.default = _default;