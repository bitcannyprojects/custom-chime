"use strict";

var _interopRequireWildcard = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocalVideo = exports.LocalVideoProvider = void 0;

var _regenerator = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _MeetingProvider = require("./MeetingProvider");

var _AudioVideoProvider = require("./AudioVideoProvider");

var _deviceUtils = require("../../utils/device-utils");

var Context = /*#__PURE__*/(0, _react.createContext)(null);

var LocalVideoProvider = function LocalVideoProvider(_ref) {
  var children = _ref.children;
  var meetingManager = (0, _MeetingProvider.useMeetingManager)();
  var audioVideo = (0, _AudioVideoProvider.useAudioVideo)();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isVideoEnabled = _useState2[0],
      setIsVideoEnabled = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      tileId = _useState4[0],
      setTileId = _useState4[1];

  (0, _react.useEffect)(function () {
    if (!audioVideo) {
      return;
    }

    if (audioVideo.hasStartedLocalVideoTile()) {
      setIsVideoEnabled(true);
    }

    return function () {
      setIsVideoEnabled(false);
    };
  }, [audioVideo]);
  var toggleVideo = (0, _react.useCallback)( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(isVideoEnabled || !meetingManager.selectedVideoInputDevice)) {
              _context.next = 5;
              break;
            }

            audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.stopLocalVideoTile();
            setIsVideoEnabled(false);
            _context.next = 9;
            break;

          case 5:
            _context.next = 7;
            return audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.chooseVideoInputDevice((0, _deviceUtils.videoInputSelectionToDevice)(meetingManager.selectedVideoInputDevice));

          case 7:
            audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.startLocalVideoTile();
            setIsVideoEnabled(true);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [audioVideo, isVideoEnabled, meetingManager.selectedVideoInputDevice]);
  (0, _react.useEffect)(function () {
    if (!audioVideo) {
      return;
    }

    var videoTileDidUpdate = function videoTileDidUpdate(tileState) {
      if (!tileState.localTile || !tileState.tileId || tileId === tileState.tileId) {
        return;
      }

      setTileId(tileState.tileId);
    };

    audioVideo.addObserver({
      videoTileDidUpdate: videoTileDidUpdate
    });
  }, [audioVideo, tileId]);
  var value = (0, _react.useMemo)(function () {
    return {
      isVideoEnabled: isVideoEnabled,
      toggleVideo: toggleVideo,
      tileId: tileId
    };
  }, [isVideoEnabled, toggleVideo, tileId]);
  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: value
  }, children);
};

exports.LocalVideoProvider = LocalVideoProvider;

var useLocalVideo = function useLocalVideo() {
  var context = (0, _react.useContext)(Context);

  if (!context) {
    throw new Error("useLocalVideo must be used within LocalVideoProvider");
  }

  return context;
};

exports.useLocalVideo = useLocalVideo;