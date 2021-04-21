import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useMemo,
  useCallback,
  useContext,
} from "react";

import { useAudioVideo } from "./AudioVideoProvider";

const Context = createContext(null);

const LocalAudioOutputProvider = ({ children }) => {
  const audioVideo = useAudioVideo();
  const [isAudioOn, setIsAudioOn] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    if (audioRef.current) {
      (async (element) => {
        try {
          await audioVideo.bindAudioElement(element);
        } catch (e) {
          console.error("Failed to bind audio element.", e);
        }
      })(audioRef.current);
    }
    return () => {
      audioVideo.unbindAudioElement();
      setIsAudioOn(true);
    };
  }, [audioVideo]);

  const toggleAudio = useCallback(() => {
    if (!audioRef.current) {
      return;
    }
    setIsAudioOn(!isAudioOn);
    if (isAudioOn) {
      audioVideo?.unbindAudioElement();
    } else {
      (async (element) => {
        try {
          await audioVideo?.bindAudioElement(element);
        } catch (e) {
          console.error("Failed to bind audio element.", e);
        }
      })(audioRef.current);
    }
  }, [audioRef, audioVideo, isAudioOn]);

  const value = useMemo(() => ({ isAudioOn, toggleAudio }), [
    isAudioOn,
    toggleAudio,
  ]);

  return (
    <Context.Provider value={value}>
      {children}
      <audio ref={audioRef} style={{ display: "none" }} />
    </Context.Provider>
  );
};

const useLocalAudioOutput = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      "useLocalAudioOutput must be used within LocalAudioOutputProvider"
    );
  }
  return context;
};

export { LocalAudioOutputProvider, useLocalAudioOutput };
