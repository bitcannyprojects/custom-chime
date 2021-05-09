import React, { useState } from "react";
import {
  Roster,
  RosterHeader,
  RosterGroup,
  useRosterState,
  RosterAttendee,
  RosterCell,
  useAttendeeAudioStatus,
  useToggleLocalMute,
} from "amazon-chime-sdk-component-library-react";

import { useNavigation } from "../providers/NavigationProvider";

const MeetingRoster = () => {
  const { roster } = useRosterState();
  const [filter, setFilter] = useState("");
  const { closeRoster } = useNavigation();
  const { muted: muted1, toggleMute } = useToggleLocalMute();
  console.log({ roster });
  let attendees = Object.values(roster);
  console.log("roasterattendee", attendees);

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
              // console.log("mute", muted1);
              // toggleMute();
              // return;
              console.log("mute1");
              if (window.socket) {
                console.log("mute2");
                window.socket.send(
                  JSON.stringify({
                    action: "chat",
                    message: {
                      chimeAttendeeId,
                      action: muted ? "unmute" : "mute",
                    },
                  })
                );
              }
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
              console.log("kick1");
              if (window.socket) {
                console.log("kick2");
                window.socket.send(
                  JSON.stringify({
                    action: "chat",
                    message: { chimeAttendeeId, action: "kick" },
                  })
                );
              }
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
