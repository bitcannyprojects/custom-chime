import React, { useContext, useState } from "react";

const AppStateContext = React.createContext();

export function useAppState() {
  const state = useContext(AppStateContext);

  if (!state) {
    throw new Error("useAppState must be used within AppStateProvider");
  }

  return state;
}

const query = new URLSearchParams(window.location.search);

export function AppStateProvider({ children }) {
  const [meetingId, setMeeting] = useState(query.get("meetingId") || "");
  const [region, setRegion] = useState(query.get("region") || "");
  const [localUserName, setLocalName] = useState("");
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "light";
  });

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const setAppMeetingInfo = (meetingId, name, region) => {
    if (region) setRegion(region);
    if (meetingId) setMeeting(meetingId);
    if (name) setLocalName(name);
  };

  const providerValue = {
    meetingId,
    localUserName,
    theme,
    region,
    toggleTheme,
    setAppMeetingInfo,
  };

  return (
    <AppStateContext.Provider value={providerValue}>
      {children}
    </AppStateContext.Provider>
  );
}
