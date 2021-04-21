import _regeneratorRuntime from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { PrimaryButton, Flex, Label, useMeetingManager, Modal, ModalBody, ModalHeader } from "amazon-chime-sdk-component-library-react"; // import routes from "../constants/routes";

import Card from "../Card";
import { useAppState } from "../providers/AppStateProvider";

var MeetingJoinDetails = function MeetingJoinDetails(_ref) {
  var meetingID = _ref.meetingID;
  var meetingManager = useMeetingManager();
  var history = useHistory();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useAppState = useAppState(),
      meetingId = _useAppState.meetingId,
      localUserName = _useAppState.localUserName;

  console.log("appState", meetingId, localUserName);
  console.log({
    history: history
  });

  var handleJoinMeeting = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsLoading(true);
              _context.prev = 1;
              _context.next = 4;
              return meetingManager.start();

            case 4:
              // meetingManager.getAttendee();
              // let ab = await meetingManager.getAttendee();
              // console.log("meetingmanager", meetingManager, ab);
              setIsLoading(false);
              history.push("/breakoutroom".concat("/", meetingID));
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              setIsLoading(false);
              setError(_context.t0.message);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));

    return function handleJoinMeeting() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Flex, {
    container: true,
    alignItems: "center",
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    label: isLoading ? "Loading..." : "Join meeting",
    onClick: handleJoinMeeting
  }), /*#__PURE__*/React.createElement(Label, {
    style: {
      margin: ".75rem 0 0 0"
    }
  }, "Joining meeting ", /*#__PURE__*/React.createElement("b", null, meetingId), " as ", /*#__PURE__*/React.createElement("b", null, localUserName))), error && /*#__PURE__*/React.createElement(Modal, {
    size: "md",
    onClose: function onClose() {
      return setError("");
    }
  }, /*#__PURE__*/React.createElement(ModalHeader, {
    title: "Meeting ID: ".concat(meetingId)
  }), /*#__PURE__*/React.createElement(ModalBody, null, /*#__PURE__*/React.createElement(Card, {
    title: "Unable to join meeting",
    description: "There was an issue in joining this meeting. Check your connectivity and try again.",
    smallText: error
  }))));
};

export default MeetingJoinDetails;