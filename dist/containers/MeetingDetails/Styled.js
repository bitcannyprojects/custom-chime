"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledList = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledList = _styledComponents.default.dl(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: 1rem;\n\n  dt {\n    display: inline-block;\n    margin-bottom: 0.75rem;\n    margin-right: 0.5rem;\n\n    &::after {\n      content: \":\";\n    }\n  }\n\n  dd {\n    display: inline-block;\n    font-weight: 600;\n  }\n"])));

exports.StyledList = StyledList;