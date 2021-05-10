"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _NavigationProvider = require("../../providers/NavigationProvider");

var _react = _interopRequireWildcard(require("react"));

var _RealtimeSubscribeChatProvider = require("../../providers/RealtimeSubscribeChatProvider");

var _AppStateProvider = require("../../providers/AppStateProvider");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var bubbleStyles = "\n  margin: 1rem;\n";

var ChatView = function ChatView() {
  var _useAppState = (0, _AppStateProvider.useAppState)(),
      localUserName = _useAppState.localUserName,
      chimeAttendeeId = _useAppState.chimeAttendeeId;

  var _useNavigation = (0, _NavigationProvider.useNavigation)(),
      closeChat = _useNavigation.closeChat;

  var _useRealitimeSubscrib = (0, _RealtimeSubscribeChatProvider.useRealitimeSubscribeChatState)(),
      chatData = _useRealitimeSubscrib.chatData,
      sendChatData = _useRealitimeSubscrib.sendChatData;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      chatMessage = _useState2[0],
      setChatMessage = _useState2[1];

  var attendeeItems = [];

  var _iterator = _createForOfIteratorHelper(chatData),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var c = _step.value;
      var senderName = c.senderName;
      var senderId = c.senderId;
      var text = c.data;
      var time = new Date(c.createdDate).toLocaleTimeString("ja-JP");
      attendeeItems.push( /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ChatBubbleContainer, {
        timestamp: time,
        key: time + senderName
      }, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ChatBubble, {
        variant: chimeAttendeeId === senderId ? "outgoing" : "incoming",
        senderName: senderName,
        content: text,
        showTail: true,
        css: bubbleStyles
      }, text)));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Roster, {
    className: "roster"
  }, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.RosterHeader, {
    title: "Chat",
    onClose: function onClose() {
      closeChat;
    }
  }), attendeeItems, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Textarea //@ts-ignore
  , {
    onChange: function onChange(e) {
      return setChatMessage(e.target.value);
    },
    value: chatMessage,
    placeholder: "input your message",
    type: "text",
    label: "",
    style: {
      resize: "vertical"
    }
  }), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.PrimaryButton, {
    label: "send",
    onClick: function onClick(e) {
      setChatMessage("");
      sendChatData(chatMessage);
    }
  }));
};

var _default = ChatView;
exports.default = _default;