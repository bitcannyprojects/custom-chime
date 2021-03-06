import {
  Roster,
  RosterHeader,
  Textarea,
  PrimaryButton,
  ChatBubbleContainer,
  ChatBubble,
} from "amazon-chime-sdk-component-library-react";
import { useNavigation } from "../../providers/NavigationProvider";
import React, { useState } from "react";
import { useRealitimeSubscribeChatState } from "../../providers/RealtimeSubscribeChatProvider";
import { useAppState } from "../../providers/AppStateProvider";

const bubbleStyles = `
  margin: 1rem;
`;

const ChatView = () => {
  const { localUserName, chimeAttendeeId } = useAppState();
  const { closeChat } = useNavigation();
  const { chatData, sendChatData, isTyping, sendTyping } =
    useRealitimeSubscribeChatState();
  const [chatMessage, setChatMessage] = useState("");

  const attendeeItems = [];
  for (let c of chatData) {
    const senderName = c.senderName;
    const senderId = c.senderId;

    const text = c.data;
    const time = new Date(c.createdDate).toLocaleTimeString("ja-JP");
    attendeeItems.push(
      <ChatBubbleContainer timestamp={time} key={time + senderName}>
        <ChatBubble
          variant={chimeAttendeeId === senderId ? "outgoing" : "incoming"}
          senderName={senderName}
          content={text}
          showTail={true}
          css={bubbleStyles}
        >
          {text}
        </ChatBubble>
      </ChatBubbleContainer>
    );
  }

  return (
    <Roster className="roster">
      <RosterHeader
        title="Chat"
        onClose={() => {
          closeChat();
        }}
      ></RosterHeader>
      {/* <RosterGroup>{attendeeItems}</RosterGroup> */}
      {attendeeItems}
      <br />
      {isTyping && (
        <div class="chat-bubble">
          <div class="typing">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
      )}
      <Textarea
        //@ts-ignore
        onChange={(e) => {
          setChatMessage(e.target.value);
          sendTyping();
        }}
        onKeyPress={(e) => {
          if (
            e.key === "Enter" &&
            e.shiftKey === false &&
            chatMessage?.trim().length !== 0
          ) {
            e.preventDefault();
            setChatMessage("");
            sendChatData(chatMessage);
          }
        }}
        value={chatMessage}
        placeholder="input your message"
        type="text"
        label=""
        style={{ resize: "vertical" }}
      />
      <PrimaryButton
        className="chatsend"
        label="send"
        disabled={chatMessage?.trim().length === 0}
        onClick={(e) => {
          setChatMessage("");
          sendChatData(chatMessage);
        }}
      />
    </Roster>
  );
};

export default ChatView;
