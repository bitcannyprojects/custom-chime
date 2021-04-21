import React, { useContext, useState } from "react";

import MeetingManager from "./MeetingManager";
import { AudioVideoProvider } from "./AudioVideoProvider";
import { RosterProvider } from "./RosterProvider";
import { DevicesProvider } from "./DevicesProvider";
import { RemoteVideoTileProvider } from "./RemoteVideoTileProvider";
import { LocalVideoProvider } from "./LocalVideoProvider";
import { FeaturedVideoTileProvider } from "./FeaturedVideoTileProvider";
import { LocalAudioOutputProvider } from "./LocalAudioOutputProvider";
import { ContentShareProvider } from "./ContentShareProvider";
import { LogLevel } from "amazon-chime-sdk-js";

export const MeetingContext = React.createContext();

export const MeetingProvider = ({
  logLevel = LogLevel.WARN,
  postLogConfig,
  simulcastEnabled = false,
  meetingManager: meetingManagerProp,
  children,
}) => {
  const [meetingManager] = useState(
    () =>
      meetingManagerProp ||
      new MeetingManager({ logLevel, postLogConfig, simulcastEnabled })
  );

  return (
    <MeetingContext.Provider value={meetingManager}>
      <AudioVideoProvider>
        <DevicesProvider>
          <RosterProvider>
            <RemoteVideoTileProvider>
              <LocalVideoProvider>
                <LocalAudioOutputProvider>
                  <ContentShareProvider>
                    <FeaturedVideoTileProvider>
                      {children}
                    </FeaturedVideoTileProvider>
                  </ContentShareProvider>
                </LocalAudioOutputProvider>
              </LocalVideoProvider>
            </RemoteVideoTileProvider>
          </RosterProvider>
        </DevicesProvider>
      </AudioVideoProvider>
    </MeetingContext.Provider>
  );
};

export const useMeetingManager = () => {
  const meetingManager = useContext(MeetingContext);

  if (!meetingManager) {
    throw new Error("useMeetingManager must be used within MeetingProvider");
  }

  return meetingManager;
};
