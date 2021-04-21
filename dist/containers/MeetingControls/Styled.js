"use strict";

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledControls = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledControls = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  opacity: ", ";\n  transition: opacity 250ms ease;\n\n  @media screen and (max-width: 768px) {\n    opacity: 1;\n  }\n\n  .controls-menu {\n    width: 100%;\n    position: static;\n  }\n"])), function (props) {
  return props.active ? "1" : "0";
});

exports.StyledControls = StyledControls;