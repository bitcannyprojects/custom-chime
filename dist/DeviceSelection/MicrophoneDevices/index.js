// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Heading, MicSelection } from 'amazon-chime-sdk-component-library-react';
import { title } from '../Styled';
import MicrophoneActivityPreview from './MicrophoneActivityPreview';

var MicrophoneDevices = function MicrophoneDevices() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Heading, {
    tag: "h2",
    level: 6,
    css: title
  }, "Audio"), /*#__PURE__*/React.createElement(MicSelection, null), /*#__PURE__*/React.createElement(MicrophoneActivityPreview, null));
};

export default MicrophoneDevices;