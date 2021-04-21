"use strict";

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _Styled = require("../Styled");

var _MicrophoneActivityPreviewBar = _interopRequireDefault(require("./MicrophoneActivityPreviewBar"));

// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var MicrophoneActivityPreview = function MicrophoneActivityPreview() {
  return /*#__PURE__*/_react.default.createElement(_Styled.StyledPreviewGroup, null, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Label, {
    style: {
      display: 'block',
      marginBottom: '.5rem'
    }
  }, "Microphone activity"), /*#__PURE__*/_react.default.createElement(_MicrophoneActivityPreviewBar.default, null));
};

var _default = MicrophoneActivityPreview;
exports.default = _default;