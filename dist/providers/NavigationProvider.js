import _slicedToArray from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useMeetingManager } from "amazon-chime-sdk-component-library-react";
var NavigationContext = React.createContext();

var isDesktop = function isDesktop() {
  return window.innerWidth > 768;
};

var NavigationProvider = function NavigationProvider(_ref) {
  var children = _ref.children;

  var _useState = useState(function () {
    return isDesktop();
  }),
      _useState2 = _slicedToArray(_useState, 2),
      showNavbar = _useState2[0],
      setShowNavbar = _useState2[1];

  var _useState3 = useState(function () {
    return isDesktop();
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      showRoster = _useState4[0],
      setShowRoster = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showMetrics = _useState6[0],
      setShowMetrics = _useState6[1];

  var isDesktopView = useRef(isDesktop());
  var location = useLocation();
  var meetingManager = useMeetingManager();
  useEffect(function () {
    if (location.pathname.includes("/meeting")) {
      return function () {
        meetingManager.leave();
      };
    }
  }, [location.pathname]);
  useEffect(function () {
    var handler = function handler() {
      var isResizeDesktop = isDesktop();

      if (isDesktopView.current === isResizeDesktop) {
        return;
      }

      isDesktopView.current = isResizeDesktop;

      if (!isResizeDesktop) {
        setShowNavbar(false);
        setShowRoster(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("resize", handler);
    return function () {
      return window.removeEventListener("resize", handler);
    };
  }, []);

  var toggleRoster = function toggleRoster() {
    setShowRoster(!showRoster);
  };

  var toggleNavbar = function toggleNavbar() {
    setShowNavbar(!showNavbar);
  };

  var toggleMetrics = function toggleMetrics() {
    setShowMetrics(function (currentState) {
      return !currentState;
    });
  };

  var openNavbar = function openNavbar() {
    setShowNavbar(true);
  };

  var closeNavbar = function closeNavbar() {
    setShowNavbar(false);
  };

  var openRoster = function openRoster() {
    setShowRoster(true);
  };

  var closeRoster = function closeRoster() {
    setShowRoster(false);
  };

  var providerValue = {
    showNavbar: showNavbar,
    showRoster: showRoster,
    showMetrics: showMetrics,
    toggleRoster: toggleRoster,
    toggleNavbar: toggleNavbar,
    toggleMetrics: toggleMetrics,
    openRoster: openRoster,
    closeRoster: closeRoster,
    openNavbar: openNavbar,
    closeNavbar: closeNavbar
  };
  return /*#__PURE__*/React.createElement(NavigationContext.Provider, {
    value: providerValue
  }, children);
};

var useNavigation = function useNavigation() {
  var context = useContext(NavigationContext);

  if (!context) {
    throw Error("Use useNavigation in NavigationProvider");
  }

  return context;
};

export { NavigationProvider, useNavigation };