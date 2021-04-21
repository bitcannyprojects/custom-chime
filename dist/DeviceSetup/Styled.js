"use strict";

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLayout = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledLayout = _styledComponents.default.main(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100%;\n  max-width: 85rem;\n  padding: 2rem;\n  margin: auto;\n\n  @media (max-width: 760px) {\n    border-right: unset;\n    align-items: unset;\n    justify-content: unset;\n  }\n"])));

exports.StyledLayout = StyledLayout;