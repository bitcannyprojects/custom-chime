"use strict";

var _interopRequireWildcard = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

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