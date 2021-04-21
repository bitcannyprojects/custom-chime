import React from "react";
import MeetingRoster from "../MeetingRoster";
import Navigation from ".";
import { useNavigation } from "../../providers/NavigationProvider";

var NavigationControl = function NavigationControl() {
  var _useNavigation = useNavigation(),
      showNavbar = _useNavigation.showNavbar,
      showRoster = _useNavigation.showRoster;

  return /*#__PURE__*/React.createElement(React.Fragment, null, showNavbar ? /*#__PURE__*/React.createElement(Navigation, null) : null, showRoster ? /*#__PURE__*/React.createElement(MeetingRoster, null) : null);
};

export default NavigationControl;