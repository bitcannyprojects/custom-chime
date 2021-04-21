"use strict";

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Styled = require("./Styled");

// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
//   header?: string;
//   title: string;
//   description: any;
//   smallText?: string;
// }
var Card = function Card(_ref) {
  var header = _ref.header,
      title = _ref.title,
      description = _ref.description,
      smallText = _ref.smallText;
  return /*#__PURE__*/_react.default.createElement(_Styled.StyledCard, null, header && /*#__PURE__*/_react.default.createElement("div", {
    className: "ch-header"
  }, header), /*#__PURE__*/_react.default.createElement("div", {
    className: "ch-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ch-title"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "ch-description"
  }, description), smallText && /*#__PURE__*/_react.default.createElement(_Styled.SmallText, null, smallText)));
};

var _default = Card;
exports.default = _default;