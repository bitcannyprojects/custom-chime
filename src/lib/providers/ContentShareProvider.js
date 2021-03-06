import React, {
  useCallback,
  useMemo,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { DefaultModality } from "amazon-chime-sdk-js";

import {
  reducer,
  initialState,
  ContentShareState,
  ContentActionType,
} from "./state";
import { useAudioVideo } from "./AudioVideoProvider";

const ContentShareContext = createContext(null);
const ContentShareControlContext = createContext(null);

const ContentShareProvider = ({ children }) => {
  const audioVideo = useAudioVideo();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { paused, isLocalUserSharing, isLocalShareLoading } = state;
  const localUserTileIdRef = (useRef < number) | (null > null);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    const videoObserver = {
      videoTileDidUpdate: (tileState) => {
        if (
          !tileState.boundAttendeeId ||
          !tileState.isContent ||
          !tileState.tileId
        ) {
          return;
        }

        const { boundAttendeeId } = tileState;
        const baseAttendeeId = new DefaultModality(boundAttendeeId).base();
        const localAttendeeId =
          audioVideo.audioVideoController.realtimeController.state
            .localAttendeeId;
        const isLocalUser = baseAttendeeId === localAttendeeId;

        if (
          !isLocalUser &&
          localUserTileIdRef.current &&
          localUserTileIdRef.current < tileState.tileId
        ) {
          audioVideo.stopContentShare();
          localUserTileIdRef.current = null;
        }

        if (isLocalUser) {
          localUserTileIdRef.current = tileState.tileId;
        }

        dispatch({
          type: ContentActionType.UPDATE,
          payload: {
            tileState,
            isLocalUser,
          },
        });
      },
      videoTileWasRemoved: (tileId) => {
        if (tileId === localUserTileIdRef.current) {
          localUserTileIdRef.current = null;
        }

        dispatch({
          type: ContentActionType.REMOVE,
          payload: tileId,
        });
      },
    };

    const contentShareObserver = {
      contentShareDidStop: () => {
        dispatch({ type: ContentActionType.DID_STOP });
      },
    };

    audioVideo.addObserver(videoObserver);
    audioVideo.addContentShareObserver(contentShareObserver);

    return () => {
      audioVideo.removeObserver(videoObserver);
      audioVideo.removeContentShareObserver(contentShareObserver);
      dispatch({ type: ContentActionType.RESET });
    };
  }, [audioVideo]);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    const cb = (event) => {
      if (event.reason.name === "NotAllowedError") {
        dispatch({ type: ContentActionType.DENIED });
      }
    };

    window.addEventListener("unhandledrejection", cb);
    return () => window.removeEventListener("unhandledrejection", cb);
  }, [isLocalShareLoading]);

  const toggleContentShare = useCallback(async () => {
    if (!audioVideo) {
      return;
    }

    if (isLocalUserSharing || isLocalShareLoading) {
      audioVideo.stopContentShare();
    } else {
      audioVideo.startContentShareFromScreenCapture();
      dispatch({ type: ContentActionType.STARTING });
    }
  }, [audioVideo, isLocalUserSharing, isLocalShareLoading]);

  const togglePauseContentShare = useCallback(() => {
    if (!audioVideo || !isLocalUserSharing) {
      return;
    }

    if (paused) {
      audioVideo.unpauseContentShare();
    } else {
      audioVideo.pauseContentShare();
    }

    dispatch({ type: ContentActionType.TOGGLE_PAUSE });
  }, [audioVideo, paused, isLocalUserSharing]);

  const controlsValue = useMemo(
    () => ({
      paused,
      isLocalUserSharing,
      isLocalShareLoading,
      toggleContentShare,
      togglePauseContentShare,
    }),
    [
      paused,
      toggleContentShare,
      togglePauseContentShare,
      isLocalUserSharing,
      isLocalShareLoading,
    ]
  );

  return (
    <ContentShareContext.Provider value={state}>
      <ContentShareControlContext.Provider value={controlsValue}>
        {children}
      </ContentShareControlContext.Provider>
    </ContentShareContext.Provider>
  );
};

const useContentShareState = () => {
  const contentShareState = useContext(ContentShareContext);

  if (!contentShareState) {
    throw new Error(
      "useContentShareState must be used within a ContentShareProvider"
    );
  }

  return contentShareState;
};

const useContentShareControls = () => {
  const context = useContext(ContentShareControlContext);

  if (!context) {
    throw new Error(
      "useContentShareControlContext must be used within ContentShareControlProvider"
    );
  }
  return context;
};

export { ContentShareProvider, useContentShareState, useContentShareControls };
