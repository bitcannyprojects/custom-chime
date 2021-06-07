import React, { useState, useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useMeetingManager } from "amazon-chime-sdk-component-library-react";

const NavigationContext = React.createContext();

const isDesktop = () => window.innerWidth > 768;

const NavigationProvider = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(() => isDesktop());
  const [showRoster, setShowRoster] = useState(() => isDesktop());
  const [showMetrics, setShowMetrics] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const isDesktopView = useRef(isDesktop());

  const location = useLocation();
  const meetingManager = useMeetingManager();

  useEffect(() => {
    if (location.pathname.includes("/meeting")) {
      return () => {
        meetingManager.leave();
      };
    }
  }, [location.pathname]);

  useEffect(() => {
    const handler = () => {
      const isResizeDesktop = isDesktop();
      if (isDesktopView.current === isResizeDesktop) {
        return;
      }

      isDesktopView.current = isResizeDesktop;

      if (!isResizeDesktop) {
        setShowNavbar(false);
        setShowRoster(false);
        setShowChat(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const toggleRoster = () => {
    console.log("151--->>>", "toggleRoaster");
    if (showRoster) {
      closeChat();
    }
    setShowRoster(!showRoster);
  };

  const toggleNavbar = () => {
    console.log("151--->>>", "toggleNavbar");
    setShowNavbar(!showNavbar);
    // if (showChat) {
    //   closeChat();
    // }
  };
  const toggleChat = () => {
    console.log("151--->>>", "toggleChat");
    // if (showChat) {
    //   toggleNavbar();
    // }
    if (!showChat) {
      openRoster(true);
    }
    setShowChat(!showChat);
  };

  const toggleMetrics = () => {
    setShowMetrics((currentState) => !currentState);
  };

  const openNavbar = () => {
    setShowNavbar(true);
  };

  const closeNavbar = () => {
    console.log("151--->>>", "closenavbar");
    setShowNavbar(false);
  };

  const openRoster = () => {
    setShowRoster(true);
  };

  const closeRoster = () => {
    console.log("151--->>>", "closeRoster");
    setShowRoster(false);
  };

  const openChat = () => {
    setShowChat(true);
  };

  const closeChat = () => {
    console.log("151--->>>", "closeChat");
    setShowChat(false);
  };

  const providerValue = {
    showNavbar,
    showRoster,
    showMetrics,
    showChat,
    toggleRoster,
    toggleNavbar,
    toggleMetrics,
    toggleChat,
    openRoster,
    closeRoster,
    openChat,
    closeChat,
    openNavbar,
    closeNavbar,
  };
  return (
    <NavigationContext.Provider value={providerValue}>
      {children}
    </NavigationContext.Provider>
  );
};

const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw Error("Use useNavigation in NavigationProvider");
  }
  return context;
};

export { NavigationProvider, useNavigation };
