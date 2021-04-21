"use strict";

var _interopRequireWildcard = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _Styled = require("./Styled");

var _AppStateProvider = require("../../providers/AppStateProvider");

// import { endMeeting } from '../../utils/api';
// import routes from "../../constants/routes";
var EndMeetingControl = function EndMeetingControl() {
  var meetingManager = (0, _amazonChimeSdkComponentLibraryReact.useMeetingManager)();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var toggleModal = function toggleModal() {
    return setShowModal(!showModal);
  };

  var _useAppState = (0, _AppStateProvider.useAppState)(),
      meetingId = _useAppState.meetingId;

  var history = (0, _reactRouterDom.useHistory)();

  var leaveMeeting = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
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
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      return _regenerator.default.wrap(function _callee2$(_context2) {
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

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ControlBarButton, {
    icon: /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Phone, null),
    onClick: toggleModal,
    label: "Leave"
  }), showModal && /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.Modal, {
    size: "md",
    onClose: toggleModal,
    rootId: "modal-root"
  }, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ModalHeader, {
    title: "End Meeting"
  }), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ModalBody, null, /*#__PURE__*/_react.default.createElement(_Styled.StyledP, null, "Leave meeting or you can end the meeting for all. The meeting cannot be used once it ends.")), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ModalButtonGroup, {
    primaryButtons: [/*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ModalButton, {
      onClick: endMeetingForAll,
      variant: "primary",
      label: "End meeting for all",
      closesModal: true
    }), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ModalButton, {
      onClick: leaveMeeting,
      variant: "primary",
      label: "Leave Meeting",
      closesModal: true
    }), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ModalButton, {
      variant: "secondary",
      label: "Cancel",
      closesModal: true
    })]
  })));
};

var _default = EndMeetingControl;
exports.default = _default;