"use strict";

var _interopRequireWildcard = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _reactRedux = require("react-redux");

var _MeetingJoinDetails = _interopRequireDefault(require("../containers/MeetingJoinDetails"));

var _Styled = require("./Styled");

var _DeviceSelection = _interopRequireDefault(require("custom-chime/dist/DeviceSelection"));

var _AppStateProvider = require("../providers/AppStateProvider");

var DeviceSetup = function DeviceSetup(_ref) {
  var match = _ref.match,
      getData = _ref.getData,
      getAttendee = _ref.getAttendee;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      session = _useState4[0],
      setSession = _useState4[1];

  var meetingManager = (0, _amazonChimeSdkComponentLibraryReact.useMeetingManager)();
  var user = (0, _reactRedux.useSelector)(function (state) {
    return state.userReducer.user;
  });

  var _useAppState = (0, _AppStateProvider.useAppState)(),
      meetingId = _useAppState.meetingId,
      localUserName = _useAppState.localUserName,
      setAppMeetingInfo = _useAppState.setAppMeetingInfo;

  var meetingID = match === null || match === void 0 ? void 0 : match.params.id;
  (0, _react.useEffect)(function () {
    getBreakoutRoomData(meetingID);
  }, []);

  var getBreakoutRoomData = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(id) {
      var _resData$meeting, _resData$meeting$Meet, _resData$meeting2, _resData$meeting2$Mee;

      var resData, joinData;
      return _regenerator.default.wrap(function _callee$(_context) {
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
              _context.next = 7;
              return meetingManager.join(joinData);

            case 7:
              meetingManager.getAttendee = getAttendee((_resData$meeting = resData.meeting) === null || _resData$meeting === void 0 ? void 0 : (_resData$meeting$Meet = _resData$meeting.Meeting) === null || _resData$meeting$Meet === void 0 ? void 0 : _resData$meeting$Meet.MeetingId);
              setAppMeetingInfo((_resData$meeting2 = resData.meeting) === null || _resData$meeting2 === void 0 ? void 0 : (_resData$meeting2$Mee = _resData$meeting2.Meeting) === null || _resData$meeting2$Mee === void 0 ? void 0 : _resData$meeting2$Mee.MeetingId, (user === null || user === void 0 ? void 0 : user.first_name) + " " + (user === null || user === void 0 ? void 0 : user.last_name));
              setLoading(false);

            case 10:
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
  return /*#__PURE__*/_react.default.createElement(_Styled.StyledLayout, null, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Heading, {
    tag: "h1",
    level: 3,
    css: "align-self: flex-start"
  }, "Device settings"), /*#__PURE__*/_react.default.createElement(_DeviceSelection.default, null), /*#__PURE__*/_react.default.createElement(_MeetingJoinDetails.default, {
    meetingID: meetingID
  }));
};

var _default = DeviceSetup;
exports.default = _default;