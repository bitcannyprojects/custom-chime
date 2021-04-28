"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _reactRedux = require("react-redux");

var _MeetingJoinDetails = _interopRequireDefault(require("../containers/MeetingJoinDetails"));

var _Styled = require("./Styled");

var _DeviceSelection = _interopRequireDefault(require("../DeviceSelection"));

var _AppStateProvider = require("../providers/AppStateProvider");

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var DeviceSetup = function DeviceSetup(_ref) {
  var match = _ref.match,
      getData = _ref.getData,
      getAttendee = _ref.getAttendee,
      setSession = _ref.setSession,
      user = _ref.user;

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1]; // const [session, setSession] = useState({});


  var meetingManager = (0, _amazonChimeSdkComponentLibraryReact.useMeetingManager)(); // const user = useSelector((state) => state.userReducer.user);

  var _useAppState = (0, _AppStateProvider.useAppState)(),
      meetingId = _useAppState.meetingId,
      localUserName = _useAppState.localUserName,
      setAppMeetingInfo = _useAppState.setAppMeetingInfo;

  var meetingID = match === null || match === void 0 ? void 0 : match.params.id;
  (0, _react.useEffect)(function () {
    getBreakoutRoomData(meetingID);
  }, []);

  var getBreakoutRoomData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
      var _resData$meeting, _resData$meeting$Meet, _resData$meeting2, _resData$meeting2$Mee;

      var resData, joinData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getData(id);

            case 2:
              resData = _context.sent;
              resData = resData.data;
              joinData = {
                meetingInfo: resData.meeting,
                attendeeInfo: resData.attendee
              };
              setSession(resData.session);
              _context.next = 8;
              return meetingManager.join(joinData);

            case 8:
              meetingManager.getAttendee = getAttendee((_resData$meeting = resData.meeting) === null || _resData$meeting === void 0 ? void 0 : (_resData$meeting$Meet = _resData$meeting.Meeting) === null || _resData$meeting$Meet === void 0 ? void 0 : _resData$meeting$Meet.MeetingId);
              setAppMeetingInfo((_resData$meeting2 = resData.meeting) === null || _resData$meeting2 === void 0 ? void 0 : (_resData$meeting2$Mee = _resData$meeting2.Meeting) === null || _resData$meeting2$Mee === void 0 ? void 0 : _resData$meeting2$Mee.MeetingId, (user === null || user === void 0 ? void 0 : user.first_name) + " " + ((user === null || user === void 0 ? void 0 : user.last_name) || ""));
              setLoading(false);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getBreakoutRoomData(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  if (loading) return /*#__PURE__*/_react.default.createElement("div", null, "Loading");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "meeting-root"
  }, /*#__PURE__*/_react.default.createElement(_Styled.StyledLayout, null, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Heading, {
    tag: "h1",
    level: 3,
    css: "align-self: flex-start"
  }, "Device Settings"), /*#__PURE__*/_react.default.createElement(_MeetingJoinDetails.default, {
    meetingID: meetingID
  }), /*#__PURE__*/_react.default.createElement(_DeviceSelection.default, null)));
};

var _default = DeviceSetup;
exports.default = _default;