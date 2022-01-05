import { ReactNode, useContext, useEffect, useState } from "react";
import React from "react";
import { useAppState } from "./AppStateProvider";
// import { RealtimeData } from "./RealtimeSubscribeProvider";
import { useAudioVideo } from "amazon-chime-sdk-component-library-react";

const RealitimeSubscribeTypingStateContext = React.createContext();

export const useRealitimeSubscribeTypingState = () => {
  const state = useContext(RealitimeSubscribeTypingStateContext);
  if (!state) {
    throw new Error("Error using RealitimeSubscribe in context!");
  }
  return state;
};

export const RealitimeSubscribeTypingStateProvider = ({ children }) => {
  const audioVideo = useAudioVideo();
  const { localUserName, chimeAttendeeId } = useAppState();
  const [isTyping, setTyping] = useState(false);
  const [typingData, setTypingData] = useState(null);

  const sendTyping= ()=>{
    const typeMess={senderId:chimeAttendeeId, type:"TYPING"};
    audioVideo?.realtimeSendDataMessage("TYPING",JSON.stringify(typeMess));
    setTypingData(typeMess);
    console.log("sendTyping: ",typeMess);
  }

  const receiveTyping=(data)=>{
    const msg = JSON.parse(data);
    if(msg.senderId!=chimeAttendeeId){
      setTyping(true);
    }
    else
      setTyping(false);
    console.log("receiveTyping: ",msg);
  }
  useEffect(() => {
    console.log("Typing! open");
    audioVideo?.realtimeSubscribeToReceiveDataMessage("CHAT", receiveTyping);
  });

  const providerValue = {
    isTyping,
    typingData,
    sendTyping,
  };
  return (
    <RealitimeSubscribeTypingStateContext.Provider value={providerValue}>
      {children}
    </RealitimeSubscribeTypingStateContext.Provider>
  );
};