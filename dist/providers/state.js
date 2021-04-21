"use strict";

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = reducer;

var _objectSpread2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

function reducer(state, _ref) {
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case ContentActionType.STARTING:
      {
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
          isLocalShareLoading: true
        });
      }

    case ContentActionType.UPDATE:
      {
        var isLocalUser = payload.isLocalUser,
            tileState = payload.tileState;
        var tileId = state.tileId;

        if (tileId === tileState.tileId || tileId && tileId > (tileState === null || tileState === void 0 ? void 0 : tileState.tileId)) {
          return state;
        }

        return {
          paused: false,
          tileId: tileState.tileId,
          isLocalShareLoading: false,
          isLocalUserSharing: isLocalUser,
          sharingAttendeeId: tileState.boundAttendeeId
        };
      }

    case ContentActionType.REMOVE:
      {
        var _tileId = state.tileId;

        if (_tileId !== payload) {
          return state;
        }

        return initialState;
      }

    case ContentActionType.DID_STOP:
      {
        var isLocalUserSharing = state.isLocalUserSharing;

        if (isLocalUserSharing) {
          return initialState;
        }

        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
          isLocalShareLoading: false,
          isLocalUserSharing: false,
          paused: false
        });
      }

    case ContentActionType.TOGGLE_PAUSE:
      {
        if (!state.isLocalUserSharing) {
          return state;
        }

        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
          paused: !state.paused
        });
      }

    case ContentActionType.DENIED:
      {
        if (!state.isLocalShareLoading) {
          return state;
        }

        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
          isLocalShareLoading: false
        });
      }

    case ContentActionType.RESET:
      {
        return initialState;
      }

    default:
      throw new Error("Incorrect type in VideoProvider");
  }
}