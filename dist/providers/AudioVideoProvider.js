"use strict";

var _interopRequireWildcard = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioVideoProvider = exports.useAudioVideo = exports.AudioVideoContext = void 0;

var _slicedToArray2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _MeetingProvider = require("./MeetingProvider");

var AudioVideoContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.AudioVideoContext = AudioVideoContext;

var AudioVideoProvider = function AudioVideoProvider(_ref) {
  var children = _ref.children;
  var meetingManager = (0, _MeetingProvider.useMeetingManager)();

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      audioVideo = _useState2[0],
      setAudioVideo = _useState2[1];

  (0, _react.useEffect)(function () {
    function audioVideoUpdateCb(av) {
      setAudioVideo(av);
    }

    meetingManager.subscribeToAudioVideo(audioVideoUpdateCb);
    return function () {
      return meetingManager.unsubscribeFromAudioVideo(audioVideoUpdateCb);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(AudioVideoContext.Provider, {
    value: audioVideo
  }, children);
};

exports.AudioVideoProvider = AudioVideoProvider;

var useAudioVideo = function useAudioVideo() {
  var audioVideo = (0, _react.useContext)(AudioVideoContext);
  return audioVideo;
};

exports.useAudioVideo = useAudioVideo;