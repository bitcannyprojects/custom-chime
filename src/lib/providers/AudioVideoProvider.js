import React, { createContext, useState, useContext, useEffect } from "react";

import { useMeetingManager } from "./MeetingProvider";

export const AudioVideoContext = createContext(null);

const AudioVideoProvider = ({ children }) => {
  const meetingManager = useMeetingManager();
  const [audioVideo, setAudioVideo] = useState(null);

  useEffect(() => {
    function audioVideoUpdateCb(av) {
      setAudioVideo(av);
    }

    meetingManager.subscribeToAudioVideo(audioVideoUpdateCb);

    return () => meetingManager.unsubscribeFromAudioVideo(audioVideoUpdateCb);
  }, []);

  return (
    <AudioVideoContext.Provider value={audioVideo}>
      {children}
    </AudioVideoContext.Provider>
  );
};

const useAudioVideo = () => {
  const audioVideo = useContext(AudioVideoContext);

  return audioVideo;
};

export { useAudioVideo, AudioVideoProvider };
