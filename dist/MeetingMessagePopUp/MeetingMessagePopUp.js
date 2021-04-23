"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MeetingMessagePopUp;

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

require("./MeetingMessagePopUp.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function MeetingMessagePopUp(_ref) {
  var sessionId = _ref.sessionId,
      sendMessage = _ref.sendMessage,
      getSelectedMeetingMessages = _ref.getSelectedMeetingMessages,
      text = _ref.text,
      setText = _ref.setText,
      messageReducer = _ref.messageReducer,
      user = _ref.user,
      event = _ref.event;
  var messagesEndRef = (0, _react.useRef)(null); // const [text, setText] = useState("");
  // const messageReducer = useSelector((state) => state.messageReducer);

  var currentMeeting = messageReducer.messagePopUpMeeting; // const user = useSelector((state) => state.userReducer.user);
  // const event = useSelector((state) => state.EventReducer?.event);
  // const dispatch = useDispatch();

  (0, _react.useEffect)(function () {
    // const currentMeeting = messageReducer.messagePopUpMeeting;
    getSelectedMeetingMessages(sessionId);
  }, [// messageReducer.messagePopUpMeeting,
    // messageReducer.isMeetingMessageBoxOpen,
  ]);
  (0, _react.useEffect)(function () {
    scrollToBottom();
  });

  var scrollToBottom = function scrollToBottom() {
    // console.log({ messagesEndRef: this.messagesEndRef });
    if (messagesEndRef.current) messagesEndRef.current.scrollIntoView(); // this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }; // const getSelectedMeetingMessages = async (userId) => {
  //   try {
  //     const resp = await axios.get(
  //       `${keys.server}message/meeting/${sessionId}?eventId=${
  //         event?._id || keys.eventId
  //       }`
  //     );
  //     console.log("422", resp);
  //     // this.setState({ selectedUserMessages: resp.data.messages });
  //     dispatch({
  //       type: UPDATE_MESSAGE_STATE,
  //       payload: {
  //         ...messageReducer,
  //         meetingMessages: {
  //           ...messageReducer.meetingMessages,
  //           [sessionId]: resp.data.messages.map((message) => {
  //             message.isRead = true;
  //             return message;
  //           }),
  //         },
  //       },
  //     });
  //     // readMessages();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // const sendMessage = async (e) => {
  //   e.preventDefault();
  //   // const selectedUser = messageReducer.messagePopUpMeeting;
  //   try {
  //     await axios.post(`${keys.server}message`, {
  //       eventId: event?._id || keys.eventId,
  //       channelId: sessionId,
  //       text: text,
  //     });
  //     // if (selectedUser._id === messageReducer.messagePopUpMeeting._id) {
  //     //   setText("");
  //     //   dispatch({
  //     //     type: UPDATE_MESSAGE_STATE,
  //     //     payload: {
  //     //       ...messageReducer,
  //     //       messages: [...messageReducer.messages, mesResp.data],
  //     //     },
  //     //   });
  //     // } else {
  //     setText("");
  //     // }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // const readMessages = () => {
  //   const selectedUser = messageReducer.messagePopUpMeeting;
  //   dispatch(readMessageAction(selectedUser._id));
  //   axios
  //     .put(keys.server + `messages`, {
  //       toUser: selectedUser._id,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err, err.response);
  //     });
  // };


  return /*#__PURE__*/_react.default.createElement("section", {
    className: "messagebox-popup"
  }, /*#__PURE__*/_react.default.createElement("header", {
    className: "messagebox-popup__header"
  }, /*#__PURE__*/_react.default.createElement("aside", {
    style: {
      flex: 2
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "messagebox-popup__avatar"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: (currentMeeting === null || currentMeeting === void 0 ? void 0 : currentMeeting.dpUrl) || "/gravatar.png",
    style: {
      width: "50px"
    }
  }))), /*#__PURE__*/_react.default.createElement("aside", {
    style: {
      flex: 9
    }
  }, /*#__PURE__*/_react.default.createElement("h1", null, currentMeeting === null || currentMeeting === void 0 ? void 0 : currentMeeting.first_name, " ", currentMeeting === null || currentMeeting === void 0 ? void 0 : currentMeeting.last_name, " "))), /*#__PURE__*/_react.default.createElement("main", {
    className: "messagebox-popup__main"
  }, messageReducer.meetingMessages[sessionId] && /*#__PURE__*/_react.default.createElement("div", {
    className: "chatbox"
  }, messageReducer.meetingMessages[sessionId].map(function (message, index) {
    var _message$from, _message$from2, _message$from3;

    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      className: message.from._id === (user === null || user === void 0 ? void 0 : user._id) ? "my-pop-msg" : "your-pop-chat"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "my-chat-pop"
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: "img",
      src: ((_message$from = message.from) === null || _message$from === void 0 ? void 0 : _message$from.dpUrl) || "https://avatars.githubusercontent.com/u/63655456?s=60&v=4",
      className: "rounded-circle"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "ms-pop"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "msg-pop-nm"
    }, (_message$from2 = message.from) === null || _message$from2 === void 0 ? void 0 : _message$from2.first_name, " ", (_message$from3 = message.from) === null || _message$from3 === void 0 ? void 0 : _message$from3.last_name), /*#__PURE__*/_react.default.createElement("p", {
      className: "msg-pop-txt"
    }, message.text), /*#__PURE__*/_react.default.createElement("span", {
      className: "msg-seen-txt"
    }, message.isRead && message.from._id === user._id && /*#__PURE__*/_react.default.createElement("span", {
      className: "read-rcpt"
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "las la-check-double"
    })), (0, _moment.default)(message.createdAt).calendar()))));
  }), /*#__PURE__*/_react.default.createElement("div", {
    ref: messagesEndRef
  }))), /*#__PURE__*/_react.default.createElement("form", {
    className: "form-group msg-snd pop-msg-snd",
    onSubmit: sendMessage
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    className: "form-control mr-2",
    placeholder: "Please enter a message...",
    value: text,
    onChange: function onChange(e) {
      return setText(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-paper-plane",
    "aria-hidden": "true"
  })))));
}