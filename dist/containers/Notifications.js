import React from "react";
import { useNotificationState, NotificationGroup } from "amazon-chime-sdk-component-library-react";

var Notifications = function Notifications() {
  var _useNotificationState = useNotificationState(),
      notifications = _useNotificationState.notifications;

  return notifications.length ? /*#__PURE__*/React.createElement(NotificationGroup, null) : null;
};

export default Notifications;