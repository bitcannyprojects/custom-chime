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
  const [isTyping, setTyping] = useState(false);

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
    // console.log(355, mess);
    setChatData([...chatData, mess]);
  };

  const receiveChatData = (mess) => {
    try {
      // console.log(mess);
      // const senderId = mess.senderAttendeeId
      const data = JSON.parse(mess.text());
      // data.senderId = senderId
      data.new = true;
      // console.log(444, data);
      setChatData([...chatData, data]);
    } catch (error) {
      console.log(577, error);
    }
  };

  const sendTyping = () => {
    try {
      const typeMess = { senderId: chimeAttendeeId, type: "TYPING" };
      audioVideo?.realtimeSendDataMessage("TYPING", JSON.stringify(typeMess));
      // setTypingData(typeMess);
      // console.log("sendTyping: ", typeMess);
    } catch (error) {
      console.log(577, error);
    }
  };

  const receiveTyping = (data) => {
    try {
      // console.log("receiveTyping: ", data);
      const msg = JSON.parse(data.text());
      if (msg.senderId != chimeAttendeeId) {
        setTyping(true);
        setTimeout(() => {
          setTyping(false);
        }, 3000);
      } else setTyping(false);
    } catch (error) {
      console.log(577, error);
    }
  };

  useEffect(() => {
    try {
      // console.log("chat! open");
      audioVideo?.realtimeSubscribeToReceiveDataMessage(
        "CHAT",
        receiveChatData
      );
      audioVideo?.realtimeSubscribeToReceiveDataMessage(
        "TYPING",
        receiveTyping
      );
      return () => {
        // console.log("chat! end");
        audioVideo?.realtimeUnsubscribeFromReceiveDataMessage("CHAT");
        audioVideo?.realtimeUnsubscribeFromReceiveDataMessage("TYPING");
      };
    } catch (error) {
      console.log(577, error);
    }
  });

  // useEffect(() => {
  //   console.log("chat! open");
  //   audioVideo?.realtimeSubscribeToReceiveDataMessage("TYPING", receiveChatData);
  // });

  const providerValue = {
    chatData,
    sendChatData,
    isTyping,
    sendTyping,
  };
  return (
    <RealitimeSubscribeChatStateContext.Provider value={providerValue}>
      {children}
    </RealitimeSubscribeChatStateContext.Provider>
  );
};
