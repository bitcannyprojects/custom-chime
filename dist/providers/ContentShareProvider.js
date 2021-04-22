"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useContentShareControls = exports.useContentShareState = exports.ContentShareProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _amazonChimeSdkJs = require("amazon-chime-sdk-js");

var _state = require("./state");

var _AudioVideoProvider = require("./AudioVideoProvider");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ContentShareContext = /*#__PURE__*/(0, _react.createContext)(null);
var ContentShareControlContext = /*#__PURE__*/(0, _react.createContext)(null);

var ContentShareProvider = function ContentShareProvider(_ref) {
  var children = _ref.children;
  var audioVideo = (0, _AudioVideoProvider.useAudioVideo)();

  var _useReducer = (0, _react.useReducer)(_state.reducer, _state.initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
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
  var toggleContentShare = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
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