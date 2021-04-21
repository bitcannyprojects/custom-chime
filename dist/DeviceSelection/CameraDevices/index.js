// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Heading, PreviewVideo, QualitySelection, CameraSelection, Label } from 'amazon-chime-sdk-component-library-react';
import { title, StyledInputGroup } from '../Styled';

var CameraDevices = function CameraDevices() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Heading, {
    tag: "h2",
    level: 6,
    css: title
  }, "Video"), /*#__PURE__*/React.createElement(StyledInputGroup, null, /*#__PURE__*/React.createElement(CameraSelection, null)), /*#__PURE__*/React.createElement(StyledInputGroup, null, /*#__PURE__*/React.createElement(QualitySelection, null)), /*#__PURE__*/React.createElement(Label, {
    style: {
      display: 'block',
      marginBottom: '.5rem'
    }
  }, "Video preview"), /*#__PURE__*/React.createElement(PreviewVideo, null));
};

export default CameraDevices;