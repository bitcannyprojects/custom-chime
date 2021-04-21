import React from "react";
import { Modal, ModalBody, ModalHeader, DevicePermissionStatus, useDevicePermissionStatus } from "amazon-chime-sdk-component-library-react";
import Card from "../Card"; // Show permission prompt when the user is granting the browser permissions
// Show nothing if permission is already granted or component loads on initial render

var DevicePermissionPrompt = function DevicePermissionPrompt() {
  var permission = useDevicePermissionStatus();
  return permission === DevicePermissionStatus.IN_PROGRESS ? /*#__PURE__*/React.createElement(Modal, {
    size: "md",
    onClose: function onClose() {
      return console.log("Permission prompt closed");
    },
    rootId: "device-permission-modal-root"
  }, /*#__PURE__*/React.createElement(ModalHeader, {
    title: "Device Label Permissions check",
    displayClose: false
  }), /*#__PURE__*/React.createElement(ModalBody, null, /*#__PURE__*/React.createElement(Card, {
    title: "Unable to get device labels",
    description: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "In order to select media devices, we need to do a quick permissions check of your mic and camera."), /*#__PURE__*/React.createElement("p", null, "When the pop-up appears, choose ", /*#__PURE__*/React.createElement("strong", null, "Allow"), "."))
  }))) : null;
};

export default DevicePermissionPrompt;