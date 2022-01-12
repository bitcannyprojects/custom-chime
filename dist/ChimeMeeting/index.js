"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _reactBootstrap = require("react-bootstrap");

var _Styled = require("./Styled");

var _NavigationControl = _interopRequireDefault(require("../containers/Navigation/NavigationControl"));

var _NavigationProvider = require("../providers/NavigationProvider");

var _MeetingDetails = _interopRequireDefault(require("../containers/MeetingDetails"));

var _MeetingControls = _interopRequireDefault(require("../containers/MeetingControls"));

var _MeetingMetrics = _interopRequireDefault(require("../containers/MeetingMetrics"));

var _AppStateProvider = require("../providers/AppStateProvider");

var _classnames = _interopRequireDefault(require("classnames"));

require("./style.scss");

var _MeetingMessagePopUp = _interopRequireDefault(require("../MeetingMessagePopUp/MeetingMessagePopUp"));

var _reactFullScreen = require("react-full-screen");

var _amazonChimeSdkJs = require("amazon-chime-sdk-js");

var _materialChat = _interopRequireDefault(require("./material-chat.svg"));

var _awesomePoll = _interopRequireDefault(require("./awesome-poll.svg"));

var _awesomeQuestionCircle = _interopRequireDefault(require("./awesome-question-circle.svg"));

