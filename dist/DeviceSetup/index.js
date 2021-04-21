import _regeneratorRuntime from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from "react";
import { Heading } from "amazon-chime-sdk-component-library-react";
import { useMeetingManager } from "amazon-chime-sdk-component-library-react";
import { useSelector } from "react-redux";
import JoinMeetingDetails from "../containers/MeetingJoinDetails";
import { StyledLayout } from "./Styled";
import DeviceSelection from "custom-chime/dist/DeviceSelection";
import { useAppState } from "../providers/AppStateProvider";

var DeviceSetup = function DeviceSetup(_ref) {
  var match = _ref.match,
      getData = _ref.getData,
      getAttendee = _ref.getAttendee;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      session = _useState4[0],
      setSession = _useState4[1];

  var meetingManager = useMeetingManager();
  var user = useSelector(function (state) {
    return state.userReducer.user;
  });

  var _useAppState = useAppState(),
      meetingId = _useAppState.meetingId,
      localUserName = _useAppState.localUserName,
      setAppMeetingInfo = _useAppState.setAppMeetingInfo;

  var meetingID = match === null || match === void 0 ? void 0 : match.params.id;
  useEffect(function () {
    getBreakoutRoomData(meetingID);
  }, []);

  var getBreakoutRoomData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(id) {
      var _resData$meeting, _resData$meeting$Meet, _resData$meeting2, _resData$meeting2$Mee;

      var resData, joinData;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
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

  if (loading) return /*#__PURE__*/React.createElement("div", null, "Loading");
  return /*#__PURE__*/React.createElement(StyledLayout, null, /*#__PURE__*/React.createElement(Heading, {
    tag: "h1",
    level: 3,
    css: "align-self: flex-start"
  }, "Device settings"), /*#__PURE__*/React.createElement(DeviceSelection, null), /*#__PURE__*/React.createElement(JoinMeetingDetails, {
    meetingID: meetingID
  }));
};

export default DeviceSetup;