import React, { useState, useEffect } from "react";
import {
  Roster,
  RosterHeader,
  RosterGroup,
  useRosterState,
  RosterAttendee,
  RosterCell,
  useAttendeeAudioStatus,
  useToggleLocalMute,
  useAudioVideo,
  useMeetingManager,
} from "amazon-chime-sdk-component-library-react";
import { useAppState } from "../providers/AppStateProvider";
import { useNavigation } from "../providers/NavigationProvider";

const MeetingRoster = () => {
  const meetingManager = useMeetingManager();
  const { roster } = useRosterState();
  const [filter, setFilter] = useState("");
  const { closeRoster } = useNavigation();
  const { muted: muted1, toggleMute } = useToggleLocalMute();
  const audioVideo = useAudioVideo();
  const { localUserName, chimeAttendeeId, userRole, session } = useAppState();
  console.log({ roster });

  // const isAttendee
  let attendees = Object.values(roster);
  // console.log("roasterattendee", attendees);

  const receiveActionData = async (mess) => {
    try {
      const data = JSON.parse(mess.text());
      console.log(data);

      if (data.action === "kick") {
        const attendeeId = data.chimeAttendeeId;
        if (chimeAttendeeId === attendeeId) {
          await meetingManager.leave();
          // props.history.push("/");
          window.location.href = "/";
        }
      } else if (data.action === "mute") {
        const attendeeId = data.chimeAttendeeId;
        if (chimeAttendeeId === attendeeId) {
          !muted1 && toggleMute();
        }
      } else if (data.action === "unmute") {
        const attendeeId = data.chimeAttendeeId;
        if (chimeAttendeeId === attendeeId) {
          muted1 && toggleMute();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // console.log("ACTION! open");
    audioVideo?.realtimeSubscribeToReceiveDataMessage(
      "ACTION",
      receiveActionData
    );
    return () => {
      // console.log("ACTION! end");
      audioVideo?.realtimeUnsubscribeFromReceiveDataMessage("ACTION");
    };
  }, [muted1]);

  if (filter) {
    attendees = attendees.filter((attendee) =>
      attendee?.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  }

  const handleSearch = (e) => {
    setFilter(e.target.value);
  };

  const Menu = ({ chimeAttendeeId }) => {
    const { muted, signalStrength } = useAttendeeAudioStatus(chimeAttendeeId);

    return (
      <>
        <div
          style={{ padding: ".5rem 1rem", cursor: "pointer" }}
          onClick={() => {
            try {
              audioVideo?.realtimeSendDataMessage(
                "ACTION",
                JSON.stringify({
                  chimeAttendeeId,
                  action: muted ? "unmute" : "mute",
                })
              );
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {muted ? "Unmute user" : "Mute user"}
        </div>
        <div
          style={{ padding: ".5rem 1rem", cursor: "pointer" }}
          onClick={() => {
            try {
              audioVideo?.realtimeSendDataMessage(
                "ACTION",
                JSON.stringify({
                  chimeAttendeeId,
                  action: "kick",
                })
              );
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Kick user
        </div>
      </>
    );
  };

  const attendeeItems = attendees.map((attendee) => {
    const { chimeAttendeeId, name } = attendee || {};
    if (
      session?.type === "breakout" ||
      (userRole?.length === 1 && userRole.includes("attendee"))
    ) {
      return (
        <RosterAttendee key={chimeAttendeeId} attendeeId={chimeAttendeeId} />
      );
    }
    return (
      // <RosterCell key={chimeAttendeeId} name={name} />
      <RosterAttendee
        key={chimeAttendeeId}
        attendeeId={chimeAttendeeId}
        menu={<Menu chimeAttendeeId={chimeAttendeeId} />}
      />
    );
  });

  return (
    <Roster className="roster">
      <RosterHeader
        searchValue={filter}
        onSearch={handleSearch}
        onClose={closeRoster}
        title="Present"
        badge={attendees.length}
      />
      <RosterGroup>{attendeeItems}</RosterGroup>
    </Roster>
  );
};

export default MeetingRoster;
