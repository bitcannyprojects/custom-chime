"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _EndMeetingControl = _interopRequireDefault(require("../EndMeetingControl"));

var _NavigationProvider = require("../../providers/NavigationProvider");

var _AppStateProvider = require("../../providers/AppStateProvider");

var _Styled = require("./Styled.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MeetingControls = function MeetingControls(_ref) {
  var toggleFullScreen = _ref.toggleFullScreen;

  var _useNavigation = (0, _NavigationProvider.useNavigation)(),
      toggleNavbar = _useNavigation.toggleNavbar,
      closeRoster = _useNavigation.closeRoster,
      showRoster = _useNavigation.showRoster;

  var _useUserActivityState = (0, _amazonChimeSdkComponentLibraryReact.useUserActivityState)(),
      isUserActive = _useUserActivityState.isUserActive;

  var _useAppState = (0, _AppStateProvider.useAppState)(),
      userRole = _useAppState.userRole,
      session = _useAppState.session;

  var handleToggle = function handleToggle() {
    if (showRoster) {
      closeRoster();
    }

    toggleNavbar();
  };

  return /*#__PURE__*/_react.default.createElement(_Styled.StyledControls, {
    className: "controls",
    active: !!isUserActive
  }, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ControlBar, {
    className: "controls-menu",
    layout: "undocked-horizontal",
    showLabels: true
  }, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ControlBarButton, {
    className: "mobile-toggle",
    icon: /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Dots, null),
    onClick: handleToggle,
    label: "Menu"
  }), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.AudioInputControl, null), ((session === null || session === void 0 ? void 0 : session.type) === "breakout" || !((userRole === null || userRole === void 0 ? void 0 : userRole.length) === 1 && userRole.includes("attendee"))) && /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.VideoInputControl, null), ((session === null || session === void 0 ? void 0 : session.type) === "breakout" || !((userRole === null || userRole === void 0 ? void 0 : userRole.length) === 1 && userRole.includes("attendee"))) && /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ContentShareControl, null), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ControlBarButton, {
    className: "full-screen-toggle",
    icon: /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Eye, null),
    onClick: toggleFullScreen,
    label: "FS"
  }), /*#__PURE__*/_react.default.createElement(_EndMeetingControl.default, null)));
};

var _default = MeetingControls;
exports.default = _default;