import _slicedToArray from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { createContext, useState, useContext, useEffect } from "react";
import { useMeetingManager } from "./MeetingProvider";
export var AudioVideoContext = createContext(null);

var AudioVideoProvider = function AudioVideoProvider(_ref) {
  var children = _ref.children;
  var meetingManager = useMeetingManager();

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      audioVideo = _useState2[0],
      setAudioVideo = _useState2[1];

  useEffect(function () {
    function audioVideoUpdateCb(av) {
      setAudioVideo(av);
    }

    meetingManager.subscribeToAudioVideo(audioVideoUpdateCb);
    return function () {
      return meetingManager.unsubscribeFromAudioVideo(audioVideoUpdateCb);
    };
  }, []);
  return /*#__PURE__*/React.createElement(AudioVideoContext.Provider, {
    value: audioVideo
  }, children);
};

var useAudioVideo = function useAudioVideo() {
  var audioVideo = useContext(AudioVideoContext);
  return audioVideo;
};

export { useAudioVideo, AudioVideoProvider };