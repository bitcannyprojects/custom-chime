import React from "react";
import { Flex, Heading, PrimaryButton, useMeetingManager } from "amazon-chime-sdk-component-library-react";
import { useAppState } from "../../providers/AppStateProvider";
import { StyledList } from "./Styled";

var MeetingDetails = function MeetingDetails() {
  var _useAppState = useAppState(),
      meetingId = _useAppState.meetingId,
      toggleTheme = _useAppState.toggleTheme,
      theme = _useAppState.theme;

  var manager = useMeetingManager();
  return /*#__PURE__*/React.createElement(Flex, {
    container: true,
    layout: "fill-space-centered"
  }, /*#__PURE__*/React.createElement(Flex, {
    mb: "2rem",
    mr: {
      md: "2rem"
    },
    px: "1rem"
  }, /*#__PURE__*/React.createElement(Heading, {
    level: 4,
    tag: "h1",
    mb: 2
  }, "Meeting information"), /*#__PURE__*/React.createElement(StyledList, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Meeting ID"), /*#__PURE__*/React.createElement("dd", null, meetingId)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Hosted region"), /*#__PURE__*/React.createElement("dd", null, manager.meetingRegion))), /*#__PURE__*/React.createElement(PrimaryButton, {
    mt: 4,
    label: theme === "light" ? "Dark mode" : "Light mode",
    onClick: toggleTheme
  })));
};

export default MeetingDetails;