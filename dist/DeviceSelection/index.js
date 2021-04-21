"use strict";

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Styled = require("./Styled");

var _MicrophoneDevices = _interopRequireDefault(require("./MicrophoneDevices"));

var _SpeakerDevices = _interopRequireDefault(require("./SpeakerDevices"));

var _CameraDevices = _interopRequireDefault(require("./CameraDevices"));

// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var DeviceSelection = function DeviceSelection() {
  return /*#__PURE__*/_react.default.createElement(_Styled.StyledWrapper, null, /*#__PURE__*/_react.default.createElement(_Styled.StyledAudioGroup, null, /*#__PURE__*/_react.default.createElement(_MicrophoneDevices.default, null), /*#__PURE__*/_react.default.createElement(_SpeakerDevices.default, null)), /*#__PURE__*/_react.default.createElement(_Styled.StyledVideoGroup, null, /*#__PURE__*/_react.default.createElement(_CameraDevices.default, null)));
};

var _default = DeviceSelection;
exports.default = _default;