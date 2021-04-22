import React, { useEffect, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
// import axios from "axios";
// import keys from "../config/keys";
// import { UPDATE_MESSAGE_STATE } from "../redux/types";
// import { readMessageAction } from "../redux/actions";
import "./MeetingMessagePopUp.scss";
// import ScrollToBottom from "react-scroll-to-bottom";
export default function MeetingMessagePopUp({
  sessionId,
  sendMessage,
  getSelectedMeetingMessages,
  text,
  setText,
  messageReducer,
  user,
  event,
}) {
  const messagesEndRef = useRef(null);
  // const [text, setText] = useState("");
  // const messageReducer = useSelector((state) => state.messageReducer);
  const currentMeeting = messageReducer.messagePopUpMeeting;
  // const user = useSelector((state) => state.userReducer.user);
  // const event = useSelector((state) => state.EventReducer?.event);

  // const dispatch = useDispatch();
  useEffect(
    () => {
      // const currentMeeting = messageReducer.messagePopUpMeeting;
      getSelectedMeetingMessages(sessionId);
    },
    [
      // messageReducer.messagePopUpMeeting,
      // messageReducer.isMeetingMessageBoxOpen,
    ]
  );

  useEffect(() => {
    scrollToBottom();
  });
  const scrollToBottom = () => {
    // console.log({ messagesEndRef: this.messagesEndRef });
    if (messagesEndRef.current) messagesEndRef.current.scrollIntoView();
    // this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // const getSelectedMeetingMessages = async (userId) => {
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
  return (
    <section className="messagebox-popup">
      <header className="messagebox-popup__header">
        <aside style={{ flex: 2 }}>
          <div className="messagebox-popup__avatar">
            <img
              src={currentMeeting?.dpUrl || "/gravatar.png"}
              style={{
                width: "50px",
              }}
            />
          </div>
        </aside>
        <aside style={{ flex: 9 }}>
          <h1>
            {currentMeeting?.first_name} {currentMeeting?.last_name}{" "}
            {/* <span>Typically replies within a day</span> */}
          </h1>
        </aside>
        {/* <aside style={{ flex: 1 }}>
          <button
            className="chatbox-close"
            onClick={() =>
              dispatch({
                type: UPDATE_MESSAGE_STATE,
                payload: {
                  isMeetingMessageBoxOpen: false,
                  messagePopUpMeeting: null,
                },
              })
            }
          >
            <i className="las la-times"></i>
          </button>
        </aside> */}
      </header>
      <main className="messagebox-popup__main">
        {messageReducer.meetingMessages[sessionId] && (
          <div className="chatbox">
            {messageReducer.meetingMessages[sessionId].map((message, index) => {
              return (
                <div
                  key={index}
                  className={
                    message.from._id === user?._id
                      ? "my-pop-msg"
                      : "your-pop-chat"
                  }
                >
                  <div className="my-chat-pop">
                    <img
                      alt="img"
                      src={
                        message.from?.dpUrl ||
                        "https://avatars.githubusercontent.com/u/63655456?s=60&v=4"
                      }
                      className="rounded-circle"
                    />
                    <div className="ms-pop">
                      <span className="msg-pop-nm">
                        {message.from?.first_name} {message.from?.last_name}
                      </span>

                      <p className="msg-pop-txt">{message.text}</p>

                      <span className="msg-seen-txt">
                        {message.isRead && message.from._id === user._id && (
                          <span className="read-rcpt">
                            <i className="las la-check-double"></i>
                          </span>
                        )}
                        {/* {moment(message.createdAt).format("HH:MM A")} */}
                        {moment(message.createdAt).calendar()}
                      </span>
                    </div>
                  </div>
                  {/* {index < messageReducer.meetingMessages.length - 1 && <hr />} */}
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>
        )}
      </main>
      <form className="form-group msg-snd pop-msg-snd" onSubmit={sendMessage}>
        <textarea
          className="form-control mr-2"
          placeholder="Please enter a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div>
          <button>
            <i className="fa fa-paper-plane" aria-hidden="true"></i>
          </button>
        </div>
      </form>
      {/* <footer className="messagebox-popup__footer"></footer> */}
    </section>
  );
}
