"use strict";

var _interopRequireWildcard = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useContentShareControls = exports.useContentShareState = exports.ContentShareProvider = void 0;

var _regenerator = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _amazonChimeSdkJs = require("amazon-chime-sdk-js");

var _state = require("./state");

var _AudioVideoProvider = require("./AudioVideoProvider");

var ContentShareContext = /*#__PURE__*/(0, _react.createContext)(null);
var ContentShareControlContext = /*#__PURE__*/(0, _react.createContext)(null);

var ContentShareProvider = function ContentShareProvider(_ref) {
  var children = _ref.children;
  var audioVideo = (0, _AudioVideoProvider.useAudioVideo)();

  var _useReducer = (0, _react.useReducer)(_state.reducer, _state.initialState),
      _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var paused = state.paused,
      isLocalUserSharing = state.isLocalUserSharing,
      isLocalShareLoading = state.isLocalShareLoading;
  var localUserTileIdRef = _react.useRef < number | null > null;
  (0, _react.useEffect)(function () {
    if (!audioVideo) {
      return;
    }

    var videoObserver = {
      videoTileDidUpdate: function videoTileDidUpdate(tileState) {
        if (!tileState.boundAttendeeId || !tileState.isContent || !tileState.tileId) {
          return;
        }

        var boundAttendeeId = tileState.boundAttendeeId;
        var baseAttendeeId = new _amazonChimeSdkJs.DefaultModality(boundAttendeeId).base();
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
          type: _state.ContentActionType.UPDATE,
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
          type: _state.ContentActionType.REMOVE,
          payload: tileId
        });
      }
    };
    var contentShareObserver = {
      contentShareDidStop: function contentShareDidStop() {
        dispatch({
          type: _state.ContentActionType.DID_STOP
        });
      }
    };
    audioVideo.addObserver(videoObserver);
    audioVideo.addContentShareObserver(contentShareObserver);
    return function () {
      audioVideo.removeObserver(videoObserver);
      audioVideo.removeContentShareObserver(contentShareObserver);
      dispatch({
        type: _state.ContentActionType.RESET
      });
    };
  }, [audioVideo]);
  (0, _react.useEffect)(function () {
    if (!audioVideo) {
      return;
    }

    var cb = function cb(event) {
      if (event.reason.name === "NotAllowedError") {
        dispatch({
          type: _state.ContentActionType.DENIED
        });
      }
    };

    window.addEventListener("unhandledrejection", cb);
    return function () {
      return window.removeEventListener("unhandledrejection", cb);
    };
  }, [isLocalShareLoading]);
  var toggleContentShare = (0, _react.useCallback)( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
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
                type: _state.ContentActionType.STARTING
              });
            }

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [audioVideo, isLocalUserSharing, isLocalShareLoading]);
  var togglePauseContentShare = (0, _react.useCallback)(function () {
    if (!audioVideo || !isLocalUserSharing) {
      return;
    }

    if (paused) {
      audioVideo.unpauseContentShare();
    } else {
      audioVideo.pauseContentShare();
    }

    dispatch({
      type: _state.ContentActionType.TOGGLE_PAUSE
    });
  }, [audioVideo, paused, isLocalUserSharing]);
  var controlsValue = (0, _react.useMemo)(function () {
    return {
      paused: paused,
      isLocalUserSharing: isLocalUserSharing,
      isLocalShareLoading: isLocalShareLoading,
      toggleContentShare: toggleContentShare,
      togglePauseContentShare: togglePauseContentShare
    };
  }, [paused, toggleContentShare, togglePauseContentShare, isLocalUserSharing, isLocalShareLoading]);
  return /*#__PURE__*/_react.default.createElement(ContentShareContext.Provider, {
    value: state
  }, /*#__PURE__*/_react.default.createElement(ContentShareControlContext.Provider, {
    value: controlsValue
  }, children));
};

exports.ContentShareProvider = ContentShareProvider;

var useContentShareState = function useContentShareState() {
  var contentShareState = (0, _react.useContext)(ContentShareContext);

  if (!contentShareState) {
    throw new Error("useContentShareState must be used within a ContentShareProvider");
  }

  return contentShareState;
};

exports.useContentShareState = useContentShareState;

var useContentShareControls = function useContentShareControls() {
  var context = (0, _react.useContext)(ContentShareControlContext);

  if (!context) {
    throw new Error("useContentShareControlContext must be used within ContentShareControlProvider");
  }

  return context;
};

exports.useContentShareControls = useContentShareControls;