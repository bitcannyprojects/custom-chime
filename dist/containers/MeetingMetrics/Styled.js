"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledMetrics = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledMetrics = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  top: auto;\n  right: 0.5rem;\n  min-width: 7.5rem;\n  z-index: 5;\n  bottom: 1rem;\n\n  .metric {\n    white-space: nowrap;\n    font-size: 0.75rem;\n    margin-bottom: 0.375rem;\n\n    &.title {\n      font-weight: bold;\n    }\n  }\n"])));

exports.StyledMetrics = StyledMetrics;