import React from "react";
import { Navbar, NavbarHeader, NavbarItem, Attendees, Eye, Information } from "amazon-chime-sdk-component-library-react";
import { useNavigation } from "../../providers/NavigationProvider";
import { useAppState } from "../../providers/AppStateProvider";

var Navigation = function Navigation() {
  var _useNavigation = useNavigation(),
      toggleRoster = _useNavigation.toggleRoster,
      toggleMetrics = _useNavigation.toggleMetrics,
      closeNavbar = _useNavigation.closeNavbar;

  var _useAppState = useAppState(),
      theme = _useAppState.theme,
      toggleTheme = _useAppState.toggleTheme;

  return /*#__PURE__*/React.createElement(Navbar, {
    className: "nav",
    flexDirection: "column",
    container: true
  }, /*#__PURE__*/React.createElement(NavbarHeader, {
    title: "Navigation",
    onClose: closeNavbar
  }), /*#__PURE__*/React.createElement(NavbarItem, {
    icon: /*#__PURE__*/React.createElement(Attendees, null),
    onClick: toggleRoster,
    label: "Attendees"
  }), /*#__PURE__*/React.createElement(NavbarItem, {
    icon: /*#__PURE__*/React.createElement(Eye, null),
    onClick: toggleTheme,
    label: theme === "light" ? "Dark mode" : "Light mode"
  }), /*#__PURE__*/React.createElement(NavbarItem, {
    icon: /*#__PURE__*/React.createElement(Information, null),
    onClick: toggleMetrics,
    label: "Meeting metrics"
  }));
};

export default Navigation;