"use strict";

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCard = exports.SmallText = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

var SmallText = _styledComponents.default.small(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  color: rgba(0, 0, 0, 0.5);\n"])));

exports.SmallText = SmallText;

var StyledCard = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  .ch-body {\n    margin-bottom: 1rem;\n  }\n\n  .ch-header {\n    font-size: 1.5rem;\n  }\n\n  .ch-title {\n    font-size: 1.25rem;\n    margin-top: 1rem;\n  }\n\n  .ch-description {\n    margin: 1rem 0 1rem 0;\n  }\n"])));

exports.StyledCard = StyledCard;