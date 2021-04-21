"use strict";

var _interopRequireWildcard = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _TestSound = _interopRequireDefault(require("../../utils/TestSound"));

// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var SpeakerDevices = function SpeakerDevices() {
  var _useAudioOutputs = (0, _amazonChimeSdkComponentLibraryReact.useAudioOutputs)(),
      selectedDevice = _useAudioOutputs.selectedDevice;

  var _useState = (0, _react.useState)(selectedDevice),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      selectedOutput = _useState2[0],
      setSelectedOutput = _useState2[1];

  var handleChange = function handleChange(deviceId) {
    setSelectedOutput(deviceId);
  };

  var handleTestSpeaker = function handleTestSpeaker() {
    new _TestSound.default(selectedOutput);
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.SpeakerSelection, {
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.SecondaryButton, {
    label: "Test speakers",
    onClick: handleTestSpeaker
  }));
};

var _default = SpeakerDevices;
exports.default = _default;