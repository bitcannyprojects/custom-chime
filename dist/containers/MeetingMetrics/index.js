"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _Styled = require("./Styled");

var _NavigationProvider = require("../../providers/NavigationProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatMetric(metric) {
  return metric ? "".concat(metric, " Kbps") : null;
}

var MeetingMetrics = function MeetingMetrics() {
  var _useNavigation = (0, _NavigationProvider.useNavigation)(),
      showMetrics = _useNavigation.showMetrics;

  return showMetrics ? /*#__PURE__*/_react.default.createElement(BandwidthMetrics, null) : null;
};

var BandwidthMetrics = function BandwidthMetrics() {
  var _useBandwidthMetrics = (0, _amazonChimeSdkComponentLibraryReact.useBandwidthMetrics)(),
      availableIncomingBandwidth = _useBandwidthMetrics.availableIncomingBandwidth,
      availableOutgoingBandwidth = _useBandwidthMetrics.availableOutgoingBandwidth;

  return /*#__PURE__*/_react.default.createElement(_Styled.StyledMetrics, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "metric title"
  }, "Bandwidth"), /*#__PURE__*/_react.default.createElement("p", {
    className: "metric"
  }, "Incoming: ", formatMetric(availableIncomingBandwidth) || "unavailable"), /*#__PURE__*/_react.default.createElement("p", {
    className: "metric"
  }, "Outgoing: ", formatMetric(availableOutgoingBandwidth) || "unavailable"));
};

var _default = MeetingMetrics;
exports.default = _default;