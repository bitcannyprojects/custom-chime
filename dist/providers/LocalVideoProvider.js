"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocalVideo = exports.LocalVideoProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _MeetingProvider = require("./MeetingProvider");

var _AudioVideoProvider = require("./AudioVideoProvider");

var _deviceUtils = require("../../utils/device-utils");

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

var Context = /*#__PURE__*/(0, _react.createContext)(null);

var LocalVideoProvider = function LocalVideoProvider(_ref) {
  var children = _ref.children;
  var meetingManager = (0, _MeetingProvider.useMeetingManager)();
  var audioVideo = (0, _AudioVideoProvider.useAudioVideo)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isVideoEnabled = _useState2[0],
      setIsVideoEnabled = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      tileId = _useState4[0],
      setTileId = _useState4[1];

  (0, _react.useEffect)(function () {
    if (!audioVideo) {
      return;
    }

    if (audioVideo.hasStartedLocalVideoTile()) {
      setIsVideoEnabled(true);
    }

    return function () {
      setIsVideoEnabled(false);
    };
  }, [audioVideo]);
  var toggleVideo = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(isVideoEnabled || !meetingManager.selectedVideoInputDevice)) {
              _context.next = 5;
              break;
            }

            audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.stopLocalVideoTile();
            setIsVideoEnabled(false);
            _context.next = 9;
            break;

          case 5:
            _context.next = 7;
            return audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.chooseVideoInputDevice((0, _deviceUtils.videoInputSelectionToDevice)(meetingManager.selectedVideoInputDevice));

          case 7:
            audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.startLocalVideoTile();
            setIsVideoEnabled(true);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [audioVideo, isVideoEnabled, meetingManager.selectedVideoInputDevice]);
  (0, _react.useEffect)(function () {
    if (!audioVideo) {
      return;
    }

    var videoTileDidUpdate = function videoTileDidUpdate(tileState) {
      if (!tileState.localTile || !tileState.tileId || tileId === tileState.tileId) {
        return;
      }

      setTileId(tileState.tileId);
    };

    audioVideo.addObserver({
      videoTileDidUpdate: videoTileDidUpdate
    });
  }, [audioVideo, tileId]);
  var value = (0, _react.useMemo)(function () {
    return {
      isVideoEnabled: isVideoEnabled,
      toggleVideo: toggleVideo,
      tileId: tileId
    };
  }, [isVideoEnabled, toggleVideo, tileId]);
  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: value
  }, children);
};

exports.LocalVideoProvider = LocalVideoProvider;

var useLocalVideo = function useLocalVideo() {
  var context = (0, _react.useContext)(Context);

  if (!context) {
    throw new Error("useLocalVideo must be used within LocalVideoProvider");
  }

  return context;
};

exports.useLocalVideo = useLocalVideo;