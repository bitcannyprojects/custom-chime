"use strict";

var _interopRequireWildcard = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFeaturedTileState = useFeaturedTileState;
exports.FeaturedVideoTileProvider = void 0;

var _slicedToArray2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _RemoteVideoTileProvider = require("./RemoteVideoTileProvider");

var _MeetingProvider = require("./MeetingProvider");

var TILE_TRANSITION_DELAY = 1500;
var FeaturedTileContext = /*#__PURE__*/(0, _react.createContext)(null);

var FeaturedVideoTileProvider = function FeaturedVideoTileProvider(_ref) {
  var children = _ref.children;
  var meetingManager = (0, _MeetingProvider.useMeetingManager)();

  var _useRemoteVideoTileSt = (0, _RemoteVideoTileProvider.useRemoteVideoTileState)(),
      attendeeIdToTileId = _useRemoteVideoTileSt.attendeeIdToTileId;

  var activeTileRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      activeTile = _useState2[0],
      setActiveTile = _useState2[1];

  var timeout = (0, _react.useRef)(null);
  var pendingAttendee = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var activeSpeakerCallback = function activeSpeakerCallback(activeAttendees) {
      var activeId = activeAttendees[0];

      if (activeId === pendingAttendee.current) {
        return;
      }

      pendingAttendee.current = activeId;

      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      if (!activeId) {
        activeTileRef.current = null;
        setActiveTile(null);
        return;
      }

      var tileId = attendeeIdToTileId[activeId];

      if (!tileId) {
        if (activeTileRef.current) {
          timeout.current = window.setTimeout(function () {
            activeTileRef.current = null;
            setActiveTile(null);
          }, TILE_TRANSITION_DELAY);
        }

        return;
      }

      if (tileId === activeTileRef.current) {
        return;
      } // Set featured tile immediately if there is no current featured tile.
      // Otherwise, delay it to avoid tiles jumping around too frequently


      if (!activeTileRef.current) {
        activeTileRef.current = tileId;
        setActiveTile(tileId);
      } else {
        timeout.current = window.setTimeout(function () {
          activeTileRef.current = tileId;
          setActiveTile(tileId);
        }, TILE_TRANSITION_DELAY);
      }
    };

    meetingManager.subscribeToActiveSpeaker(activeSpeakerCallback);
    return function () {
      return meetingManager.unsubscribeFromActiveSpeaker(activeSpeakerCallback);
    };
  }, [attendeeIdToTileId]);
  var value = (0, _react.useMemo)(function () {
    return {
      tileId: activeTile
    };
  }, [activeTile]);
  return /*#__PURE__*/_react.default.createElement(FeaturedTileContext.Provider, {
    value: value
  }, children);
};

exports.FeaturedVideoTileProvider = FeaturedVideoTileProvider;

function useFeaturedTileState() {
  var state = (0, _react.useContext)(FeaturedTileContext);

  if (!state) {
    throw new Error("useFeaturedTileState must be used within an FeaturedVideoTileProvider");
  }

  return state;
}