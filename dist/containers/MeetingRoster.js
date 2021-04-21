"use strict";

var _interopRequireWildcard = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _NavigationProvider = require("../providers/NavigationProvider");

var MeetingRoster = function MeetingRoster() {
  var _useRosterState = (0, _amazonChimeSdkComponentLibraryReact.useRosterState)(),
      roster = _useRosterState.roster;

  var _useState = (0, _react.useState)(""),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var _useNavigation = (0, _NavigationProvider.useNavigation)(),
      closeRoster = _useNavigation.closeRoster;

  console.log({
    roster: roster
  });
  var attendees = Object.values(roster);

  if (filter) {
    attendees = attendees.filter(function (attendee) {
      return attendee === null || attendee === void 0 ? void 0 : attendee.name.toLowerCase().includes(filter.trim().toLowerCase());
    });
  }

  var handleSearch = function handleSearch(e) {
    setFilter(e.target.value);
  };

  var attendeeItems = attendees.map(function (attendee) {
    var _ref = attendee || {},
        chimeAttendeeId = _ref.chimeAttendeeId;

    return /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.RosterAttendee, {
      key: chimeAttendeeId,
      attendeeId: chimeAttendeeId
    });
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