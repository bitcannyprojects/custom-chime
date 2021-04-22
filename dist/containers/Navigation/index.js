"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _NavigationProvider = require("../../providers/NavigationProvider");

var _AppStateProvider = require("../../providers/AppStateProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function Navigation() {
  var _useNavigation = (0, _NavigationProvider.useNavigation)(),
      toggleRoster = _useNavigation.toggleRoster,
      toggleMetrics = _useNavigation.toggleMetrics,
      closeNavbar = _useNavigation.closeNavbar;

  var _useAppState = (0, _AppStateProvider.useAppState)(),
      theme = _useAppState.theme,
      toggleTheme = _useAppState.toggleTheme;

  return /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Navbar, {
    className: "nav",
    flexDirection: "column",
    container: true
  }, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.NavbarHeader, {
    title: "Navigation",
    onClose: closeNavbar
  }), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.NavbarItem, {
    icon: /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Attendees, null),
    onClick: toggleRoster,
    label: "Attendees"
  }), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.NavbarItem, {
    icon: /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Eye, null),
    onClick: toggleTheme,
    label: theme === "light" ? "Dark mode" : "Light mode"
  }), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.NavbarItem, {
    icon: /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Information, null),
    onClick: toggleMetrics,
    label: "Meeting metrics"
  }));
};

var _default = Navigation;
exports.default = _default;