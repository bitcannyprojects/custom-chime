"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _Styled = require("../Styled");

var _MicrophoneActivityPreview = _interopRequireDefault(require("./MicrophoneActivityPreview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var MicrophoneDevices = function MicrophoneDevices() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Heading, {
    tag: "h2",
    level: 6,
    css: _Styled.title
  }, "Audio"), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.MicSelection, null), /*#__PURE__*/_react.default.createElement(_MicrophoneActivityPreview.default, null));
};

var _default = MicrophoneDevices;
exports.default = _default;