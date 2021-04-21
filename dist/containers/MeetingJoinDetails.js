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

var _reactRouterDom = require("react-router-dom");

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _Card = _interopRequireDefault(require("../Card"));

var _AppStateProvider = require("../providers/AppStateProvider");

// import routes from "../constants/routes";
var MeetingJoinDetails = function MeetingJoinDetails(_ref) {
  var meetingID = _ref.meetingID;
  var meetingManager = (0, _amazonChimeSdkComponentLibraryReact.useMeetingManager)();
  var history = (0, _reactRouterDom.useHistory)();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useAppState = (0, _AppStateProvider.useAppState)(),
      meetingId = _useAppState.meetingId,
      localUserName = _useAppState.localUserName;

  console.log("appState", meetingId, localUserName);
  console.log({
    history: history
  });

  var handleJoinMeeting = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
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

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Flex, {
    container: true,
    alignItems: "center",
    flexDirection: "column"
  }, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.PrimaryButton, {
    label: isLoading ? "Loading..." : "Join meeting",
    onClick: handleJoinMeeting
  }), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Label, {
    style: {
      margin: ".75rem 0 0 0"
    }
  }, "Joining meeting ", /*#__PURE__*/_react.default.createElement("b", null, meetingId), " as ", /*#__PURE__*/_react.default.createElement("b", null, localUserName))), error && /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Modal, {
    size: "md",
    onClose: function onClose() {
      return setError("");
    }
  }, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ModalHeader, {
    title: "Meeting ID: ".concat(meetingId)
  }), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ModalBody, null, /*#__PURE__*/_react.default.createElement(_Card.default, {
    title: "Unable to join meeting",
    description: "There was an issue in joining this meeting. Check your connectivity and try again.",
    smallText: error
  }))));
};

var _default = MeetingJoinDetails;
exports.default = _default;