import React from "react";
import { ControlBar, AudioInputControl, VideoInputControl, ContentShareControl, AudioOutputControl, ControlBarButton, useUserActivityState, Dots } from "amazon-chime-sdk-component-library-react";
import EndMeetingControl from "../EndMeetingControl";
import { useNavigation } from "../../providers/NavigationProvider";
import { StyledControls } from "./Styled.js";

var MeetingControls = function MeetingControls() {
  var _useNavigation = useNavigation(),
      toggleNavbar = _useNavigation.toggleNavbar,
      closeRoster = _useNavigation.closeRoster,
      showRoster = _useNavigation.showRoster;

  var _useUserActivityState = useUserActivityState(),
      isUserActive = _useUserActivityState.isUserActive;

  var handleToggle = function handleToggle() {
    if (showRoster) {
      closeRoster();
    }

    toggleNavbar();
  };

  return /*#__PURE__*/React.createElement(StyledControls, {
    className: "controls",
    active: !!isUserActive
  }, /*#__PURE__*/React.createElement(ControlBar, {
    className: "controls-menu",
    layout: "undocked-horizontal",
    showLabels: true
  }, /*#__PURE__*/React.createElement(ControlBarButton, {
    className: "mobile-toggle",
    icon: /*#__PURE__*/React.createElement(Dots, null),
    onClick: handleToggle,
    label: "Menu"
  }), /*#__PURE__*/React.createElement(AudioInputControl, null), /*#__PURE__*/React.createElement(VideoInputControl, null), /*#__PURE__*/React.createElement(ContentShareControl, null), /*#__PURE__*/React.createElement(AudioOutputControl, null), /*#__PURE__*/React.createElement(EndMeetingControl, null)));
};

export default MeetingControls;