var _RealtimeSubscribeProvider = require("../providers/RealtimeSubscribeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import { Recorder } from "../utils/Recorder";
var MeetingView = function MeetingView(_ref) {
  var history = _ref.history,
      match = _ref.match,
      session = _ref.session,
      polls = _ref.polls,
      onPollSubmit = _ref.onPollSubmit,
      sendMessage = _ref.sendMessage,
      getSelectedMeetingMessages = _ref.getSelectedMeetingMessages,
      text = _ref.text,
      setText = _ref.setText,
      messageReducer = _ref.messageReducer,
      user = _ref.user,
      event = _ref.event;
  // console.log("messageReducer2", messageReducer);
  var meetingManager = (0, _amazonChimeSdkComponentLibraryReact.useMeetingManager)();

  var _useNavigation = (0, _NavigationProvider.useNavigation)(),
      showNavbar = _useNavigation.showNavbar,
      showRoster = _useNavigation.showRoster;

  var _useToggleLocalMute = (0, _amazonChimeSdkComponentLibraryReact.useToggleLocalMute)(),
      muted1 = _useToggleLocalMute.muted,
      toggleMute = _useToggleLocalMute.toggleMute;

  var meetingStatus = (0, _amazonChimeSdkComponentLibraryReact.useMeetingStatus)();
  var sessionId = match === null || match === void 0 ? void 0 : match.params.id;

  var _useAppState = (0, _AppStateProvider.useAppState)(),
      meetingId = _useAppState.meetingId,
      localUserName = _useAppState.localUserName,
      setAppMeetingInfo = _useAppState.setAppMeetingInfo,
      userRole = _useAppState.userRole;

  var _useState = (0, _react.useState)("chat"),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      responses = _useState4[0],
      setPollResponses = _useState4[1];

  var handle = (0, _reactFullScreen.useFullScreenHandle)();
  (0, _react.useEffect)(function () {
    // console.log(555, muted1);
    if (!Boolean(meetingId)) {
      history.push("".concat(history.location.pathname, "/devices"));
    } else {
      if (!muted1) {
        toggleMute();
      }
    } //  else {
    //   if (window.socket) {
    //     window.socket.onmessage = (event) => {
    //       console.log("socketData 1", { event });
    //     };
    //   }
    // }

  }, [meetingId, muted1, toggleMute]);
  (0, _react.useEffect)(function () {
    return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return meetingManager.leave();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  }, []);

  var pollSubmit = function pollSubmit(pollId) {
    var filteredPolResponses = Object.keys(responses).filter(function (elem) {
      return elem.split("-")[0] === pollId;
    });
    var reqData = filteredPolResponses.map(function (modQuesId) {
      return {
        questionId: modQuesId.split("-")[1],
        optionIds: responses[modQuesId]
      };
    });
    onPollSubmit(pollId, reqData);
  };

  var toggleFullScreen = function toggleFullScreen() {
    if (handle.active) {
      handle.exit();
    } else {
      handle.enter();
    }
  }; // console.log("pollssss", polls, responses);
  // const recorder = new Recorder();


  return /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.UserActivityProvider, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "vidcon-root"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("audio", {
    id: "for-speaker",
    style: {
      display: "none"
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: (session === null || session === void 0 ? void 0 : session.type) !== "breakout" && (polls === null || polls === void 0 ? void 0 : polls.length) > 0 ? "col-lg-8 col-md-6" : "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_Styled.StyledLayout, {
    className: "metsec",
    showNav: showNavbar,
    showRoster: showRoster
  }, /*#__PURE__*/_react.default.createElement(_RealtimeSubscribeProvider.RealitimeSubscribeStateProvider, null, /*#__PURE__*/_react.default.createElement(_Styled.StyledContent, null, /*#__PURE__*/_react.default.createElement(_MeetingMetrics.default, null), /*#__PURE__*/_react.default.createElement(_reactFullScreen.FullScreen, {
    handle: handle,
    className: "fullscreen"
  }, /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.VideoTileGrid, {
    className: "videos",
    noRemoteVideoView: /*#__PURE__*/_react.default.createElement(_MeetingDetails.default, null)
  }), /*#__PURE__*/_react.default.createElement(_MeetingControls.default, {
    toggleFullScreen: toggleFullScreen
  }))), /*#__PURE__*/_react.default.createElement(_NavigationControl.default, null)))), (session === null || session === void 0 ? void 0 : session.type) !== "breakout" && (polls === null || polls === void 0 ? void 0 : polls.length) > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-4 col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "session-util-tab p-2 d-flex align-items-center"
  }, (polls === null || polls === void 0 ? void 0 : polls.length) > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("session-tab-item ", {
      active: activeTab === "polls"
    }),
    onClick: function onClick() {
      return setActiveTab("polls");
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _awesomePoll.default
  }), "Polls")), activeTab === "polls" && /*#__PURE__*/_react.default.createElement("div", {
    className: "chime-poll-cont"
  }, polls.map(function (poll) {
    var _poll$questions, _poll$report;

    return /*#__PURE__*/_react.default.createElement("div", {
      className: "single-chime-poll"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "mb-2 mx-auto text-center",
      style: {
        fontSize: "22px"
      }
    }, poll.title), poll === null || poll === void 0 ? void 0 : (_poll$questions = poll.questions) === null || _poll$questions === void 0 ? void 0 : _poll$questions.map(function (_ref3, index) {
      var questionId = _ref3._id,
          isSingleChoice = _ref3.isSingleChoice,
          questionText = _ref3.questionText,
          options = _ref3.options;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "form-group mb-2"
      }, /*#__PURE__*/_react.default.createElement("label", null, index + 1, ". ", questionText), options.map(function (_ref4) {
        var _responses2;

        var optionId = _ref4._id,
            optionText = _ref4.optionText;

        if (isSingleChoice) {
          var _responses;

          return /*#__PURE__*/_react.default.createElement("div", {
            className: "form-check"
          }, /*#__PURE__*/_react.default.createElement("input", {
            className: "form-check-input",
            type: "radio",
            checked: (_responses = responses[poll._id + "-" + questionId]) === null || _responses === void 0 ? void 0 : _responses.includes(optionId),
            onChange: function onChange() {
              var modQuesId = poll._id + "-" + questionId;
              setPollResponses(_objectSpread(_objectSpread({}, responses), {}, _defineProperty({}, modQuesId, [optionId])));
            }
          }), /*#__PURE__*/_react.default.createElement("label", {
            className: "form-check-label",
            htmlFor: "exampleRadios1"
          }, optionText));
        }

        return /*#__PURE__*/_react.default.createElement("div", {
          className: "form-check"
        }, /*#__PURE__*/_react.default.createElement("input", {
          className: "form-check-input",
          type: "checkbox",
          checked: (_responses2 = responses[poll._id + "-" + questionId]) === null || _responses2 === void 0 ? void 0 : _responses2.includes(optionId),
          onChange: function onChange() {
            var _responses$modQuesId;

            var modQuesId = poll._id + "-" + questionId;
            var isIncluded = (_responses$modQuesId = responses[modQuesId]) === null || _responses$modQuesId === void 0 ? void 0 : _responses$modQuesId.includes(optionId);

            if (isIncluded) {
              setPollResponses(_objectSpread(_objectSpread({}, responses), {}, _defineProperty({}, modQuesId, responses[modQuesId].filter(function (id) {
                return id !== optionId;
              }))));
            } else {
              setPollResponses(_objectSpread(_objectSpread({}, responses), {}, _defineProperty({}, modQuesId, [].concat(_toConsumableArray(responses[modQuesId] || []), [optionId]))));
            }
          }
        }), /*#__PURE__*/_react.default.createElement("label", {
          className: "form-check-label",
          htmlFor: "exampleRadios1"
        }, optionText));
      }));
    }), poll === null || poll === void 0 ? void 0 : (_poll$report = poll.report) === null || _poll$report === void 0 ? void 0 : _poll$report.map(function (_ref5, index) {
      var questionId = _ref5._id,
          isSingleChoice = _ref5.isSingleChoice,
          questionText = _ref5.questionText,
          options = _ref5.options;
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
        className: "d-block"
      }, index + 1, ". ", questionText), options.map(function (_ref6) {
        var optionId = _ref6._id,
            option = _ref6.option,
            percent = _ref6.percent;
        return /*#__PURE__*/_react.default.createElement("label", {
          className: "d-block w-100"
        }, /*#__PURE__*/_react.default.createElement("span", {
          className: "d-inline-block mb-1"
        }, option.optionText), /*#__PURE__*/_react.default.createElement(_reactBootstrap.ProgressBar, {
          now: percent,
          label: "".concat(percent, "%")
        }));
      }));
    }), !poll.report && /*#__PURE__*/_react.default.createElement("button", {
      className: "btn btn-primary mx-auto my-2",
      onClick: function onClick() {
        return pollSubmit(poll._id);
      }
    }, "Submit"));
  }))))));
};

var _default = MeetingView;
exports.default = _default;