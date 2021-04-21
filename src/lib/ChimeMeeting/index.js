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

const MeetingView = ({ history, match, MeetingMessagePopUp }) => {
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
              className={classnames("session-tab-item p-2", {
                active: activeTab === "chat",
              })}
              onClick={() => setActiveTab("chat")}
            >
              Chat
            </div>
            <div
              className={classnames("session-tab-item p-2", {
                active: activeTab === "polls",
              })}
              onClick={() => setActiveTab("polls")}
            >
              Polls
            </div>
            <div
              className={classnames("session-tab-item p-2", {
                active: activeTab === "qna",
              })}
              onClick={() => setActiveTab("qna")}
            >
              Q & A
            </div>
          </div>
          {activeTab === "chat" && (
            <MeetingMessagePopUp sessionId={sessionId} />
          )}
        </div>
      </div>
    </UserActivityProvider>
  );
};

export default MeetingView;
