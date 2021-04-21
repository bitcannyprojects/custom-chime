import _slicedToArray from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useContext, useState } from "react";
var AppStateContext = React.createContext();
export function useAppState() {
  var state = useContext(AppStateContext);

  if (!state) {
    throw new Error("useAppState must be used within AppStateProvider");
  }

  return state;
}
var query = new URLSearchParams(window.location.search);
export function AppStateProvider(_ref) {
  var children = _ref.children;

  var _useState = useState(query.get("meetingId") || ""),
      _useState2 = _slicedToArray(_useState, 2),
      meetingId = _useState2[0],
      setMeeting = _useState2[1];

  var _useState3 = useState(query.get("region") || ""),
      _useState4 = _slicedToArray(_useState3, 2),
      region = _useState4[0],
      setRegion = _useState4[1];

  var _useState5 = useState(""),
      _useState6 = _slicedToArray(_useState5, 2),
      localUserName = _useState6[0],
      setLocalName = _useState6[1];

  var _useState7 = useState(function () {
    var storedTheme = localStorage.getItem("theme");
    return storedTheme || "light";
  }),
      _useState8 = _slicedToArray(_useState7, 2),
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
  return /*#__PURE__*/React.createElement(AppStateContext.Provider, {
    value: providerValue
  }, children);
}