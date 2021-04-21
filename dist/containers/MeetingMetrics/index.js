import React from "react";
import { useBandwidthMetrics } from "amazon-chime-sdk-component-library-react";
import { StyledMetrics } from "./Styled";
import { useNavigation } from "../../providers/NavigationProvider";

function formatMetric(metric) {
  return metric ? "".concat(metric, " Kbps") : null;
}

var MeetingMetrics = function MeetingMetrics() {
  var _useNavigation = useNavigation(),
      showMetrics = _useNavigation.showMetrics;

  return showMetrics ? /*#__PURE__*/React.createElement(BandwidthMetrics, null) : null;
};

var BandwidthMetrics = function BandwidthMetrics() {
  var _useBandwidthMetrics = useBandwidthMetrics(),
      availableIncomingBandwidth = _useBandwidthMetrics.availableIncomingBandwidth,
      availableOutgoingBandwidth = _useBandwidthMetrics.availableOutgoingBandwidth;

  return /*#__PURE__*/React.createElement(StyledMetrics, null, /*#__PURE__*/React.createElement("p", {
    className: "metric title"
  }, "Bandwidth"), /*#__PURE__*/React.createElement("p", {
    className: "metric"
  }, "Incoming: ", formatMetric(availableIncomingBandwidth) || "unavailable"), /*#__PURE__*/React.createElement("p", {
    className: "metric"
  }, "Outgoing: ", formatMetric(availableOutgoingBandwidth) || "unavailable"));
};

export default MeetingMetrics;