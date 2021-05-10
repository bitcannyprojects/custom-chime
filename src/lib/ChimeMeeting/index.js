import React, { useEffect, useState } from "react";
import {
  VideoTileGrid,
  UserActivityProvider,
  useMeetingStatus,
} from "amazon-chime-sdk-component-library-react";
import { ProgressBar } from "react-bootstrap";
import { StyledLayout, StyledContent } from "./Styled";
import NavigationControl from "../containers/Navigation/NavigationControl";
import { useNavigation } from "../providers/NavigationProvider";
import MeetingDetails from "../containers/MeetingDetails";
import MeetingControls from "../containers/MeetingControls";
import MeetingMetrics from "../containers/MeetingMetrics";
import { useAppState } from "../providers/AppStateProvider";
import classnames from "classnames";
import "./style.scss";
import MeetingMessagePopUp from "../MeetingMessagePopUp/MeetingMessagePopUp";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import ChatIcon from "./material-chat.svg";
import PollIcon from "./awesome-poll.svg";
import qstIcon from "./awesome-question-circle.svg";
import { RealitimeSubscribeStateProvider } from "../providers/RealtimeSubscribeProvider";

const MeetingView = ({
  history,
  match,
  // MeetingMessagePopUp,
  session,
  polls,
  onPollSubmit,
  sendMessage,
  getSelectedMeetingMessages,
  text,
  setText,
  messageReducer,
  user,
  event,
}) => {
  console.log("messageReducer2", messageReducer);
  const { showNavbar, showRoster } = useNavigation();
  const meetingStatus = useMeetingStatus();
  const sessionId = match?.params.id;
  const { meetingId, localUserName, setAppMeetingInfo } = useAppState();
  const [activeTab, setActiveTab] = useState("chat");
  const [responses, setPollResponses] = useState({});
  const handle = useFullScreenHandle();

  useEffect(() => {
    if (!Boolean(meetingId)) {
      history.push(`${history.location.pathname}/devices`);
    }
    //  else {
    //   if (window.socket) {
    //     window.socket.onmessage = (event) => {
    //       console.log("socketData 1", { event });
    //     };
    //   }
    // }
  }, [meetingId]);

  const pollSubmit = (pollId) => {
    const filteredPolResponses = Object.keys(responses).filter(
      (elem) => elem.split("-")[0] === pollId
    );
    const reqData = filteredPolResponses.map((modQuesId) => ({
      questionId: modQuesId.split("-")[1],
      optionIds: responses[modQuesId],
    }));

    onPollSubmit(pollId, reqData);
  };

  console.log("pollssss", polls, responses);
  return (
    <UserActivityProvider>
      <div className="vidcon-root">
        <div className="row">
          <div className="col-lg-8 col-md-6">
            <StyledLayout
              className="metsec"
              showNav={showNavbar}
              showRoster={showRoster}
            >
              <RealitimeSubscribeStateProvider>
                <StyledContent>
                  <MeetingMetrics />
                  <FullScreen handle={handle}>
                    <VideoTileGrid
                      className="videos"
                      noRemoteVideoView={<MeetingDetails />}
                    />
                    <MeetingControls />
                  </FullScreen>
                  <button onClick={handle.enter}>Enter fullscreen</button>
                </StyledContent>
                <NavigationControl />
              </RealitimeSubscribeStateProvider>
            </StyledLayout>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="session-util-tab p-2 d-flex align-items-center">
              <div
                className={classnames("session-tab-item ", {
                  active: activeTab === "chat",
                })}
                onClick={() => setActiveTab("chat")}
              >
                <img src={ChatIcon} />
                Chat
                <button onClick={handle.enter}>Enter fullscreen</button>
              </div>
              {polls?.length > 0 && (
                <div
                  className={classnames("session-tab-item ", {
                    active: activeTab === "polls",
                  })}
                  onClick={() => setActiveTab("polls")}
                >
                  <img src={PollIcon} />
                  Polls
                </div>
              )}
              {/* {session?.type !== "breakout" && (
                <div
                  className={classnames("session-tab-item ", {
                    active: activeTab === "qna",
                  })}
                  onClick={() => setActiveTab("qna")}
                >
                  <img src={qstIcon} />Q & A
                </div>
              )} */}
            </div>
            {activeTab === "chat" && session && (
              <MeetingMessagePopUp
                sessionId={sessionId}
                sendMessage={sendMessage}
                getSelectedMeetingMessages={getSelectedMeetingMessages}
                text={text}
                setText={setText}
                messageReducer={messageReducer}
                user={user}
                event={event}
              />
            )}
            {activeTab === "polls" && (
              <div className="chime-poll-cont">
                {polls.map((poll) => {
                  return (
                    <div className="single-chime-poll">
                      <h2
                        className="mb-2 mx-auto text-center"
                        style={{ fontSize: "22px" }}
                      >
                        {poll.title}
                      </h2>
                      {poll?.questions?.map(
                        (
                          {
                            _id: questionId,
                            isSingleChoice,
                            questionText,
                            options,
                          },
                          index
                        ) => (
                          <div className="form-group mb-2">
                            <label>
                              {index + 1}. {questionText}
                            </label>
                            {options.map(({ _id: optionId, optionText }) => {
                              if (isSingleChoice) {
                                return (
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      checked={responses[
                                        poll._id + "-" + questionId
                                      ]?.includes(optionId)}
                                      onChange={() => {
                                        const modQuesId =
                                          poll._id + "-" + questionId;
                                        setPollResponses({
                                          ...responses,
                                          [modQuesId]: [optionId],
                                        });
                                      }}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="exampleRadios1"
                                    >
                                      {optionText}
                                    </label>
                                  </div>
                                );
                              }
                              return (
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={responses[
                                      poll._id + "-" + questionId
                                    ]?.includes(optionId)}
                                    onChange={() => {
                                      const modQuesId =
                                        poll._id + "-" + questionId;
                                      const isIncluded = responses[
                                        modQuesId
                                      ]?.includes(optionId);
                                      if (isIncluded) {
                                        setPollResponses({
                                          ...responses,
                                          [modQuesId]: responses[
                                            modQuesId
                                          ].filter((id) => id !== optionId),
                                        });
                                      } else {
                                        setPollResponses({
                                          ...responses,
                                          [modQuesId]: [
                                            ...(responses[modQuesId] || []),
                                            optionId,
                                          ],
                                        });
                                      }
                                    }}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="exampleRadios1"
                                  >
                                    {optionText}
                                  </label>
                                </div>
                              );
                            })}
                          </div>
                        )
                      )}
                      {poll?.report?.map(
                        (
                          {
                            _id: questionId,
                            isSingleChoice,
                            questionText,
                            options,
                          },
                          index
                        ) => (
                          <div>
                            <label className="d-block">
                              {index + 1}. {questionText}
                            </label>
                            {options.map(
                              ({ _id: optionId, option, percent }) => {
                                return (
                                  <label className="d-block w-100">
                                    <span className="d-inline-block mb-1">
                                      {option.optionText}
                                    </span>
                                    <ProgressBar
                                      now={percent}
                                      label={`${percent}%`}
                                    />
                                  </label>
                                );
                              }
                            )}
                          </div>
                        )
                      )}
                      {!poll.report && (
                        <button
                          className="btn btn-primary mx-auto my-2"
                          onClick={() => pollSubmit(poll._id)}
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </UserActivityProvider>
  );
};

export default MeetingView;
