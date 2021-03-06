import React, { useEffect, useState } from "react";
import { Heading } from "amazon-chime-sdk-component-library-react";
import {
  useMeetingManager,
  useRosterState,
} from "amazon-chime-sdk-component-library-react";
import { useSelector } from "react-redux";
import JoinMeetingDetails from "../containers/MeetingJoinDetails";
import { StyledLayout } from "./Styled";
import DeviceSelection from "../DeviceSelection";
import { useAppState } from "../providers/AppStateProvider";
import "./style.scss";

const DeviceSetup = ({ match, getData, getAttendee, setSession, user }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { roster } = useRosterState();
  // const [session, setSession] = useState({});
  const meetingManager = useMeetingManager();
  // const user = useSelector((state) => state.userReducer.user);
  const { meetingId, localUserName, setAppMeetingInfo } = useAppState();
  const meetingID = match?.params.id;
  useEffect(() => {
    getBreakoutRoomData(meetingID);
  }, []);

  const getBreakoutRoomData = async (id) => {
    try {
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

      console.log(30, { roster });
      setAppMeetingInfo({
        meetingId: resData.meeting?.Meeting?.MeetingId,
        name: user?.first_name + " " + (user?.last_name || ""),
        role: resData.userSession?.role,
        chimeAttendeeId: resData.userSession?.chimeAttendeeId,
        session: resData.session,
      });
      // if (resData.session?.duration) {
      //   setTimeout(() => {
      //     await meetingManager.leave();
      //     // props.history.push("/");
      //     window.location.href = "/";
      //   }, resData?.session?.duration * 60000);
      // }
      setLoading(false);
    } catch (error) {
      setLoading(false);

      setError(error?.response?.data?.message);
    }
  };
  if (loading) return <div>Loading</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;
  return (
    <div className="meeting-root">
      <StyledLayout>
        <Heading tag="h1" level={3} css="align-self: flex-start">
          Device Settings
        </Heading>
        <JoinMeetingDetails meetingID={meetingID} />
        <DeviceSelection />
      </StyledLayout>
    </div>
  );
};

export default DeviceSetup;
