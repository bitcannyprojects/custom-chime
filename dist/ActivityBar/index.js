"use strict";

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

var Track = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  width: 100%;\n  height: 0.625rem;\n  background-color: #ecf0f1;\n  border-radius: 0.25rem;\n"])));

var Progress = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  height: 0.625rem;\n  background-color: #18bc9c;\n  border-radius: 0.25rem;\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 33ms ease-in-out;\n  will-change: transform;\n"])));

var ActivityBar = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(Track, null, /*#__PURE__*/_react.default.createElement(Progress, {
    ref: ref
  }));
});

var _default = ActivityBar;
exports.default = _default;