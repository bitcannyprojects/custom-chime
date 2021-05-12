"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _AppStateProvider = require("../providers/AppStateProvider");

var _NavigationProvider = require("../providers/NavigationProvider");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MeetingRoster = function MeetingRoster() {
  var meetingManager = (0, _amazonChimeSdkComponentLibraryReact.useMeetingManager)();

  var _useRosterState = (0, _amazonChimeSdkComponentLibraryReact.useRosterState)(),
      roster = _useRosterState.roster;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var _useNavigation = (0, _NavigationProvider.useNavigation)(),
      closeRoster = _useNavigation.closeRoster;

  var _useToggleLocalMute = (0, _amazonChimeSdkComponentLibraryReact.useToggleLocalMute)(),
      muted1 = _useToggleLocalMute.muted,
      toggleMute = _useToggleLocalMute.toggleMute;

  var audioVideo = (0, _amazonChimeSdkComponentLibraryReact.useAudioVideo)();

  var _useAppState = (0, _AppStateProvider.useAppState)(),
      localUserName = _useAppState.localUserName,
      chimeAttendeeId = _useAppState.chimeAttendeeId,
      userRole = _useAppState.userRole,
      session = _useAppState.session;

  console.log({
    roster: roster
  }); // const isAttendee

  var attendees = Object.values(roster); // console.log("roasterattendee", attendees);

  var receiveActionData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(mess) {
      var data, attendeeId, _attendeeId, _attendeeId2;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              data = JSON.parse(mess.text());
              console.log(data);

              if (!(data.action === "kick")) {
                _context.next = 11;
                break;
              }

              attendeeId = data.chimeAttendeeId;

              if (!(chimeAttendeeId === attendeeId)) {
                _context.next = 9;
                break;
              }

              _context.next = 8;
              return meetingManager.leave();

            case 8:
              // props.history.push("/");
              window.location.href = "/";

            case 9:
              _context.next = 12;
              break;

            case 11:
              if (data.action === "mute") {
                _attendeeId = data.chimeAttendeeId;

                if (chimeAttendeeId === _attendeeId) {
                  !muted1 && toggleMute();
                }
              } else if (data.action === "unmute") {
                _attendeeId2 = data.chimeAttendeeId;

                if (chimeAttendeeId === _attendeeId2) {
                  muted1 && toggleMute();
                }
              }

            case 12:
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
    }));

    return function receiveActionData(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    // console.log("ACTION! open");
    audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeSubscribeToReceiveDataMessage("ACTION", receiveActionData);
    return function () {
      // console.log("ACTION! end");
      audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeUnsubscribeFromReceiveDataMessage("ACTION");
    };
  }, [muted1]);

  if (filter) {
    attendees = attendees.filter(function (attendee) {
      return attendee === null || attendee === void 0 ? void 0 : attendee.name.toLowerCase().includes(filter.trim().toLowerCase());
    });
  }

  var handleSearch = function handleSearch(e) {
    setFilter(e.target.value);
  };

  var Menu = function Menu(_ref2) {
    var chimeAttendeeId = _ref2.chimeAttendeeId;

    var _useAttendeeAudioStat = (0, _amazonChimeSdkComponentLibraryReact.useAttendeeAudioStatus)(chimeAttendeeId),
        muted = _useAttendeeAudioStat.muted,
        signalStrength = _useAttendeeAudioStat.signalStrength;

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        padding: ".5rem 1rem",
        cursor: "pointer"
      },
      onClick: function onClick() {
        try {
          audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeSendDataMessage("ACTION", JSON.stringify({
            chimeAttendeeId: chimeAttendeeId,
            action: muted ? "unmute" : "mute"
          }));
        } catch (error) {
          console.log(error);
        }
      }
    }, muted ? "Unmute user" : "Mute user"), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        padding: ".5rem 1rem",
        cursor: "pointer"
      },
      onClick: function onClick() {
        try {
          audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeSendDataMessage("ACTION", JSON.stringify({
            chimeAttendeeId: chimeAttendeeId,
            action: "kick"
          }));
        } catch (error) {
          console.log(error);
        }
      }
    }, "Kick user"));
  };

  var attendeeItems = attendees.map(function (attendee) {
    var _ref3 = attendee || {},
        chimeAttendeeId = _ref3.chimeAttendeeId,
        name = _ref3.name;

    if ((session === null || session === void 0 ? void 0 : session.type) === "breakout" || !((userRole === null || userRole === void 0 ? void 0 : userRole.length) === 1 && userRole.includes("attendee"))) {
      return /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.RosterAttendee, {
        key: chimeAttendeeId,
        attendeeId: chimeAttendeeId
      });
    }

    return (
      /*#__PURE__*/
      // <RosterCell key={chimeAttendeeId} name={name} />
      _react.default.createElement(_amazonChimeSdkComponentLibraryReact.RosterAttendee, {
        key: chimeAttendeeId,
        attendeeId: chimeAttendeeId,
        menu: /*#__PURE__*/_react.default.createElement(Menu, {
          chimeAttendeeId: chimeAttendeeId
        })
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