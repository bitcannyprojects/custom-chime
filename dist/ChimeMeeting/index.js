"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _amazonChimeSdkComponentLibraryReact = require("amazon-chime-sdk-component-library-react");

var _Styled = require("./Styled");

var _NavigationControl = _interopRequireDefault(require("../containers/Navigation/NavigationControl"));

var _NavigationProvider = require("../providers/NavigationProvider");

var _MeetingDetails = _interopRequireDefault(require("../containers/MeetingDetails"));

var _MeetingControls = _interopRequireDefault(require("../containers/MeetingControls"));

var _MeetingMetrics = _interopRequireDefault(require("../containers/MeetingMetrics"));

var _AppStateProvider = require("../providers/AppStateProvider");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MeetingView = function MeetingView(_ref) {
  var history = _ref.history,
      match = _ref.match,
      MeetingMessagePopUp = _ref.MeetingMessagePopUp,
      session = _ref.session,
      polls = _ref.polls;

  var _useNavigation = (0, _NavigationProvider.useNavigation)(),
      showNavbar = _useNavigation.showNavbar,
      showRoster = _useNavigation.showRoster;

  var meetingStatus = (0, _amazonChimeSdkComponentLibraryReact.useMeetingStatus)();
  var sessionId = match === null || match === void 0 ? void 0 : match.params.id;

  var _useAppState = (0, _AppStateProvider.useAppState)(),
      meetingId = _useAppState.meetingId,
      localUserName = _useAppState.localUserName,
      setAppMeetingInfo = _useAppState.setAppMeetingInfo;

  var _useState = (0, _react.useState)("chat"),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  (0, _react.useEffect)(function () {
    if (!Boolean(meetingId)) {
      history.push("".concat(history.location.pathname, "/devices"));
    }
  }, [meetingId]);
  return /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.UserActivityProvider, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/_react.default.createElement(_Styled.StyledLayout, {
    showNav: showNavbar,
    showRoster: showRoster
  }, /*#__PURE__*/_react.default.createElement(_Styled.StyledContent, null, /*#__PURE__*/_react.default.createElement(_MeetingMetrics.default, null), /*#__PURE__*/_react.default.createElement(_amazonChimeSdkComponentLibraryReact.VideoTileGrid, {
    className: "videos",
    noRemoteVideoView: /*#__PURE__*/_react.default.createElement(_MeetingDetails.default, null)
  }), /*#__PURE__*/_react.default.createElement(_MeetingControls.default, null)), /*#__PURE__*/_react.default.createElement(_NavigationControl.default, null))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "session-util-tab p-2 d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("session-tab-item p-2", {
      active: activeTab === "chat"
    }),
    onClick: function onClick() {
      return setActiveTab("chat");
    }
  }, "Chat"), (polls === null || polls === void 0 ? void 0 : polls.length) > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("session-tab-item p-2", {
      active: activeTab === "polls"
    }),
    onClick: function onClick() {
      return setActiveTab("polls");
    }
  }, "Polls"), (session === null || session === void 0 ? void 0 : session.type) !== "breakout" && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("session-tab-item p-2", {
      active: activeTab === "qna"
    }),
    onClick: function onClick() {
      return setActiveTab("qna");
    }
  }, "Q & A")), activeTab === "chat" && session && /*#__PURE__*/_react.default.createElement(MeetingMessagePopUp, {
    sessionId: sessionId
  }), activeTab === "polls" && /*#__PURE__*/_react.default.createElement("div", {
    className: "chime-poll-cont"
  }, polls.map(function (poll) {
    var _Object$values$0$ques;

    return /*#__PURE__*/_react.default.createElement("div", {
      className: "single-chime-poll"
    }, (_Object$values$0$ques = Object.values(poll)[0].questions) === null || _Object$values$0$ques === void 0 ? void 0 : _Object$values$0$ques.map(function (_ref2, index) {
      var questionId = _ref2._id,
          isSingleChoice = _ref2.isSingleChoice,
          questionText = _ref2.questionText,
          options = _ref2.options;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react.default.createElement("label", null, index + 1, ". ", questionText), options.map(function (_ref3) {
        var optionId = _ref3._id,
            optionText = _ref3.optionText;

        if (isSingleChoice) {
          return /*#__PURE__*/_react.default.createElement("div", {
            className: "form-check"
          }, /*#__PURE__*/_react.default.createElement("input", {
            className: "form-check-input",
            type: "radio" // checked={responses[questionId]?.includes(
            //   optionId
            // )}
            ,
            onChange: function onChange() {// this.setState({
              //   responses: {
              //     ...responses,
              //     [questionId]: [optionId],
              //   },
              // });
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
          type: "checkbox" // checked={responses[questionId]?.includes(
          //   optionId
          // )}
          ,
          onChange: function onChange() {
            var _responses$questionId;

            var isIncluded = (_responses$questionId = responses[questionId]) === null || _responses$questionId === void 0 ? void 0 : _responses$questionId.includes(optionId);

            if (isIncluded) {
              return; // this.setState({
              //   responses: {
              //     ...responses,
              //     [questionId]: responses[
              //       questionId
              //     ].filter((id) => id !== optionId),
              //   },
              // });
            } else {// this.setState({
                //   responses: {
                //     ...responses,
                //     [questionId]: [
                //       ...(responses[questionId] || []),
                //       optionId,
                //     ],
                //   },
                // });
              }
          }
        }), /*#__PURE__*/_react.default.createElement("label", {
          className: "form-check-label",
          htmlFor: "exampleRadios1"
        }, optionText));
      }));
    }), /*#__PURE__*/_react.default.createElement("button", {
      className: "btn btn-primary mx-auto my-2"
    }, "Submit"));
  })))));
};

var _default = MeetingView;
exports.default = _default;