import React, { useState } from "react";
import {
  Roster,
  RosterHeader,
  RosterGroup,
  useRosterState,
  RosterAttendee,
  RosterCell,
} from "amazon-chime-sdk-component-library-react";

import { useNavigation } from "../providers/NavigationProvider";

const MeetingRoster = () => {
  const { roster } = useRosterState();
  const [filter, setFilter] = useState("");
  const { closeRoster } = useNavigation();

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
  const Menu = () => (
    <>
      <div style={{ padding: ".5rem 1rem", cursor: "pointer" }}>
        Message user
      </div>
      <div style={{ padding: ".5rem 1rem", cursor: "pointer" }}>Kick user</div>
    </>
  );

  const attendeeItems = attendees.map((attendee) => {
    const { chimeAttendeeId, name } = attendee || {};
    return (
      // <RosterCell key={chimeAttendeeId} name={name} />
      <RosterAttendee
        key={chimeAttendeeId}
        attendeeId={chimeAttendeeId}
        menu={<Menu />}
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
