"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _AppStateProvider = require("../../providers/AppStateProvider");

var _Styled = require("./Styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MeetingDetails = function MeetingDetails() {
  var _useAppState = (0, _AppStateProvider.useAppState)(),
      meetingId = _useAppState.meetingId,
      toggleTheme = _useAppState.toggleTheme,
      theme = _useAppState.theme,
      session = _useAppState.session;

  var manager = (0, _amazonChimeSdkComponentLibraryReact.useMeetingManager)();
  return /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Flex, {
    container: true,
    layout: "fill-space-centered"
  }, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Flex, {
    mb: "2rem",
    mr: {
      md: "2rem"
    },
    px: "1rem"
  }, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Heading, {
    level: 4,
    tag: "h1",
    mb: 2
  }, "Meeting information"), /*#__PURE__*/_react.default.createElement(_Styled.StyledList, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("dt", null, "Meeting Topic"), /*#__PURE__*/_react.default.createElement("dd", null, session === null || session === void 0 ? void 0 : session.topic))), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.PrimaryButton, {
    mt: 4,
    label: theme === "light" ? "Dark mode" : "Light mode",
    onClick: toggleTheme
  })));
};

var _default = MeetingDetails;
exports.default = _default;