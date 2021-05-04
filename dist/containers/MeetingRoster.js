"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _NavigationProvider = require("../providers/NavigationProvider");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MeetingRoster = function MeetingRoster() {
  var _useRosterState = (0, _amazonChimeSdkComponentLibraryReact.useRosterState)(),
      roster = _useRosterState.roster;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var _useNavigation = (0, _NavigationProvider.useNavigation)(),
      closeRoster = _useNavigation.closeRoster;

  console.log({
    roster: roster
  });
  var attendees = Object.values(roster);
  console.log("roasterattendee", attendees);

  if (filter) {
    attendees = attendees.filter(function (attendee) {
      return attendee === null || attendee === void 0 ? void 0 : attendee.name.toLowerCase().includes(filter.trim().toLowerCase());
    });
  }

  var handleSearch = function handleSearch(e) {
    setFilter(e.target.value);
  };

  var Menu = function Menu() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        padding: ".5rem 1rem",
        cursor: "pointer"
      }
    }, "Message user"), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        padding: ".5rem 1rem",
        cursor: "pointer"
      }
    }, "Kick user"));
  };

  var attendeeItems = attendees.map(function (attendee) {
    var _ref = attendee || {},
        chimeAttendeeId = _ref.chimeAttendeeId,
        name = _ref.name;

    return (
      /*#__PURE__*/
      // <RosterCell key={chimeAttendeeId} name={name} />
      _react.default.createElement(_amazonChimeSdkComponentLibraryReact.RosterAttendee, {
        key: chimeAttendeeId,
        attendeeId: chimeAttendeeId,
        menu: /*#__PURE__*/_react.default.createElement(Menu, null)
      })
    );
  });
  return /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Roster, {
    className: "roster"
  }, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.RosterHeader, {
    searchValue: filter,
    onSearch: handleSearch,
    onClose: closeRoster,
    title: "Present",
    badge: attendees.length
  }), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.RosterGroup, null, attendeeItems));
};

var _default = MeetingRoster;
exports.default = _default;