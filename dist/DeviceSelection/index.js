// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { StyledWrapper, StyledAudioGroup, StyledVideoGroup } from './Styled';
import MicrophoneDevices from './MicrophoneDevices';
import SpeakerDevices from './SpeakerDevices';
import CameraDevices from './CameraDevices';

var DeviceSelection = function DeviceSelection() {
  return /*#__PURE__*/React.createElement(StyledWrapper, null, /*#__PURE__*/React.createElement(StyledAudioGroup, null, /*#__PURE__*/React.createElement(MicrophoneDevices, null), /*#__PURE__*/React.createElement(SpeakerDevices, null)), /*#__PURE__*/React.createElement(StyledVideoGroup, null, /*#__PURE__*/React.createElement(CameraDevices, null)));
};

export default DeviceSelection;