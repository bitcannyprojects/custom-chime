import _regeneratorRuntime from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ControlBarButton, Phone, Modal, ModalBody, ModalHeader, ModalButton, ModalButtonGroup, useMeetingManager } from "amazon-chime-sdk-component-library-react"; // import { endMeeting } from '../../utils/api';

import { StyledP } from "./Styled";
import { useAppState } from "../../providers/AppStateProvider"; // import routes from "../../constants/routes";

var EndMeetingControl = function EndMeetingControl() {
  var meetingManager = useMeetingManager();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var toggleModal = function toggleModal() {
    return setShowModal(!showModal);
  };

  var _useAppState = useAppState(),
      meetingId = _useAppState.meetingId;

  var history = useHistory();

  var leaveMeeting = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              history.push("/");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function leaveMeeting() {
      return _ref.apply(this, arguments);
    };
  }();

  var endMeetingForAll = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              if (!meetingId) {
                _context2.next = 5;
                break;
              }

              _context2.next = 4;
              return meetingManager.leave();

            case 4:
              history.push("/");

            case 5:
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log("Could not end meeting", _context2.t0);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function endMeetingForAll() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ControlBarButton, {
    icon: /*#__PURE__*/React.createElement(Phone, null),
    onClick: toggleModal,
    label: "Leave"
  }), showModal && /*#__PURE__*/React.createElement(Modal, {
    size: "md",
    onClose: toggleModal,
    rootId: "modal-root"
  }, /*#__PURE__*/React.createElement(ModalHeader, {
    title: "End Meeting"
  }), /*#__PURE__*/React.createElement(ModalBody, null, /*#__PURE__*/React.createElement(StyledP, null, "Leave meeting or you can end the meeting for all. The meeting cannot be used once it ends.")), /*#__PURE__*/React.createElement(ModalButtonGroup, {
    primaryButtons: [/*#__PURE__*/React.createElement(ModalButton, {
      onClick: endMeetingForAll,
      variant: "primary",
      label: "End meeting for all",
      closesModal: true
    }), /*#__PURE__*/React.createElement(ModalButton, {
      onClick: leaveMeeting,
      variant: "primary",
      label: "Leave Meeting",
      closesModal: true
    }), /*#__PURE__*/React.createElement(ModalButton, {
      variant: "secondary",
      label: "Cancel",
      closesModal: true
    })]
  })));
};

export default EndMeetingControl;