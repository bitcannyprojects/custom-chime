"use strict";

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledList = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledList = _styledComponents.default.dl(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 1rem;\n\n  dt {\n    display: inline-block;\n    margin-bottom: 0.75rem;\n    margin-right: 0.5rem;\n\n    &::after {\n      content: \":\";\n    }\n  }\n\n  dd {\n    display: inline-block;\n    font-weight: 600;\n  }\n"])));

exports.StyledList = StyledList;