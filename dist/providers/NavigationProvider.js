"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNavigation = exports.NavigationProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NavigationContext = /*#__PURE__*/_react.default.createContext();

var isDesktop = function isDesktop() {
  return window.innerWidth > 768;
};

var NavigationProvider = function NavigationProvider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(function () {
    return isDesktop();
  }),
      _useState2 = _slicedToArray(_useState, 2),
      showNavbar = _useState2[0],
      setShowNavbar = _useState2[1];

  var _useState3 = (0, _react.useState)(function () {
    return isDesktop();
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      showRoster = _useState4[0],
      setShowRoster = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showMetrics = _useState6[0],
      setShowMetrics = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showChat = _useState8[0],
      setShowChat = _useState8[1];

  var isDesktopView = (0, _react.useRef)(isDesktop());
  var location = (0, _reactRouterDom.useLocation)();
  var meetingManager = (0, _amazonChimeSdkComponentLibraryReact.useMeetingManager)();
  (0, _react.useEffect)(function () {
    if (location.pathname.includes("/meeting")) {
      return function () {
        meetingManager.leave();
      };
    }
  }, [location.pathname]);
  (0, _react.useEffect)(function () {
    var handler = function handler() {
      var isResizeDesktop = isDesktop();

      if (isDesktopView.current === isResizeDesktop) {
        return;
      }

      isDesktopView.current = isResizeDesktop;

      if (!isResizeDesktop) {
        setShowNavbar(false);
        setShowRoster(false);
        setShowChat(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("resize", handler);
    return function () {
      return window.removeEventListener("resize", handler);
    };
  }, []);

  var toggleRoster = function toggleRoster() {
    // console.log("151--->>>", "toggleRoaster");
    if (showRoster) {
      closeChat();
    }

    setShowRoster(!showRoster);
  };

  var toggleNavbar = function toggleNavbar() {
    // console.log("151--->>>", "toggleNavbar");
    setShowNavbar(!showNavbar); // if (showChat) {
    //   closeChat();
    // }
  };

  var toggleChat = function toggleChat() {
    // console.log("151--->>>", "toggleChat");
    // if (showChat) {
    //   toggleNavbar();
    // }
    if (!showChat) {
      openRoster(true);
    }

    setShowChat(!showChat);
  };

  var toggleMetrics = function toggleMetrics() {
    setShowMetrics(function (currentState) {
      return !currentState;
    });
  };

  var openNavbar = function openNavbar() {
    setShowNavbar(true);
  };

  var closeNavbar = function closeNavbar() {
    // console.log("151--->>>", "closenavbar");
    setShowNavbar(false);
  };

  var openRoster = function openRoster() {
    setShowRoster(true);
  };

  var closeRoster = function closeRoster() {
    // console.log("151--->>>", "closeRoster");
    setShowRoster(false);
  };

  var openChat = function openChat() {
    setShowChat(true);
  };

  var closeChat = function closeChat() {
    // console.log("151--->>>", "closeChat");
    setShowChat(false);
  };

  var providerValue = {
    showNavbar: showNavbar,
    showRoster: showRoster,
    showMetrics: showMetrics,
    showChat: showChat,
    toggleRoster: toggleRoster,
    toggleNavbar: toggleNavbar,
    toggleMetrics: toggleMetrics,
    toggleChat: toggleChat,
    openRoster: openRoster,
    closeRoster: closeRoster,
    openChat: openChat,
    closeChat: closeChat,
    openNavbar: openNavbar,
    closeNavbar: closeNavbar
  };
  return /*#__PURE__*/_react.default.createElement(NavigationContext.Provider, {
    value: providerValue
  }, children);
};

exports.NavigationProvider = NavigationProvider;

var useNavigation = function useNavigation() {
  var context = (0, _react.useContext)(NavigationContext);

  if (!context) {
    throw Error("Use useNavigation in NavigationProvider");
  }

  return context;
};

exports.useNavigation = useNavigation;