"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRemoteVideoTileState = exports.RemoteVideoTileProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AudioVideoProvider = require("./AudioVideoProvider");

var _state = require("./state");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Context = /*#__PURE__*/(0, _react.createContext)(null);

var RemoteVideoTileProvider = function RemoteVideoTileProvider(_ref) {
  var children = _ref.children;
  var audioVideo = (0, _AudioVideoProvider.useAudioVideo)();

  var _useReducer = (0, _react.useReducer)(_state.reducer, _state.initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  (0, _react.useEffect)(function () {
    if (!audioVideo) {
      return;
    }

    var observer = {
      videoTileDidUpdate: function videoTileDidUpdate(tileState) {
        if (tileState !== null && tileState !== void 0 && tileState.boundAttendeeId && tileState !== null && tileState !== void 0 && tileState.tileId && !tileState.isContent && !tileState.localTile) {
          var tileId = tileState.tileId,
              boundAttendeeId = tileState.boundAttendeeId;
          dispatch({
            type: _state.VideoTileActionType.UPDATE,
            payload: {
              tileId: tileId,
              attendeeId: boundAttendeeId
            }
          });
        }
      },
      videoTileWasRemoved: function videoTileWasRemoved(tileId) {
        dispatch({
          type: _state.VideoTileActionType.REMOVE,
          payload: {
            tileId: tileId
          }
        });
      }
    };
    audioVideo.addObserver(observer);
    return function () {
      return audioVideo.removeObserver(observer);
    };
  }, [audioVideo]);
  (0, _react.useEffect)(function () {
    if (!audioVideo) {
      return;
    }

    return function () {
      return dispatch({
        type: _state.VideoTileActionType.RESET
      });
    };
  }, [audioVideo]);
  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: state
  }, children);
};

exports.RemoteVideoTileProvider = RemoteVideoTileProvider;

var useRemoteVideoTileState = function useRemoteVideoTileState() {
  var state = (0, _react.useContext)(Context);

  if (!state) {
    throw new Error("useRemoteVideoTileState must be used within a RemoteVideoTileProvider");
  }

  return state;
};

exports.useRemoteVideoTileState = useRemoteVideoTileState;