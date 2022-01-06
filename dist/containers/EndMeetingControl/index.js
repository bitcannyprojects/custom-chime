"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _Styled = require("./Styled");

var _AppStateProvider = require("../../providers/AppStateProvider");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import routes from "../../constants/routes";
var EndMeetingControl = function EndMeetingControl() {
  var meetingManager = (0, _amazonChimeSdkComponentLibraryReact.useMeetingManager)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var toggleModal = function toggleModal() {
    return setShowModal(!showModal);
  };

  var _useAppState = (0, _AppStateProvider.useAppState)(),
      meetingId = _useAppState.meetingId;

  var history = (0, _reactRouterDom.useHistory)();

  var leaveMeeting = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return meetingManager.leave();

            case 3:
              // window.close();
              window.location.href = "/lounge";
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function leaveMeeting() {
      return _ref.apply(this, arguments);
    };
  }(); // const endMeetingForAll = async () => {
  //   try {
  //     if (meetingId) {
  //       // await endMeeting(meetingId);
  //       await meetingManager.leave();
  //       history.push("/");
  //     }
  //   } catch (e) {
  //     console.log("Could not end meeting", e);
  //   }
  // };


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
  }), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ModalBody, null, /*#__PURE__*/_react.default.createElement(_Styled.StyledP, null, "Are you sure you want to leave meeting?")), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ModalButtonGroup, {
    primaryButtons: [/*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.ModalButton, {
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