"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFeaturedTileState = useFeaturedTileState;
exports.FeaturedVideoTileProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _RemoteVideoTileProvider = require("./RemoteVideoTileProvider");

var _MeetingProvider = require("./MeetingProvider");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TILE_TRANSITION_DELAY = 1500;
var FeaturedTileContext = /*#__PURE__*/(0, _react.createContext)(null);

var FeaturedVideoTileProvider = function FeaturedVideoTileProvider(_ref) {
  var children = _ref.children;
  var meetingManager = (0, _MeetingProvider.useMeetingManager)();

  var _useRemoteVideoTileSt = (0, _RemoteVideoTileProvider.useRemoteVideoTileState)(),
      attendeeIdToTileId = _useRemoteVideoTileSt.attendeeIdToTileId;

  var activeTileRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
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