import _slicedToArray from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState } from "react";
import { SpeakerSelection, SecondaryButton, useAudioOutputs } from "amazon-chime-sdk-component-library-react";
import TestSound from "../../utils/TestSound";

var SpeakerDevices = function SpeakerDevices() {
  var _useAudioOutputs = useAudioOutputs(),
      selectedDevice = _useAudioOutputs.selectedDevice;

  var _useState = useState(selectedDevice),
      _useState2 = _slicedToArray(_useState, 2),
      selectedOutput = _useState2[0],
      setSelectedOutput = _useState2[1];

  var handleChange = function handleChange(deviceId) {
    setSelectedOutput(deviceId);
  };

  var handleTestSpeaker = function handleTestSpeaker() {
    new TestSound(selectedOutput);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SpeakerSelection, {
    onChange: handleChange
  }), /*#__PURE__*/React.createElement(SecondaryButton, {
    label: "Test speakers",
    onClick: handleTestSpeaker
  }));
};

export default SpeakerDevices;