"use strict";

var _interopRequireWildcard = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRemoteVideoTileState = exports.RemoteVideoTileProvider = void 0;

var _slicedToArray2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _AudioVideoProvider = require("./AudioVideoProvider");

var _state = require("./state");

var Context = /*#__PURE__*/(0, _react.createContext)(null);

var RemoteVideoTileProvider = function RemoteVideoTileProvider(_ref) {
  var children = _ref.children;
  var audioVideo = (0, _AudioVideoProvider.useAudioVideo)();

  var _useReducer = (0, _react.useReducer)(_state.reducer, _state.initialState),
      _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  (0, _react.useEffect)(function () {
    if (!audioVideo) {
      return;
    }

    var observer = {
      videoTileDidUpdate: function videoTileDidUpdate(tileState) {
        if ((tileState === null || tileState === void 0 ? void 0 : tileState.boundAttendeeId) && (tileState === null || tileState === void 0 ? void 0 : tileState.tileId) && !tileState.isContent && !tileState.localTile) {
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