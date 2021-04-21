"use strict";

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _ActivityBar = _interopRequireDefault(require("../../ActivityBar"));

// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var MicrophoneActivityPreviewBar = function MicrophoneActivityPreviewBar() {
  var activityBarRef = (0, _react.useRef)();
  (0, _amazonChimeSdkComponentLibraryReact.useLocalAudioInputActivityPreview)(activityBarRef);
  return /*#__PURE__*/_react.default.createElement(_ActivityBar.default, {
    ref: activityBarRef
  });
};

var _default = MicrophoneActivityPreviewBar;
exports.default = _default;