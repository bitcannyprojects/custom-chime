import React, { useState, useEffect, useRef, useMemo, useContext } from "react";
import { DefaultModality } from "amazon-chime-sdk-js";

import { useMeetingManager } from "./MeetingProvider";
import { useAudioVideo } from "./AudioVideoProvider";
const RosterContext = React.createContext();

const RosterProvider = ({ children }) => {
  const meetingManager = useMeetingManager();
  const audioVideo = useAudioVideo();
  const rosterRef = useRef({});
  const [roster, setRoster] = useState({});

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    const rosterUpdateCallback = async (
      chimeAttendeeId,
      present,
      externalUserId
    ) => {
      if (!present) {
        delete rosterRef.current[chimeAttendeeId];

        setRoster((currentRoster) => {
          const { [chimeAttendeeId]: _, ...rest } = currentRoster;
          return { ...rest };
        });

        return;
      }

      const attendeeId = new DefaultModality(chimeAttendeeId).base();
      if (attendeeId !== chimeAttendeeId) {
        return;
      }

      const inRoster = rosterRef.current[chimeAttendeeId];
      if (inRoster) {
        return;
      }

      let attendee = { chimeAttendeeId };

      if (externalUserId) {
        attendee.externalUserId = externalUserId;
      }

      rosterRef.current[attendeeId] = attendee;

      // Update the roster first before waiting to fetch attendee info
      setRoster((oldRoster) => ({
        ...oldRoster,
        [attendeeId]: attendee,
      }));

      if (meetingManager.getAttendee) {
        const externalData = await meetingManager.getAttendee(
          attendeeId,
          externalUserId
        );

        // Make sure that the attendee is still on the roster
        if (!rosterRef.current[attendeeId]) {
          return;
        }
        attendee = { ...attendee, ...externalData };
        setRoster((oldRoster) => ({
          ...oldRoster,
          [attendeeId]: attendee,
        }));
      }
    };

    audioVideo.realtimeSubscribeToAttendeeIdPresence(rosterUpdateCallback);

    return () => {
      setRoster({});
      rosterRef.current = {};
      audioVideo.realtimeUnsubscribeToAttendeeIdPresence(rosterUpdateCallback);
    };
  }, [audioVideo]);

  const value = useMemo(
    () => ({
      roster,
    }),
    [roster]
  );

  return (
    <RosterContext.Provider value={value}>{children}</RosterContext.Provider>
  );
};

function useRosterState() {
  const state = useContext(RosterContext);

  if (!state) {
    throw new Error("userRosterState must be used within RosterProvider");
  }

  return state;
}

export { RosterProvider, useRosterState };
