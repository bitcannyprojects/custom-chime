import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  ControlBarButton,
  Phone,
  Modal,
  ModalBody,
  ModalHeader,
  ModalButton,
  ModalButtonGroup,
  useMeetingManager,
} from "amazon-chime-sdk-component-library-react";

// import { endMeeting } from '../../utils/api';
import { StyledP } from "./Styled";
import { useAppState } from "../../providers/AppStateProvider";
// import routes from "../../constants/routes";

const EndMeetingControl = () => {
  const meetingManager = useMeetingManager();
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const { meetingId } = useAppState();
  const history = useHistory();

  const leaveMeeting = async () => {
    try {
      console.log("leaving...");
      await meetingManager.leave();
      window.close();
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  // const endMeetingForAll = async () => {
  //   try {
  //     if (meetingId) {
  //       // await endMeeting(meetingId);
  //       await meetingManager.leave();
  //       history.push("/");
  //     }
  //   } catch (e) {
  //     console.log("Could not end meeting", e);
  //   }
  // };

  return (
    <>
      <ControlBarButton icon={<Phone />} onClick={toggleModal} label="Leave" />
      {showModal && (
        <Modal size="md" onClose={toggleModal} rootId="modal-root">
          <ModalHeader title="End Meeting" />
          <ModalBody>
            <StyledP>Are you sure you want to leave meeting?</StyledP>
          </ModalBody>
          <ModalButtonGroup
            primaryButtons={[
              <ModalButton
                onClick={leaveMeeting}
                variant="primary"
                label="Leave Meeting"
                closesModal
              />,
              <ModalButton variant="secondary" label="Cancel" closesModal />,
            ]}
          />
        </Modal>
      )}
    </>
  );
};

export default EndMeetingControl;
