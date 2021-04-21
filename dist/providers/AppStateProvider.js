"use strict";

var _interopRequireWildcard = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAppState = useAppState;
exports.AppStateProvider = AppStateProvider;

var _slicedToArray2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var AppStateContext = /*#__PURE__*/_react.default.createContext();

function useAppState() {
  var state = (0, _react.useContext)(AppStateContext);

  if (!state) {
    throw new Error("useAppState must be used within AppStateProvider");
  }

  return state;
}

var query = new URLSearchParams(window.location.search);

function AppStateProvider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(query.get("meetingId") || ""),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      meetingId = _useState2[0],
      setMeeting = _useState2[1];

  var _useState3 = (0, _react.useState)(query.get("region") || ""),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      region = _useState4[0],
      setRegion = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      localUserName = _useState6[0],
      setLocalName = _useState6[1];

  var _useState7 = (0, _react.useState)(function () {
    var storedTheme = localStorage.getItem("theme");
    return storedTheme || "light";
  }),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      theme = _useState8[0],
      setTheme = _useState8[1];

  var toggleTheme = function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  var setAppMeetingInfo = function setAppMeetingInfo(meetingId, name, region) {
    if (region) setRegion(region);
    if (meetingId) setMeeting(meetingId);
    if (name) setLocalName(name);
  };

  var providerValue = {
    meetingId: meetingId,
    localUserName: localUserName,
    theme: theme,
    region: region,
    toggleTheme: toggleTheme,
    setAppMeetingInfo: setAppMeetingInfo
  };
  return /*#__PURE__*/_react.default.createElement(AppStateContext.Provider, {
    value: providerValue
  }, children);
}