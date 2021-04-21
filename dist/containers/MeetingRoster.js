import _slicedToArray from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from "react";
import { Roster, RosterHeader, RosterGroup, useRosterState, RosterAttendee } from "amazon-chime-sdk-component-library-react";
import { useNavigation } from "../providers/NavigationProvider";

var MeetingRoster = function MeetingRoster() {
  var _useRosterState = useRosterState(),
      roster = _useRosterState.roster;

  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var _useNavigation = useNavigation(),
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

    return /*#__PURE__*/React.createElement(RosterAttendee, {
      key: chimeAttendeeId,
      attendeeId: chimeAttendeeId
    });
  });
  return /*#__PURE__*/React.createElement(Roster, {
    className: "roster"
  }, /*#__PURE__*/React.createElement(RosterHeader, {
    searchValue: filter,
    onSearch: handleSearch,
    onClose: closeRoster,
    title: "Present",
    badge: attendees.length
  }), /*#__PURE__*/React.createElement(RosterGroup, null, attendeeItems));
};

export default MeetingRoster;