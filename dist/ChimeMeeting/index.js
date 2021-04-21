import _slicedToArray from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from "react";
import { VideoTileGrid, UserActivityProvider, useMeetingStatus } from "amazon-chime-sdk-component-library-react";
import { StyledLayout, StyledContent } from "./Styled";
import NavigationControl from "../containers/Navigation/NavigationControl";
import { useNavigation } from "../providers/NavigationProvider";
import MeetingDetails from "../containers/MeetingDetails";
import MeetingControls from "../containers/MeetingControls";
import MeetingMetrics from "../containers/MeetingMetrics";
import { useAppState } from "../providers/AppStateProvider";
import classnames from "classnames";

var MeetingView = function MeetingView(_ref) {
  var history = _ref.history,
      match = _ref.match,
      MeetingMessagePopUp = _ref.MeetingMessagePopUp;

  var _useNavigation = useNavigation(),
      showNavbar = _useNavigation.showNavbar,
      showRoster = _useNavigation.showRoster;

  var meetingStatus = useMeetingStatus();
  var sessionId = match === null || match === void 0 ? void 0 : match.params.id;

  var _useAppState = useAppState(),
      meetingId = _useAppState.meetingId,
      localUserName = _useAppState.localUserName,
      setAppMeetingInfo = _useAppState.setAppMeetingInfo;

  var _useState = useState("chat"),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  useEffect(function () {
    if (!Boolean(meetingId)) {
      history.push("".concat(history.location.pathname, "/devices"));
    }
  }, [meetingId]);
  return /*#__PURE__*/React.createElement(UserActivityProvider, null, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/React.createElement(StyledLayout, {
    showNav: showNavbar,
    showRoster: showRoster
  }, /*#__PURE__*/React.createElement(StyledContent, null, /*#__PURE__*/React.createElement(MeetingMetrics, null), /*#__PURE__*/React.createElement(VideoTileGrid, {
    className: "videos",
    noRemoteVideoView: /*#__PURE__*/React.createElement(MeetingDetails, null)
  }), /*#__PURE__*/React.createElement(MeetingControls, null)), /*#__PURE__*/React.createElement(NavigationControl, null))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "session-util-tab p-2 d-flex align-items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames("session-tab-item p-2", {
      active: activeTab === "chat"
    }),
    onClick: function onClick() {
      return setActiveTab("chat");
    }
  }, "Chat"), /*#__PURE__*/React.createElement("div", {
    className: classnames("session-tab-item p-2", {
      active: activeTab === "polls"
    }),
    onClick: function onClick() {
      return setActiveTab("polls");
    }
  }, "Polls"), /*#__PURE__*/React.createElement("div", {
    className: classnames("session-tab-item p-2", {
      active: activeTab === "qna"
    }),
    onClick: function onClick() {
      return setActiveTab("qna");
    }
  }, "Q & A")), activeTab === "chat" && /*#__PURE__*/React.createElement(MeetingMessagePopUp, {
    sessionId: sessionId
  }))));
};

export default MeetingView;