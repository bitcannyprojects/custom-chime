import React from "react";

import {
  Flex,
  Heading,
  PrimaryButton,
  useMeetingManager,
} from "amazon-chime-sdk-component-library-react";

import { useAppState } from "../../providers/AppStateProvider";
import { StyledList } from "./Styled";

const MeetingDetails = () => {
  const { meetingId, toggleTheme, theme, session } = useAppState();
  const manager = useMeetingManager();

  return (
    <Flex container layout="fill-space-centered">
      <Flex mb="2rem" mr={{ md: "2rem" }} px="1rem">
        <Heading level={4} tag="h1" mb={2}>
          Meeting info
        </Heading>
        <StyledList>
          <div>
            <dt>Meeting Topic</dt>
            <dd>{session?.topic}</dd>
          </div>
          {/* <div>
            <dt>Hosted region</dt>
            <dd>{manager.meetingRegion}</dd>
          </div> */}
        </StyledList>
        <PrimaryButton
          mt={4}
          label={theme === "light" ? "Dark mode" : "Light mode"}
          onClick={toggleTheme}
        ></PrimaryButton>
      </Flex>
    </Flex>
  );
};

export default MeetingDetails;
