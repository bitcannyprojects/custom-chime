"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledControls = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledControls = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  opacity: ", ";\n  transition: opacity 250ms ease;\n\n  @media screen and (max-width: 768px) {\n    opacity: 1;\n  }\n\n  .controls-menu {\n    width: 100%;\n    position: static;\n  }\n"])), function (props) {
  return props.active ? "1" : "0";
});

exports.StyledControls = StyledControls;