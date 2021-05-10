import { ReactNode, useContext, useEffect, useState } from "react";
import React from "react";
import { DataMessage } from "amazon-chime-sdk-js";
import { v4 } from "uuid";
import { useAppState } from "./AppStateProvider";
// import { RealtimeData } from "./RealtimeSubscribeProvider";
import { useAudioVideo } from "amazon-chime-sdk-component-library-react";

const RealitimeSubscribeChatStateContext = React.createContext();

export const useRealitimeSubscribeChatState = () => {
  const state = useContext(RealitimeSubscribeChatStateContext);
  if (!state) {
    throw new Error("Error using RealitimeSubscribe in context!");
  }
  return state;
};

export const RealitimeSubscribeChatStateProvider = ({ children }) => {
  const audioVideo = useAudioVideo();
  const { localUserName, chimeAttendeeId } = useAppState();
  const [chatData, setChatData] = useState([]);

  const sendChatData = (text) => {
    const mess = {
      uuid: v4(),
      action: "sendmessage",
      cmd: "TEXT",
      data: text,
      createdDate: new Date().getTime(),
      senderName: localUserName,
      senderId: chimeAttendeeId,
    };
    audioVideo?.realtimeSendDataMessage("CHAT", JSON.stringify(mess));
    setChatData([...chatData, mess]);
  };

  const receiveChatData = (mess) => {
    console.log(mess);
    // const senderId = mess.senderAttendeeId
    const data = JSON.parse(mess.text());
    // data.senderId = senderId
    setChatData([...chatData, data]);
  };

  useEffect(() => {
    console.log("chat! open");
    audioVideo?.realtimeSubscribeToReceiveDataMessage("CHAT", receiveChatData);
    return () => {
      console.log("chat! end");
      audioVideo?.realtimeUnsubscribeFromReceiveDataMessage("CHAT");
    };
  });

  const providerValue = {
    chatData,
    sendChatData,
  };
  return (
    <RealitimeSubscribeChatStateContext.Provider value={providerValue}>
      {children}
    </RealitimeSubscribeChatStateContext.Provider>
  );
};
