"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAppState = useAppState;
exports.AppStateProvider = AppStateProvider;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
      _useState2 = _slicedToArray(_useState, 2),
      meetingId = _useState2[0],
      setMeeting = _useState2[1];

  var _useState3 = (0, _react.useState)(query.get("region") || ""),
      _useState4 = _slicedToArray(_useState3, 2),
      region = _useState4[0],
      setRegion = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      localUserName = _useState6[0],
      setLocalName = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      chimeAttendeeId = _useState8[0],
      setChimeAttendeeId = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      session = _useState10[0],
      setSession = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      userRole = _useState12[0],
      setUserRole = _useState12[1];

  var _useState13 = (0, _react.useState)(function () {
    var storedTheme = localStorage.getItem("theme");
    return storedTheme || "light";
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      theme = _useState14[0],
      setTheme = _useState14[1];

  var toggleTheme = function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  var setAppMeetingInfo = function setAppMeetingInfo(data) {
    var meetingId = data.meetingId,
        name = data.name,
        region = data.region,
        role = data.role,
        chimeAttendeeId = data.chimeAttendeeId,
        session = data.session; // console.log(411, data);
    // console.log({ chimeAttendeeId });

    if (region) setRegion(region);
    if (meetingId) setMeeting(meetingId);
    if (name) setLocalName(name);
    if (chimeAttendeeId) setChimeAttendeeId(chimeAttendeeId);
    if (role) setUserRole(role);
    if (session) setSession(session);
  };

  var providerValue = {
    meetingId: meetingId,
    localUserName: localUserName,
    userRole: userRole,
    chimeAttendeeId: chimeAttendeeId,
    theme: theme,
    region: region,
    toggleTheme: toggleTheme,
    setAppMeetingInfo: setAppMeetingInfo,
    session: session
  };
  return /*#__PURE__*/_react.default.createElement(AppStateContext.Provider, {
    value: providerValue
  }, children);
}