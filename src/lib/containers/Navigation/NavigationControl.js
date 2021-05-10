import React from "react";

import MeetingRoster from "../MeetingRoster";
import Navigation from ".";
import { useNavigation } from "../../providers/NavigationProvider";
import ChatView from "../ChatView/ChatView";

const NavigationControl = () => {
  const { showNavbar, showRoster, showChat } = useNavigation();

  return (
    <>
      {showNavbar ? <Navigation /> : null}
      {showRoster ? <MeetingRoster /> : null}
      {showChat ? <ChatView /> : null}
    </>
  );
};

export default NavigationControl;
