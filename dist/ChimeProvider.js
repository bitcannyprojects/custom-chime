"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RootProvider = RootProvider;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _AppStateProvider = require("./providers/AppStateProvider");

var _Notifications = _interopRequireDefault(require("./containers/Notifications"));

var _ErrorProvider = _interopRequireDefault(require("./providers/ErrorProvider"));

var _NavigationProvider = require("./providers/NavigationProvider");

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Theme = function Theme(_ref) {
  var children = _ref.children;

  var _useAppState = (0, _AppStateProvider.useAppState)(),
      theme = _useAppState.theme;

  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: theme === "light" ? _amazonChimeSdkComponentLibraryReact.lightTheme : _amazonChimeSdkComponentLibraryReact.darkTheme
  }, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.GlobalStyles, null), children);
};

function RootProvider(props) {
  return /*#__PURE__*/_react.default.createElement(_AppStateProvider.AppStateProvider, null, /*#__PURE__*/_react.default.createElement(Theme, null, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.NotificationProvider, null, /*#__PURE__*/_react.default.createElement(_Notifications.default, null), /*#__PURE__*/_react.default.createElement(_ErrorProvider.default, null, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.MeetingProvider, null, /*#__PURE__*/_react.default.createElement(_NavigationProvider.NavigationProvider, null, props.children))))));
}

var _default = RootProvider;
exports.default = _default;