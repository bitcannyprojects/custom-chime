import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useMeetingManager, useNotificationDispatch, Severity, ActionType } from "amazon-chime-sdk-component-library-react"; // import routes from '../constants/routes';

var NoMeetingRedirect = function NoMeetingRedirect(_ref) {
  var children = _ref.children;
  var history = useHistory();
  var dispatch = useNotificationDispatch();
  var meetingManager = useMeetingManager();
  var payload = {
    severity: Severity.INFO,
    message: "No meeting found, please enter a valid meeting Id",
    autoClose: true
  };
  useEffect(function () {
    if (!meetingManager.meetingSession) {
      dispatch({
        type: ActionType.ADD,
        payload: payload
      });
      history.push("/");
    }
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
};

export default NoMeetingRedirect;