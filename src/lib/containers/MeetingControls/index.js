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
  Dock,
} from "amazon-chime-sdk-component-library-react";

import EndMeetingControl from "../EndMeetingControl";
import { useNavigation } from "../../providers/NavigationProvider";
import { useAppState } from "../../providers/AppStateProvider";
import { StyledControls } from "./Styled.js";

const MeetingControls = ({ toggleFullScreen }) => {
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
        {/* <AudioOutputControl /> */}
        {/* <span onClick={toggleFullScreen}>
          <Eye width="2rem" />
        </span> */}
        <ControlBarButton
          className="full-screen-toggle"
          icon={<Dock />}
          onClick={toggleFullScreen}
          label="FS"
        />
        <EndMeetingControl />
      </ControlBar>
    </StyledControls>
  );
};

export default MeetingControls;
