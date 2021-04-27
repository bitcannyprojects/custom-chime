import React, { useEffect, useRef } from "react";
import moment from "moment";
import "./MeetingMessagePopUp.css";
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
  console.log("messageReducer1", messageReducer);
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
            <img src={currentMeeting?.dpUrl || "/gravatar.png"} />
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
                <div key={index} className={"your-pop-chat"}>
                  <div className="my-chat-pop">
                    <div className="inline-av">
                      <img
                        alt="img"
                        src={
                          message.from?.dpUrl ||
                          "https://avatars.githubusercontent.com/u/63655456?s=60&v=4"
                        }
                        className="rounded-circle"
                      />
                      <span className="msg-pop-nm">
                        {message.from?.first_name} {message.from?.last_name}
                        {message.fromUser?.first_name}{" "}
                        {message.fromUser?.last_name}
                      </span>
                    </div>

                    <div className="ms-pop">
                      <p className="msg-pop-txt">{message.text}</p>

                      <span className="msg-seen-txt">
                        {moment(message.createdAt).format("lll")}
                        {/* {moment(message.createdAt).calendar()} */}
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
