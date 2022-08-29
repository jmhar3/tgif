import {} from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Heading,
  Text
} from "@chakra-ui/react";

export type ActivityData = {
  image: string;
  title: string;
  blurb: string;
  location?: {};
};

export interface ActivityInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  activity: ActivityData;
}

export const ActivityInfoModal = (props: ActivityInfoModalProps) => {
  const { isOpen, onClose, activity } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">
            It's the perfect day to {activity.title.toLowerCase()}
          </Heading>
        </ModalHeader>

        <ModalBody>
          <Text fontSize="lg" fontWeight="bold">{activity.blurb}</Text>
        </ModalBody>

        <ModalFooter>
          <Button
            backgroundColor="neutral.main"
            transition="all .3s"
            _hover={{ backgroundColor: "neutral.boldSheer" }}
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
