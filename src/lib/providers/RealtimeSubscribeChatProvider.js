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
  // const [isTyping, setTyping] = useState(false);
  // const [typingData, setTypingData] = useState(null);

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
    console.log(355, mess);
    setChatData([...chatData, mess]);
  };

  const receiveChatData = (mess) => {
    console.log(mess);
    // const senderId = mess.senderAttendeeId
    const data = JSON.parse(mess.text());
    // data.senderId = senderId
    data.new = true;
    console.log(444, data);
    setChatData([...chatData, data]);
  };

  // const sendTyping= ()=>{
  //   const typeMess={senderId:chimeAttendeeId, type:"TYPING"};
  //   audioVideo?.realtimeSendDataMessage("TYPING",JSON.stringify(typeMess));
  //   setTypingData(typeMess);
  //   console.log("sendTyping: ",typeMess);
  // }

  // const receiveTyping=(data)=>{
  //   const msg = JSON.parse(data);
  //   if(msg.senderId!=chimeAttendeeId){
  //     setTyping(true);
  //   }
  //   else
  //     setTyping(false);
  //   console.log("receiveTyping: ",msg);
  // }

  useEffect(() => {
    console.log("chat! open");
    audioVideo?.realtimeSubscribeToReceiveDataMessage("CHAT", receiveChatData);
    return () => {
      console.log("chat! end");
      audioVideo?.realtimeUnsubscribeFromReceiveDataMessage("CHAT");
    };
  });

  // useEffect(() => {
  //   console.log("chat! open");
  //   audioVideo?.realtimeSubscribeToReceiveDataMessage("TYPING", receiveChatData);
  // });

  const providerValue = {
    chatData,
    sendChatData,
    // isTyping,
    // typingData,
    // sendTyping,
  };
  return (
    <RealitimeSubscribeChatStateContext.Provider value={providerValue}>
      {children}
    </RealitimeSubscribeChatStateContext.Provider>
  );
};