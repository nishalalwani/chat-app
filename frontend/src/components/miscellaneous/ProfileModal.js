import { ViewIcon } from "@chakra-ui/icons";
import { ChatState } from "../../Context/ChatProvider";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {isDarkMode} = ChatState();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton  bg={isDarkMode ? "#313030" : ""} color={isDarkMode ? "white" : ""} d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader
            fontSize="40px"
            fontFamily="Work sans"
            d="flex"
            justifyContent="center"
            bg={isDarkMode ? "#2e2d2d" : ""} 
            color={isDarkMode ? "white" : ""}
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton color={isDarkMode? "white":""} />
          <ModalBody
            bg={isDarkMode ? "#2e2d2d" : ""}
            color={isDarkMode ? "white" : ""}
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src={user.pic}
              alt={user.name}
            />
            <Text
              fontSize={{ base: "28px", md: "30px" }}
              fontFamily="Work sans"
            >
              Email: {user.email}
            </Text>
          </ModalBody>
          <ModalFooter   
            bg={isDarkMode ? "#2e2d2d" : ""}
            color={isDarkMode ? "white" : ""}>

            <Button 
             color={isDarkMode ? "black" : ""}
            onClick={onClose}>Close</Button>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
