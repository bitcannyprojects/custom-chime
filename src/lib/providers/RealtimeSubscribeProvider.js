import { ReactNode, useContext } from "react";
import React from "react";
import { RealitimeSubscribeChatStateProvider } from "./RealtimeSubscribeChatProvider";
// import {RealitimeSubscribeTypingStateProvider} from "./RealtimeSubscribeTypingProvider"

export const RealitimeSubscribeStateContext = React.createContext();

export const useRealitimeSubscribeState = () => {
  const state = useContext(RealitimeSubscribeStateContext);
  if (!state) {
    throw new Error("Error using RealitimeSubscribe in context!");
  }
  return state;
};

export const RealitimeSubscribeStateProvider = ({ children }) => {
  const providerValue = {};
  return (
    <RealitimeSubscribeStateContext.Provider value={providerValue}>
      <RealitimeSubscribeChatStateProvider>
        {children}
      </RealitimeSubscribeChatStateProvider>
      {/* <RealitimeSubscribeTypingStateProvider>
        {children}
      </RealitimeSubscribeTypingStateProvider>  */}
    </RealitimeSubscribeStateContext.Provider>
  );
};
