"use strict";

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _MeetingRoster = _interopRequireDefault(require("../MeetingRoster"));

var _ = _interopRequireDefault(require("."));

var _NavigationProvider = require("../../providers/NavigationProvider");

var NavigationControl = function NavigationControl() {
  var _useNavigation = (0, _NavigationProvider.useNavigation)(),
      showNavbar = _useNavigation.showNavbar,
      showRoster = _useNavigation.showRoster;

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showNavbar ? /*#__PURE__*/_react.default.createElement(_.default, null) : null, showRoster ? /*#__PURE__*/_react.default.createElement(_MeetingRoster.default, null) : null);
};

var _default = NavigationControl;
exports.default = _default;