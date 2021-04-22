"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import routes from '../constants/routes';
var NoMeetingRedirect = function NoMeetingRedirect(_ref) {
  var children = _ref.children;
  var history = (0, _reactRouterDom.useHistory)();
  var dispatch = (0, _amazonChimeSdkComponentLibraryReact.useNotificationDispatch)();
  var meetingManager = (0, _amazonChimeSdkComponentLibraryReact.useMeetingManager)();
  var payload = {
    severity: _amazonChimeSdkComponentLibraryReact.Severity.INFO,
    message: "No meeting found, please enter a valid meeting Id",
    autoClose: true
  };
  (0, _react.useEffect)(function () {
    if (!meetingManager.meetingSession) {
      dispatch({
        type: _amazonChimeSdkComponentLibraryReact.ActionType.ADD,
        payload: payload
      });
      history.push("/");
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
};

var _default = NoMeetingRedirect;
exports.default = _default;