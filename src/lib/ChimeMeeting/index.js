import React, { useEffect, useState } from "react";
import {
  VideoTileGrid,
  UserActivityProvider,
  useMeetingStatus,
} from "amazon-chime-sdk-component-library-react";
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

const MeetingView = ({
  history,
  match,
  // MeetingMessagePopUp,
  session,
  polls,
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
  useEffect(() => {
    if (!Boolean(meetingId)) {
      history.push(`${history.location.pathname}/devices`);
    }
  }, [meetingId]);

  return (
    <UserActivityProvider>
      <div className="vidcon-root">
        <div className="row">
          <div className="col-md-8">
            <StyledLayout showNav={showNavbar} showRoster={showRoster}>
              <StyledContent>
                <MeetingMetrics />
                <VideoTileGrid
                  className="videos"
                  noRemoteVideoView={<MeetingDetails />}
                />
                <MeetingControls />
              </StyledContent>
              <NavigationControl />
            </StyledLayout>
          </div>
          <div className="col-md-4">
            <div className="session-util-tab p-2 d-flex align-items-center">
              <div
                className={classnames("session-tab-item ", {
                  active: activeTab === "chat",
                })}
                onClick={() => setActiveTab("chat")}
              >
                <img src="/material-chat.svg" />
                Chat
              </div>
              {polls?.length > 0 && (
                <div
                  className={classnames("session-tab-item ", {
                    active: activeTab === "polls",
                  })}
                  onClick={() => setActiveTab("polls")}
                >
                  <img src="/awesome-poll.svg" />
                  Polls
                </div>
              )}
              {session?.type !== "breakout" && (
                <div
                  className={classnames("session-tab-item ", {
                    active: activeTab === "qna",
                  })}
                  onClick={() => setActiveTab("qna")}
                >
                  <img src="/awesome-question-circle.svg" />Q & A
                </div>
              )}
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
                      {Object.values(poll)[0].questions?.map(
                        (
                          {
                            _id: questionId,
                            isSingleChoice,
                            questionText,
                            options,
                          },
                          index
                        ) => (
                          <div className="form-group">
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
                                      // checked={responses[questionId]?.includes(
                                      //   optionId
                                      // )}
                                      onChange={() => {
                                        // this.setState({
                                        //   responses: {
                                        //     ...responses,
                                        //     [questionId]: [optionId],
                                        //   },
                                        // });
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
                                    // checked={responses[questionId]?.includes(
                                    //   optionId
                                    // )}
                                    onChange={() => {
                                      const isIncluded = responses[
                                        questionId
                                      ]?.includes(optionId);
                                      if (isIncluded) {
                                        return;
                                        // this.setState({
                                        //   responses: {
                                        //     ...responses,
                                        //     [questionId]: responses[
                                        //       questionId
                                        //     ].filter((id) => id !== optionId),
                                        //   },
                                        // });
                                      } else {
                                        // this.setState({
                                        //   responses: {
                                        //     ...responses,
                                        //     [questionId]: [
                                        //       ...(responses[questionId] || []),
                                        //       optionId,
                                        //     ],
                                        //   },
                                        // });
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
                      <button className="btn btn-primary mx-auto my-2">
                        Submit
                      </button>
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
