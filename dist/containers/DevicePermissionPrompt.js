"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _Card = _interopRequireDefault(require("../Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Show permission prompt when the user is granting the browser permissions
// Show nothing if permission is already granted or component loads on initial render
var DevicePermissionPrompt = function DevicePermissionPrompt() {
  var permission = (0, _amazonChimeSdkComponentLibraryReact.useDevicePermissionStatus)();
  return permission === _amazonChimeSdkComponentLibraryReact.DevicePermissionStatus.IN_PROGRESS ? /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Modal, {
    size: "md",
    onClose: function onClose() {
      return console.log("Permission prompt closed");
    },
    rootId: "device-permission-modal-root"
  }, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ModalHeader, {
    title: "Device Label Permissions check",
    displayClose: false
  }), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ModalBody, null, /*#__PURE__*/_react.default.createElement(_Card.default, {
    title: "Unable to get device labels",
    description: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", null, "In order to select media devices, we need to do a quick permissions check of your mic and camera."), /*#__PURE__*/_react.default.createElement("p", null, "When the pop-up appears, choose ", /*#__PURE__*/_react.default.createElement("strong", null, "Allow"), "."))
  }))) : null;
};

var _default = DevicePermissionPrompt;
exports.default = _default;