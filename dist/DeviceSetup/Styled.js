"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLayout = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledLayout = _styledComponents.default.main(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100%;\n  max-width: 85rem;\n  padding: 2rem;\n  margin: auto;\n\n  @media (max-width: 760px) {\n    border-right: unset;\n    align-items: unset;\n    justify-content: unset;\n  }\n"])));

exports.StyledLayout = StyledLayout;