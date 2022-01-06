"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RealitimeSubscribeChatStateProvider = exports.useRealitimeSubscribeChatState = void 0;

var _react = _interopRequireWildcard(require("react"));

var _amazonChimeSdkJs = require("amazon-chime-sdk-js");

var _uuid = require("uuid");

var _AppStateProvider = require("./AppStateProvider");

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RealitimeSubscribeChatStateContext = /*#__PURE__*/_react.default.createContext();

var useRealitimeSubscribeChatState = function useRealitimeSubscribeChatState() {
  var state = (0, _react.useContext)(RealitimeSubscribeChatStateContext);

  if (!state) {
    throw new Error("Error using RealitimeSubscribe in context!");
  }

  return state;
};

exports.useRealitimeSubscribeChatState = useRealitimeSubscribeChatState;

var RealitimeSubscribeChatStateProvider = function RealitimeSubscribeChatStateProvider(_ref) {
  var children = _ref.children;
  var audioVideo = (0, _amazonChimeSdkComponentLibraryReact.useAudioVideo)();

  var _useAppState = (0, _AppStateProvider.useAppState)(),
      localUserName = _useAppState.localUserName,
      chimeAttendeeId = _useAppState.chimeAttendeeId;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      chatData = _useState2[0],
      setChatData = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isTyping = _useState4[0],
      setTyping = _useState4[1];

  var sendChatData = function sendChatData(text) {
    var mess = {
      uuid: (0, _uuid.v4)(),
      action: "sendmessage",
      cmd: "TEXT",
      data: text,
      createdDate: new Date().getTime(),
      senderName: localUserName,
      senderId: chimeAttendeeId
    };
    audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeSendDataMessage("CHAT", JSON.stringify(mess)); // console.log(355, mess);

    setChatData([].concat(_toConsumableArray(chatData), [mess]));
  };

  var receiveChatData = function receiveChatData(mess) {
    try {
      // console.log(mess);
      // const senderId = mess.senderAttendeeId
      var data = JSON.parse(mess.text()); // data.senderId = senderId

      data.new = true; // console.log(444, data);

      setChatData([].concat(_toConsumableArray(chatData), [data]));
    } catch (error) {
      console.log(577, error);
    }
  };

  var sendTyping = function sendTyping() {
    try {
      var typeMess = {
        senderId: chimeAttendeeId,
        type: "TYPING"
      };
      audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeSendDataMessage("TYPING", JSON.stringify(typeMess)); // setTypingData(typeMess);
      // console.log("sendTyping: ", typeMess);
    } catch (error) {
      console.log(577, error);
    }
  };

  var receiveTyping = function receiveTyping(data) {
    try {
      // console.log("receiveTyping: ", data);
      var msg = JSON.parse(data.text());

      if (msg.senderId != chimeAttendeeId) {
        setTyping(true);
        setTimeout(function () {
          setTyping(false);
        }, 3000);
      } else setTyping(false);
    } catch (error) {
      console.log(577, error);
    }
  };

  (0, _react.useEffect)(function () {
    try {
      // console.log("chat! open");
      audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeSubscribeToReceiveDataMessage("CHAT", receiveChatData);
      audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeSubscribeToReceiveDataMessage("TYPING", receiveTyping);
      return function () {
        // console.log("chat! end");
        audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeUnsubscribeFromReceiveDataMessage("CHAT");
        audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.realtimeUnsubscribeFromReceiveDataMessage("TYPING");
      };
    } catch (error) {
      console.log(577, error);
    }
  }); // useEffect(() => {
  //   console.log("chat! open");
  //   audioVideo?.realtimeSubscribeToReceiveDataMessage("TYPING", receiveChatData);
  // });

  var providerValue = {
    chatData: chatData,
    sendChatData: sendChatData,
    isTyping: isTyping,
    sendTyping: sendTyping
  };
  return /*#__PURE__*/_react.default.createElement(RealitimeSubscribeChatStateContext.Provider, {
    value: providerValue
  }, children);
};

exports.RealitimeSubscribeChatStateProvider = RealitimeSubscribeChatStateProvider;