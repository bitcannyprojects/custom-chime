import React, { useEffect, useState } from "react";
import { Heading } from "amazon-chime-sdk-component-library-react";
import { useMeetingManager } from "amazon-chime-sdk-component-library-react";
import { useSelector } from "react-redux";
import JoinMeetingDetails from "../containers/MeetingJoinDetails";
import { StyledLayout } from "./Styled";
import DeviceSelection from "../DeviceSelection";
import { useAppState } from "../providers/AppStateProvider";
import "./style.scss";

const DeviceSetup = ({ match, getData, getAttendee, setSession, user }) => {
  const [loading, setLoading] = useState(true);
  // const [session, setSession] = useState({});
  const meetingManager = useMeetingManager();
  // const user = useSelector((state) => state.userReducer.user);
  const { meetingId, localUserName, setAppMeetingInfo } = useAppState();
  const meetingID = match?.params.id;
  useEffect(() => {
    getBreakoutRoomData(meetingID);
  }, []);

  const getBreakoutRoomData = async (id) => {
    let resData = await getData(id);
    resData = resData.data;
    console.log({ resData });
    const joinData = {
      meetingInfo: resData.meeting,
      attendeeInfo: resData.attendee,
    };
    setSession(resData.session);
    await meetingManager.join(joinData);
    meetingManager.getAttendee = getAttendee(
      resData.meeting?.Meeting?.MeetingId
    );
    setAppMeetingInfo({
      meetingId: resData.meeting?.Meeting?.MeetingId,
      name: user?.first_name + " " + (user?.last_name || ""),
      role: resData.userSession?.role,
      chimeAttendeeId: resData.userSession?.chimeAttendeeId,
      session: resData.session,
    });
    setLoading(false);
  };
  if (loading) return <div>Loading</div>;
  return (
    <div className="meeting-root">
      <StyledLayout>
        <Heading tag="h1" level={3} css="align-self: flex-start">
          Device Settings
        </Heading>
        <JoinMeetingDetails meetingID={meetingID} session={session} />
        <DeviceSelection />
      </StyledLayout>
    </div>
  );
};

export default DeviceSetup;
