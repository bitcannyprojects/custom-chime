"use strict";

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledMetrics = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledMetrics = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  min-width: 7.5rem;\n  z-index: 5;\n\n  .metric {\n    white-space: nowrap;\n    font-size: 0.75rem;\n    margin-bottom: 0.375rem;\n\n    &.title {\n      font-weight: bold;\n    }\n  }\n"])));

exports.StyledMetrics = StyledMetrics;