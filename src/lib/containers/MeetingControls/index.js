import React from "react";
import {
  ControlBar,
  AudioInputControl,
  VideoInputControl,
  ContentShareControl,
  AudioOutputControl,
  ControlBarButton,
  useUserActivityState,
  Dots,
} from "amazon-chime-sdk-component-library-react";

import EndMeetingControl from "../EndMeetingControl";
import { useNavigation, useAppState } from "../../providers/NavigationProvider";
import { StyledControls } from "./Styled.js";

const MeetingControls = () => {
  const { toggleNavbar, closeRoster, showRoster } = useNavigation();
  const { isUserActive } = useUserActivityState();
  const { userRole, session } = useAppState();
  const handleToggle = () => {
    if (showRoster) {
      closeRoster();
    }

    toggleNavbar();
  };

  return (
    <StyledControls className="controls" active={!!isUserActive}>
      <ControlBar
        className="controls-menu"
        layout="undocked-horizontal"
        showLabels
      >
        <ControlBarButton
          className="mobile-toggle"
          icon={<Dots />}
          onClick={handleToggle}
          label="Menu"
        />
        <AudioInputControl />
        {(session?.type === "breakout" ||
          !(userRole?.length === 1 && userRole.includes("attendee"))) && (
          <VideoInputControl />
        )}
        {(session?.type === "breakout" ||
          !(userRole?.length === 1 && userRole.includes("attendee"))) && (
          <ContentShareControl />
        )}
        <AudioOutputControl />
        <EndMeetingControl />
      </ControlBar>
    </StyledControls>
  );
};

export default MeetingControls;
