"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMeetingManager = exports.MeetingProvider = exports.MeetingContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _MeetingManager = _interopRequireDefault(require("./MeetingManager"));

var _AudioVideoProvider = require("./AudioVideoProvider");

var _RosterProvider = require("./RosterProvider");

var _DevicesProvider = require("./DevicesProvider");

var _RemoteVideoTileProvider = require("./RemoteVideoTileProvider");

var _LocalVideoProvider = require("./LocalVideoProvider");

var _FeaturedVideoTileProvider = require("./FeaturedVideoTileProvider");

var _LocalAudioOutputProvider = require("./LocalAudioOutputProvider");

var _ContentShareProvider = require("./ContentShareProvider");

var _amazonChimeSdkJs = require("amazon-chime-sdk-js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MeetingContext = /*#__PURE__*/_react.default.createContext();

exports.MeetingContext = MeetingContext;

var MeetingProvider = function MeetingProvider(_ref) {
  var _ref$logLevel = _ref.logLevel,
      logLevel = _ref$logLevel === void 0 ? _amazonChimeSdkJs.LogLevel.WARN : _ref$logLevel,
      postLogConfig = _ref.postLogConfig,
      _ref$simulcastEnabled = _ref.simulcastEnabled,
      simulcastEnabled = _ref$simulcastEnabled === void 0 ? false : _ref$simulcastEnabled,
      meetingManagerProp = _ref.meetingManager,
      children = _ref.children;

  var _useState = (0, _react.useState)(function () {
    return meetingManagerProp || new _MeetingManager.default({
      logLevel: logLevel,
      postLogConfig: postLogConfig,
      simulcastEnabled: simulcastEnabled
    });
  }),
      _useState2 = _slicedToArray(_useState, 1),
      meetingManager = _useState2[0];

  return /*#__PURE__*/_react.default.createElement(MeetingContext.Provider, {
    value: meetingManager
  }, /*#__PURE__*/_react.default.createElement(_AudioVideoProvider.AudioVideoProvider, null, /*#__PURE__*/_react.default.createElement(_DevicesProvider.DevicesProvider, null, /*#__PURE__*/_react.default.createElement(_RosterProvider.RosterProvider, null, /*#__PURE__*/_react.default.createElement(_RemoteVideoTileProvider.RemoteVideoTileProvider, null, /*#__PURE__*/_react.default.createElement(_LocalVideoProvider.LocalVideoProvider, null, /*#__PURE__*/_react.default.createElement(_LocalAudioOutputProvider.LocalAudioOutputProvider, null, /*#__PURE__*/_react.default.createElement(_ContentShareProvider.ContentShareProvider, null, /*#__PURE__*/_react.default.createElement(_FeaturedVideoTileProvider.FeaturedVideoTileProvider, null, children)))))))));
};

exports.MeetingProvider = MeetingProvider;

var useMeetingManager = function useMeetingManager() {
  var meetingManager = (0, _react.useContext)(MeetingContext);

  if (!meetingManager) {
    throw new Error("useMeetingManager must be used within MeetingProvider");
  }

  return meetingManager;
};

exports.useMeetingManager = useMeetingManager;