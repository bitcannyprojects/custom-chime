import _regeneratorRuntime from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { createContext, useState, useEffect, useContext, useCallback, useMemo } from "react";
import { useMeetingManager } from "./MeetingProvider";
import { useAudioVideo } from "./AudioVideoProvider";
import { videoInputSelectionToDevice } from "../../utils/device-utils";
var Context = createContext(null);

var LocalVideoProvider = function LocalVideoProvider(_ref) {
  var children = _ref.children;
  var meetingManager = useMeetingManager();
  var audioVideo = useAudioVideo();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isVideoEnabled = _useState2[0],
      setIsVideoEnabled = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      tileId = _useState4[0],
      setTileId = _useState4[1];

  useEffect(function () {
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
  var toggleVideo = useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
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
            return audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.chooseVideoInputDevice(videoInputSelectionToDevice(meetingManager.selectedVideoInputDevice));

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
  useEffect(function () {
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
  var value = useMemo(function () {
    return {
      isVideoEnabled: isVideoEnabled,
      toggleVideo: toggleVideo,
      tileId: tileId
    };
  }, [isVideoEnabled, toggleVideo, tileId]);
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: value
  }, children);
};

var useLocalVideo = function useLocalVideo() {
  var context = useContext(Context);

  if (!context) {
    throw new Error("useLocalVideo must be used within LocalVideoProvider");
  }

  return context;
};

export { LocalVideoProvider, useLocalVideo };