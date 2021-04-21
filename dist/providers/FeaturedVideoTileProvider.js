import _slicedToArray from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, createContext, useState, useContext, useRef, useMemo } from "react";
import { useRemoteVideoTileState } from "./RemoteVideoTileProvider";
import { useMeetingManager } from "./MeetingProvider";
var TILE_TRANSITION_DELAY = 1500;
var FeaturedTileContext = createContext(null);

var FeaturedVideoTileProvider = function FeaturedVideoTileProvider(_ref) {
  var children = _ref.children;
  var meetingManager = useMeetingManager();

  var _useRemoteVideoTileSt = useRemoteVideoTileState(),
      attendeeIdToTileId = _useRemoteVideoTileSt.attendeeIdToTileId;

  var activeTileRef = useRef(null);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      activeTile = _useState2[0],
      setActiveTile = _useState2[1];

  var timeout = useRef(null);
  var pendingAttendee = useRef(null);
  useEffect(function () {
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
  var value = useMemo(function () {
    return {
      tileId: activeTile
    };
  }, [activeTile]);
  return /*#__PURE__*/React.createElement(FeaturedTileContext.Provider, {
    value: value
  }, children);
};

function useFeaturedTileState() {
  var state = useContext(FeaturedTileContext);

  if (!state) {
    throw new Error("useFeaturedTileState must be used within an FeaturedVideoTileProvider");
  }

  return state;
}

export { FeaturedVideoTileProvider, useFeaturedTileState };