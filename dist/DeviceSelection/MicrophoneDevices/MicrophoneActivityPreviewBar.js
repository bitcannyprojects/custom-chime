// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useRef } from "react";
import { useLocalAudioInputActivityPreview } from "amazon-chime-sdk-component-library-react";
import ActivityBar from "../../ActivityBar";

var MicrophoneActivityPreviewBar = function MicrophoneActivityPreviewBar() {
  var activityBarRef = useRef();
  useLocalAudioInputActivityPreview(activityBarRef);
  return /*#__PURE__*/React.createElement(ActivityBar, {
    ref: activityBarRef
  });
};

export default MicrophoneActivityPreviewBar;