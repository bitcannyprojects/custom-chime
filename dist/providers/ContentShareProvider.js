import _regeneratorRuntime from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useCallback, useMemo, createContext, useContext, useEffect, useReducer, useRef } from "react";
import { DefaultModality } from "amazon-chime-sdk-js";
import { reducer, initialState, ContentShareState, ContentActionType } from "./state";
import { useAudioVideo } from "./AudioVideoProvider";
var ContentShareContext = createContext(null);
var ContentShareControlContext = createContext(null);

var ContentShareProvider = function ContentShareProvider(_ref) {
  var children = _ref.children;
  var audioVideo = useAudioVideo();

  var _useReducer = useReducer(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var paused = state.paused,
      isLocalUserSharing = state.isLocalUserSharing,
      isLocalShareLoading = state.isLocalShareLoading;
  var localUserTileIdRef = useRef < number | null > null;
  useEffect(function () {
    if (!audioVideo) {
      return;
    }

    var videoObserver = {
      videoTileDidUpdate: function videoTileDidUpdate(tileState) {
        if (!tileState.boundAttendeeId || !tileState.isContent || !tileState.tileId) {
          return;
        }

        var boundAttendeeId = tileState.boundAttendeeId;
        var baseAttendeeId = new DefaultModality(boundAttendeeId).base();
        var localAttendeeId = audioVideo.audioVideoController.realtimeController.state.localAttendeeId;
        var isLocalUser = baseAttendeeId === localAttendeeId;

        if (!isLocalUser && localUserTileIdRef.current && localUserTileIdRef.current < tileState.tileId) {
          audioVideo.stopContentShare();
          localUserTileIdRef.current = null;
        }

        if (isLocalUser) {
          localUserTileIdRef.current = tileState.tileId;
        }

        dispatch({
          type: ContentActionType.UPDATE,
          payload: {
            tileState: tileState,
            isLocalUser: isLocalUser
          }
        });
      },
      videoTileWasRemoved: function videoTileWasRemoved(tileId) {
        if (tileId === localUserTileIdRef.current) {
          localUserTileIdRef.current = null;
        }

        dispatch({
          type: ContentActionType.REMOVE,
          payload: tileId
        });
      }
    };
    var contentShareObserver = {
      contentShareDidStop: function contentShareDidStop() {
        dispatch({
          type: ContentActionType.DID_STOP
        });
      }
    };
    audioVideo.addObserver(videoObserver);
    audioVideo.addContentShareObserver(contentShareObserver);
    return function () {
      audioVideo.removeObserver(videoObserver);
      audioVideo.removeContentShareObserver(contentShareObserver);
      dispatch({
        type: ContentActionType.RESET
      });
    };
  }, [audioVideo]);
  useEffect(function () {
    if (!audioVideo) {
      return;
    }

    var cb = function cb(event) {
      if (event.reason.name === "NotAllowedError") {
        dispatch({
          type: ContentActionType.DENIED
        });
      }
    };

    window.addEventListener("unhandledrejection", cb);
    return function () {
      return window.removeEventListener("unhandledrejection", cb);
    };
  }, [isLocalShareLoading]);
  var toggleContentShare = useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (audioVideo) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            if (isLocalUserSharing || isLocalShareLoading) {
              audioVideo.stopContentShare();
            } else {
              audioVideo.startContentShareFromScreenCapture();
              dispatch({
                type: ContentActionType.STARTING
              });
            }

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [audioVideo, isLocalUserSharing, isLocalShareLoading]);
  var togglePauseContentShare = useCallback(function () {
    if (!audioVideo || !isLocalUserSharing) {
      return;
    }

    if (paused) {
      audioVideo.unpauseContentShare();
    } else {
      audioVideo.pauseContentShare();
    }

    dispatch({
      type: ContentActionType.TOGGLE_PAUSE
    });
  }, [audioVideo, paused, isLocalUserSharing]);
  var controlsValue = useMemo(function () {
    return {
      paused: paused,
      isLocalUserSharing: isLocalUserSharing,
      isLocalShareLoading: isLocalShareLoading,
      toggleContentShare: toggleContentShare,
      togglePauseContentShare: togglePauseContentShare
    };
  }, [paused, toggleContentShare, togglePauseContentShare, isLocalUserSharing, isLocalShareLoading]);
  return /*#__PURE__*/React.createElement(ContentShareContext.Provider, {
    value: state
  }, /*#__PURE__*/React.createElement(ContentShareControlContext.Provider, {
    value: controlsValue
  }, children));
};

var useContentShareState = function useContentShareState() {
  var contentShareState = useContext(ContentShareContext);

  if (!contentShareState) {
    throw new Error("useContentShareState must be used within a ContentShareProvider");
  }

  return contentShareState;
};

var useContentShareControls = function useContentShareControls() {
  var context = useContext(ContentShareControlContext);

  if (!context) {
    throw new Error("useContentShareControlContext must be used within ContentShareControlProvider");
  }

  return context;
};

export { ContentShareProvider, useContentShareState, useContentShareControls };