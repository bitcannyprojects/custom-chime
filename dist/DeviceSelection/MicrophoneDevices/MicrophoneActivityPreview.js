// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Label } from 'amazon-chime-sdk-component-library-react';
import { StyledPreviewGroup } from '../Styled';
import MicrophoneActivityPreviewBar from './MicrophoneActivityPreviewBar';

var MicrophoneActivityPreview = function MicrophoneActivityPreview() {
  return /*#__PURE__*/React.createElement(StyledPreviewGroup, null, /*#__PURE__*/React.createElement(Label, {
    style: {
      display: 'block',
      marginBottom: '.5rem'
    }
  }, "Microphone activity"), /*#__PURE__*/React.createElement(MicrophoneActivityPreviewBar, null));
};

export default MicrophoneActivityPreview;