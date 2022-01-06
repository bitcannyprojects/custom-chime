import React from "react";

import {
  Navbar,
  NavbarHeader,
  NavbarItem,
  Attendees,
  Eye,
  Chat,
  Information,
} from "amazon-chime-sdk-component-library-react";
import { useRealitimeSubscribeChatState } from "../../providers/RealtimeSubscribeChatProvider";
import { useNavigation } from "../../providers/NavigationProvider";
import { useAppState } from "../../providers/AppStateProvider";

const Navigation = () => {
  const { toggleRoster, toggleMetrics, closeNavbar, toggleChat, showChat } =
    useNavigation();
  const { chatData } = useRealitimeSubscribeChatState();
  const { theme, toggleTheme, chimeAttendeeId } = useAppState();

  const lastChatData = chatData[chatData.length - 1];
  let newChat = false;
  if (lastChatData) {
    lastChatData.senderId !== chimeAttendeeId
      ? (newChat = true)
      : (newChat = false);
  }

  return (
    <Navbar className="nav" flexDirection="column" container>
      <NavbarHeader title="Navigation" onClose={closeNavbar} />
      <NavbarItem
        icon={<Attendees />}
        onClick={toggleRoster}
        label="Attendees"
      />
      <NavbarItem
        icon={
          <>
            {newChat && !showChat ? (
              <img
                src="https://vattendonline.s3.ap-south-1.amazonaws.com/new_message+(2).svg"
                width={25}
                height={25}
                alt="chat"
              />
            ) : (
              <Chat />
            )}
          </>
        }
        onClick={toggleChat}
        label={"Chat"}
      />
      <NavbarItem
        icon={<Eye />}
        onClick={toggleTheme}
        label={theme === "light" ? "Dark mode" : "Light mode"}
      />
      <NavbarItem
        icon={<Information />}
        onClick={toggleMetrics}
        label="Meeting metrics"
      />
    </Navbar>
  );
};

export default Navigation;
