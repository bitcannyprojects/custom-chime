import React from "react";
import { useBandwidthMetrics } from "amazon-chime-sdk-component-library-react";

import { StyledMetrics } from "./Styled";
import { useNavigation } from "../../providers/NavigationProvider";

function formatMetric(metric) {
  return metric ? `${metric} Kbps` : null;
}

const MeetingMetrics = () => {
  const { showMetrics } = useNavigation();

  return showMetrics ? <BandwidthMetrics /> : null;
};

const BandwidthMetrics = () => {
  const {
    availableIncomingBandwidth,
    availableOutgoingBandwidth,
  } = useBandwidthMetrics();

  return (
    <StyledMetrics>
      <p className="metric title">Bandwidth</p>
      <p className="metric">
        Incoming: {formatMetric(availableIncomingBandwidth) || "unavailable"}
      </p>
      <p className="metric">
        Outgoing: {formatMetric(availableOutgoingBandwidth) || "unavailable"}
      </p>
    </StyledMetrics>
  );
};

export default MeetingMetrics;
