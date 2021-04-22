"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Track = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 0.625rem;\n  background-color: #ecf0f1;\n  border-radius: 0.25rem;\n"])));

var Progress = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 0.625rem;\n  background-color: #18bc9c;\n  border-radius: 0.25rem;\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 33ms ease-in-out;\n  will-change: transform;\n"])));

var ActivityBar = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(Track, null, /*#__PURE__*/_react.default.createElement(Progress, {
    ref: ref
  }));
});

var _default = ActivityBar;
exports.default = _default;