"use strict";

var _interopRequireWildcard = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _Styled = require("./Styled");

var _NavigationControl = _interopRequireDefault(require("../containers/Navigation/NavigationControl"));

var _NavigationProvider = require("../providers/NavigationProvider");

var _MeetingDetails = _interopRequireDefault(require("../containers/MeetingDetails"));

var _MeetingControls = _interopRequireDefault(require("../containers/MeetingControls"));

var _MeetingMetrics = _interopRequireDefault(require("../containers/MeetingMetrics"));

var _AppStateProvider = require("../providers/AppStateProvider");

var _classnames = _interopRequireDefault(require("classnames"));

var MeetingView = function MeetingView(_ref) {
  var history = _ref.history,
      match = _ref.match,
      MeetingMessagePopUp = _ref.MeetingMessagePopUp;

  var _useNavigation = (0, _NavigationProvider.useNavigation)(),
      showNavbar = _useNavigation.showNavbar,
      showRoster = _useNavigation.showRoster;

  var meetingStatus = (0, _amazonChimeSdkComponentLibraryReact.useMeetingStatus)();
  var sessionId = match === null || match === void 0 ? void 0 : match.params.id;

  var _useAppState = (0, _AppStateProvider.useAppState)(),
      meetingId = _useAppState.meetingId,
      localUserName = _useAppState.localUserName,
      setAppMeetingInfo = _useAppState.setAppMeetingInfo;

  var _useState = (0, _react.useState)("chat"),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  (0, _react.useEffect)(function () {
    if (!Boolean(meetingId)) {
      history.push("".concat(history.location.pathname, "/devices"));
    }
  }, [meetingId]);
  return /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.UserActivityProvider, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/_react.default.createElement(_Styled.StyledLayout, {
    showNav: showNavbar,
    showRoster: showRoster
  }, /*#__PURE__*/_react.default.createElement(_Styled.StyledContent, null, /*#__PURE__*/_react.default.createElement(_MeetingMetrics.default, null), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.VideoTileGrid, {
    className: "videos",
    noRemoteVideoView: /*#__PURE__*/_react.default.createElement(_MeetingDetails.default, null)
  }), /*#__PURE__*/_react.default.createElement(_MeetingControls.default, null)), /*#__PURE__*/_react.default.createElement(_NavigationControl.default, null))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "session-util-tab p-2 d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("session-tab-item p-2", {
      active: activeTab === "chat"
    }),
    onClick: function onClick() {
      return setActiveTab("chat");
    }
  }, "Chat"), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("session-tab-item p-2", {
      active: activeTab === "polls"
    }),
    onClick: function onClick() {
      return setActiveTab("polls");
    }
  }, "Polls"), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("session-tab-item p-2", {
      active: activeTab === "qna"
    }),
    onClick: function onClick() {
      return setActiveTab("qna");
    }
  }, "Q & A")), activeTab === "chat" && /*#__PURE__*/_react.default.createElement(MeetingMessagePopUp, {
    sessionId: sessionId
  }))));
};

var _default = MeetingView;
exports.default = _default;