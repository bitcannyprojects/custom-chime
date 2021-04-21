import _slicedToArray from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useContext, useEffect, useReducer, createContext } from "react";
import { useAudioVideo } from "./AudioVideoProvider";
import { State, initialState, reducer, VideoTileActionType } from "./state";
var Context = createContext(null);

var RemoteVideoTileProvider = function RemoteVideoTileProvider(_ref) {
  var children = _ref.children;
  var audioVideo = useAudioVideo();

  var _useReducer = useReducer(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  useEffect(function () {
    if (!audioVideo) {
      return;
    }

    var observer = {
      videoTileDidUpdate: function videoTileDidUpdate(tileState) {
        if ((tileState === null || tileState === void 0 ? void 0 : tileState.boundAttendeeId) && (tileState === null || tileState === void 0 ? void 0 : tileState.tileId) && !tileState.isContent && !tileState.localTile) {
          var tileId = tileState.tileId,
              boundAttendeeId = tileState.boundAttendeeId;
          dispatch({
            type: VideoTileActionType.UPDATE,
            payload: {
              tileId: tileId,
              attendeeId: boundAttendeeId
            }
          });
        }
      },
      videoTileWasRemoved: function videoTileWasRemoved(tileId) {
        dispatch({
          type: VideoTileActionType.REMOVE,
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
  useEffect(function () {
    if (!audioVideo) {
      return;
    }

    return function () {
      return dispatch({
        type: VideoTileActionType.RESET
      });
    };
  }, [audioVideo]);
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: state
  }, children);
};

var useRemoteVideoTileState = function useRemoteVideoTileState() {
  var state = useContext(Context);

  if (!state) {
    throw new Error("useRemoteVideoTileState must be used within a RemoteVideoTileProvider");
  }

  return state;
};

export { RemoteVideoTileProvider, useRemoteVideoTileState };