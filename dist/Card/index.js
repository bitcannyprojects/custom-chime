// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from "react";
import { SmallText, StyledCard } from "./Styled"; // interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
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
  return /*#__PURE__*/React.createElement(StyledCard, null, header && /*#__PURE__*/React.createElement("div", {
    className: "ch-header"
  }, header), /*#__PURE__*/React.createElement("div", {
    className: "ch-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ch-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "ch-description"
  }, description), smallText && /*#__PURE__*/React.createElement(SmallText, null, smallText)));
};

export default Card;