"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = reducer;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer(state, _ref) {
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case ContentActionType.STARTING:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
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

        return _objectSpread(_objectSpread({}, state), {}, {
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

        return _objectSpread(_objectSpread({}, state), {}, {
          paused: !state.paused
        });
      }

    case ContentActionType.DENIED:
      {
        if (!state.isLocalShareLoading) {
          return state;
        }

        return _objectSpread(_objectSpread({}, state), {}, {
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