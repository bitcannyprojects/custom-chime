import _taggedTemplateLiteral from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2;

// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import styled from 'styled-components';
var Track = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 0.625rem;\n  background-color: #ecf0f1;\n  border-radius: 0.25rem;\n"])));
var Progress = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 0.625rem;\n  background-color: #18bc9c;\n  border-radius: 0.25rem;\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 33ms ease-in-out;\n  will-change: transform;\n"])));
var ActivityBar = React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Track, null, /*#__PURE__*/React.createElement(Progress, {
    ref: ref
  }));
});
export default ActivityBar;