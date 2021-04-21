export function reducer(state, { type, payload }) {
  switch (type) {
    case ContentActionType.STARTING: {
      return {
        ...state,
        isLocalShareLoading: true,
      };
    }
    case ContentActionType.UPDATE: {
      const { isLocalUser, tileState } = payload;
      const { tileId } = state;

      if (
        tileId === tileState.tileId ||
        (tileId && tileId > tileState?.tileId)
      ) {
        return state;
      }

      return {
        paused: false,
        tileId: tileState.tileId,
        isLocalShareLoading: false,
        isLocalUserSharing: isLocalUser,
        sharingAttendeeId: tileState.boundAttendeeId,
      };
    }
    case ContentActionType.REMOVE: {
      const { tileId } = state;

      if (tileId !== payload) {
        return state;
      }

      return initialState;
    }
    case ContentActionType.DID_STOP: {
      const { isLocalUserSharing } = state;

      if (isLocalUserSharing) {
        return initialState;
      }

      return {
        ...state,
        isLocalShareLoading: false,
        isLocalUserSharing: false,
        paused: false,
      };
    }
    case ContentActionType.TOGGLE_PAUSE: {
      if (!state.isLocalUserSharing) {
        return state;
      }

      return {
        ...state,
        paused: !state.paused,
      };
    }
    case ContentActionType.DENIED: {
      if (!state.isLocalShareLoading) {
        return state;
      }

      return {
        ...state,
        isLocalShareLoading: false,
      };
    }

    case ContentActionType.RESET: {
      return initialState;
    }
    default:
      throw new Error("Incorrect type in VideoProvider");
  }
}
