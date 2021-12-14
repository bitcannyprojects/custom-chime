"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _RealtimeSubscribeChatProvider = require("../../providers/RealtimeSubscribeChatProvider");

var _NavigationProvider = require("../../providers/NavigationProvider");

var _AppStateProvider = require("../../providers/AppStateProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function Navigation() {
  var _useNavigation = (0, _NavigationProvider.useNavigation)(),
      toggleRoster = _useNavigation.toggleRoster,
      toggleMetrics = _useNavigation.toggleMetrics,
      closeNavbar = _useNavigation.closeNavbar,
      toggleChat = _useNavigation.toggleChat,
      showChat = _useNavigation.showChat;

  var _useRealitimeSubscrib = (0, _RealtimeSubscribeChatProvider.useRealitimeSubscribeChatState)(),
      chatData = _useRealitimeSubscrib.chatData;

  var _useAppState = (0, _AppStateProvider.useAppState)(),
      theme = _useAppState.theme,
      toggleTheme = _useAppState.toggleTheme,
      chimeAttendeeId = _useAppState.chimeAttendeeId;

  var lastChatData = chatData[chatData.length - 1];
  var newChat = false;

  if (lastChatData) {
    lastChatData.senderId !== chimeAttendeeId ? newChat = true : newChat = false;
  }

  return /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Navbar, {
    className: "nav",
    flexDirection: "column",
    container: true
  }, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.NavbarHeader, {
    title: "Navigation",
    onClose: closeNavbar
  }), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.NavbarItem, {
    icon: /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Attendees, null),
    onClick: toggleRoster,
    label: "Attendees"
  }), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.NavbarItem, {
    icon: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, newChat ? /*#__PURE__*/_react.default.createElement("img", {
      src: "https://cdn1.iconfinder.com/data/icons/user-interface-glyph-set/512/user-interface-chat-notification-message-glyph-incoming-512.png",
      width: 25,
      height: 25,
      alt: "chat"
    }) : /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Chat, null)),
    onClick: toggleChat,
    label: "Chat"
  }), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.NavbarItem, {
    icon: /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Eye, null),
    onClick: toggleTheme,
    label: theme === "light" ? "Dark mode" : "Light mode"
  }), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.NavbarItem, {
    icon: /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Information, null),
    onClick: toggleMetrics,
    label: "Meeting metrics"
  }));
};

var _default = Navigation;
exports.default = _default;