"use strict";

var _interopRequireWildcard = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRosterState = useRosterState;
exports.RosterProvider = void 0;

var _regenerator = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _objectSpread4 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _toPropertyKey2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toPropertyKey"));

var _asyncToGenerator2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _amazonChimeSdkJs = require("amazon-chime-sdk-js");

var _MeetingProvider = require("./MeetingProvider");

var _AudioVideoProvider = require("./AudioVideoProvider");

var RosterContext = /*#__PURE__*/_react.default.createContext();

var RosterProvider = function RosterProvider(_ref) {
  var children = _ref.children;
  var meetingManager = (0, _MeetingProvider.useMeetingManager)();
  var audioVideo = (0, _AudioVideoProvider.useAudioVideo)();
  var rosterRef = (0, _react.useRef)({});

  var _useState = (0, _react.useState)({}),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      roster = _useState2[0],
      setRoster = _useState2[1];

  (0, _react.useEffect)(function () {
    if (!audioVideo) {
      return;
    }

    var rosterUpdateCallback = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(chimeAttendeeId, present, externalUserId) {
        var attendeeId, inRoster, attendee, externalData;
        return _regenerator.default.wrap(function _callee$(_context) {
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
                      rest = (0, _objectWithoutProperties2.default)(currentRoster, [chimeAttendeeId].map(_toPropertyKey2.default));
                  return (0, _objectSpread4.default)({}, rest);
                });
                return _context.abrupt("return");

              case 4:
                attendeeId = new _amazonChimeSdkJs.DefaultModality(chimeAttendeeId).base();

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
                  return (0, _objectSpread4.default)((0, _objectSpread4.default)({}, oldRoster), {}, (0, _defineProperty2.default)({}, attendeeId, attendee));
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
                attendee = (0, _objectSpread4.default)((0, _objectSpread4.default)({}, attendee), externalData);
                setRoster(function (oldRoster) {
                  return (0, _objectSpread4.default)((0, _objectSpread4.default)({}, oldRoster), {}, (0, _defineProperty2.default)({}, attendeeId, attendee));
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
  var value = (0, _react.useMemo)(function () {
    return {
      roster: roster
    };
  }, [roster]);
  return /*#__PURE__*/_react.default.createElement(RosterContext.Provider, {
    value: value
  }, children);
};

exports.RosterProvider = RosterProvider;

function useRosterState() {
  var state = (0, _react.useContext)(RosterContext);

  if (!state) {
    throw new Error("userRosterState must be used within RosterProvider");
  }

  return state;
}