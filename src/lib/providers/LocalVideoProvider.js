import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from "react";

import { useMeetingManager } from "./MeetingProvider";
import { useAudioVideo } from "./AudioVideoProvider";

import { videoInputSelectionToDevice } from "../../utils/device-utils";

const Context = createContext(null);

const LocalVideoProvider = ({ children }) => {
  const meetingManager = useMeetingManager();
  const audioVideo = useAudioVideo();
  const [isVideoEnabled, setIsVideoEnabled] = useState(false);
  const [tileId, setTileId] = useState(null);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    if (audioVideo.hasStartedLocalVideoTile()) {
      setIsVideoEnabled(true);
    }

    return () => {
      setIsVideoEnabled(false);
    };
  }, [audioVideo]);

  const toggleVideo = useCallback(async () => {
    if (isVideoEnabled || !meetingManager.selectedVideoInputDevice) {
      audioVideo?.stopLocalVideoTile();
      setIsVideoEnabled(false);
    } else {
      await audioVideo?.chooseVideoInputDevice(
        videoInputSelectionToDevice(meetingManager.selectedVideoInputDevice)
      );
      audioVideo?.startLocalVideoTile();
      setIsVideoEnabled(true);
    }
  }, [audioVideo, isVideoEnabled, meetingManager.selectedVideoInputDevice]);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    const videoTileDidUpdate = (tileState) => {
      if (
        !tileState.localTile ||
        !tileState.tileId ||
        tileId === tileState.tileId
      ) {
        return;
      }

      setTileId(tileState.tileId);
    };

    audioVideo.addObserver({
      videoTileDidUpdate,
    });
  }, [audioVideo, tileId]);

  const value = useMemo(() => ({ isVideoEnabled, toggleVideo, tileId }), [
    isVideoEnabled,
    toggleVideo,
    tileId,
  ]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useLocalVideo = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useLocalVideo must be used within LocalVideoProvider");
  }

  return context;
};

export { LocalVideoProvider, useLocalVideo };
