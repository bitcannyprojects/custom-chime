"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notifications = function Notifications() {
  var _useNotificationState = (0, _amazonChimeSdkComponentLibraryReact.useNotificationState)(),
      notifications = _useNotificationState.notifications;

  return notifications.length ? /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.NotificationGroup, null) : null;
};

var _default = Notifications;
exports.default = _default;