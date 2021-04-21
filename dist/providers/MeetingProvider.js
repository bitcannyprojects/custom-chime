import _slicedToArray from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useContext, useState } from "react";
import MeetingManager from "./MeetingManager";
import { AudioVideoProvider } from "./AudioVideoProvider";
import { RosterProvider } from "./RosterProvider";
import { DevicesProvider } from "./DevicesProvider";
import { RemoteVideoTileProvider } from "./RemoteVideoTileProvider";
import { LocalVideoProvider } from "./LocalVideoProvider";
import { FeaturedVideoTileProvider } from "./FeaturedVideoTileProvider";
import { LocalAudioOutputProvider } from "./LocalAudioOutputProvider";
import { ContentShareProvider } from "./ContentShareProvider";
import { LogLevel } from "amazon-chime-sdk-js";
export var MeetingContext = React.createContext();
export var MeetingProvider = function MeetingProvider(_ref) {
  var _ref$logLevel = _ref.logLevel,
      logLevel = _ref$logLevel === void 0 ? LogLevel.WARN : _ref$logLevel,
      postLogConfig = _ref.postLogConfig,
      _ref$simulcastEnabled = _ref.simulcastEnabled,
      simulcastEnabled = _ref$simulcastEnabled === void 0 ? false : _ref$simulcastEnabled,
      meetingManagerProp = _ref.meetingManager,
      children = _ref.children;

  var _useState = useState(function () {
    return meetingManagerProp || new MeetingManager({
      logLevel: logLevel,
      postLogConfig: postLogConfig,
      simulcastEnabled: simulcastEnabled
    });
  }),
      _useState2 = _slicedToArray(_useState, 1),
      meetingManager = _useState2[0];

  return /*#__PURE__*/React.createElement(MeetingContext.Provider, {
    value: meetingManager
  }, /*#__PURE__*/React.createElement(AudioVideoProvider, null, /*#__PURE__*/React.createElement(DevicesProvider, null, /*#__PURE__*/React.createElement(RosterProvider, null, /*#__PURE__*/React.createElement(RemoteVideoTileProvider, null, /*#__PURE__*/React.createElement(LocalVideoProvider, null, /*#__PURE__*/React.createElement(LocalAudioOutputProvider, null, /*#__PURE__*/React.createElement(ContentShareProvider, null, /*#__PURE__*/React.createElement(FeaturedVideoTileProvider, null, children)))))))));
};
export var useMeetingManager = function useMeetingManager() {
  var meetingManager = useContext(MeetingContext);

  if (!meetingManager) {
    throw new Error("useMeetingManager must be used within MeetingProvider");
  }

  return meetingManager;
};