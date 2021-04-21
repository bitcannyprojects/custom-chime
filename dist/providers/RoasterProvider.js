import _regeneratorRuntime from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _defineProperty from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import _toPropertyKey from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toPropertyKey";
import _asyncToGenerator from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useRef, useMemo, useContext } from "react";
import { DefaultModality } from "amazon-chime-sdk-js";
import { useMeetingManager } from "./MeetingProvider";
import { useAudioVideo } from "./AudioVideoProvider";
var RosterContext = React.createContext();

var RosterProvider = function RosterProvider(_ref) {
  var children = _ref.children;
  var meetingManager = useMeetingManager();
  var audioVideo = useAudioVideo();
  var rosterRef = useRef({});

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      roster = _useState2[0],
      setRoster = _useState2[1];

  useEffect(function () {
    if (!audioVideo) {
      return;
    }

    var rosterUpdateCallback = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(chimeAttendeeId, present, externalUserId) {
        var attendeeId, inRoster, attendee, externalData;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (present) {
                  _context.next = 4;
                  break;
                }

                delete rosterRef.current[chimeAttendeeId];
                setRoster(function (currentRoster) {
                  var _ = currentRoster[chimeAttendeeId],
                      rest = _objectWithoutProperties(currentRoster, [chimeAttendeeId].map(_toPropertyKey));

                  return _objectSpread({}, rest);
                });
                return _context.abrupt("return");

              case 4:
                attendeeId = new DefaultModality(chimeAttendeeId).base();

                if (!(attendeeId !== chimeAttendeeId)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return");

              case 7:
                inRoster = rosterRef.current[chimeAttendeeId];

                if (!inRoster) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return");

              case 10:
                attendee = {
                  chimeAttendeeId: chimeAttendeeId
                };

                if (externalUserId) {
                  attendee.externalUserId = externalUserId;
                }

                rosterRef.current[attendeeId] = attendee; // Update the roster first before waiting to fetch attendee info

                setRoster(function (oldRoster) {
                  return _objectSpread(_objectSpread({}, oldRoster), {}, _defineProperty({}, attendeeId, attendee));
                });

                if (!meetingManager.getAttendee) {
                  _context.next = 22;
                  break;
                }

                _context.next = 17;
                return meetingManager.getAttendee(attendeeId, externalUserId);

              case 17:
                externalData = _context.sent;

                if (rosterRef.current[attendeeId]) {
                  _context.next = 20;
                  break;
                }

                return _context.abrupt("return");

              case 20:
                attendee = _objectSpread(_objectSpread({}, attendee), externalData);
                setRoster(function (oldRoster) {
                  return _objectSpread(_objectSpread({}, oldRoster), {}, _defineProperty({}, attendeeId, attendee));
                });

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function rosterUpdateCallback(_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }();

    audioVideo.realtimeSubscribeToAttendeeIdPresence(rosterUpdateCallback);
    return function () {
      setRoster({});
      rosterRef.current = {};
      audioVideo.realtimeUnsubscribeToAttendeeIdPresence(rosterUpdateCallback);
    };
  }, [audioVideo]);
  var value = useMemo(function () {
    return {
      roster: roster
    };
  }, [roster]);
  return /*#__PURE__*/React.createElement(RosterContext.Provider, {
    value: value
  }, children);
};

function useRosterState() {
  var state = useContext(RosterContext);

  if (!state) {
    throw new Error("userRosterState must be used within RosterProvider");
  }

  return state;
}

export { RosterProvider, useRosterState };