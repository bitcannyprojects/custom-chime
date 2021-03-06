"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRosterState = useRosterState;
exports.RosterProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _amazonChimeSdkJs = require("amazon-chime-sdk-js");

var _MeetingProvider = require("./MeetingProvider");

var _AudioVideoProvider = require("./AudioVideoProvider");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RosterContext = /*#__PURE__*/_react.default.createContext();

var RosterProvider = function RosterProvider(_ref) {
  var children = _ref.children;
  var meetingManager = (0, _MeetingProvider.useMeetingManager)();
  var audioVideo = (0, _AudioVideoProvider.useAudioVideo)();
  var rosterRef = (0, _react.useRef)({});

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      roster = _useState2[0],
      setRoster = _useState2[1];

  (0, _react.useEffect)(function () {
    if (!audioVideo) {
      return;
    }

    var rosterUpdateCallback = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(chimeAttendeeId, present, externalUserId) {
        var attendeeId, inRoster, attendee, externalData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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