"use strict";

var _interopRequireWildcard = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNavigation = exports.NavigationProvider = void 0;

var _slicedToArray2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var NavigationContext = /*#__PURE__*/_react.default.createContext();

var isDesktop = function isDesktop() {
  return window.innerWidth > 768;
};

var NavigationProvider = function NavigationProvider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(function () {
    return isDesktop();
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      showNavbar = _useState2[0],
      setShowNavbar = _useState2[1];

  var _useState3 = (0, _react.useState)(function () {
    return isDesktop();
  }),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      showRoster = _useState4[0],
      setShowRoster = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      showMetrics = _useState6[0],
      setShowMetrics = _useState6[1];

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
    setShowRoster(!showRoster);
  };

  var toggleNavbar = function toggleNavbar() {
    setShowNavbar(!showNavbar);
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
    setShowNavbar(false);
  };

  var openRoster = function openRoster() {
    setShowRoster(true);
  };

  var closeRoster = function closeRoster() {
    setShowRoster(false);
  };

  var providerValue = {
    showNavbar: showNavbar,
    showRoster: showRoster,
    showMetrics: showMetrics,
    toggleRoster: toggleRoster,
    toggleNavbar: toggleNavbar,
    toggleMetrics: toggleMetrics,
    openRoster: openRoster,
    closeRoster: closeRoster,
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