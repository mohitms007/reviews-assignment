import {
  Avatar,
  Box,
  Button,
  Center,
  Heading,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { ArrowForwardIcon, ArrowRightIcon, StarIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalFooter,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import formatDate from "../utilities/formatDate";

export default function Review({ review, highlightBad, highlightGood }) {
  const { reviewText, reviewerName, summary, reviewTime, overall } = review;
  const { isOpen, onOpen, onClose } = useDisclosure();


  //  Highlighting reviews based on ratings and checkbox
  const hightlightReviews = () => {
    if (highlightBad && review.overall <= 3) {
      return "red.400";
    }
    if (highlightGood && review.overall >= 4) {
      return "teal";
    }

    return "white";
  };

  return (
    <Box
      // maxW={'505px'}
      padding={"40px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      borderWidth="3px"
      borderRadius="lg"
      borderColor={hightlightReviews}
      boxShadow={"lg"}
      rounded={"lg"}
      p={6}
      overflow={"hidden"}
    >
      <Stack>
        <Text
          color={"green.500"}
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={"sm"}
          letterSpacing={1.1}
        >
          {overall} ratings <StarIcon marginBottom={1} />
        </Text>
        <Heading
          color={useColorModeValue("gray.700", "white")}
          fontSize={"2xl"}
          fontFamily={"body"}
        >
          {summary}
        </Heading>
        <Text color={"gray.500"}>{reviewText.substr(0, 250)}...</Text>
      </Stack>
      <Stack
        mt={6}
        direction={["column", "row"]}
        spacing={4}
        align={["center", ""]}
      >
        <Avatar
          src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
          alt={"Author"}
        />
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text fontWeight={600}>{reviewerName}</Text>
          <Text color={"gray.500"}>{formatDate(reviewTime)}</Text>
        </Stack>
        <Spacer />
        <Button
          onClick={onOpen}
          colorScheme="teal"
          size="sm"
          rightIcon={<ArrowForwardIcon w={4} h={4} mb={0.9} />}
        >
          View More
        </Button>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            pt={6}
            pl={6}
            pb={2}
            letterSpacing={1.1}
          >
            {overall} ratings <StarIcon marginBottom={1} />
          </Text>
          <ModalHeader>{summary}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{reviewText}</ModalBody>
          <Stack
            pl={[0,6]}
            pt={4}
            direction={["column", "row"]}
            spacing={4}
            align={["center", ""]}
          >
            <Avatar
              src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
              alt={"Author"}
            />
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontWeight={600}>{reviewerName}</Text>
              <Text color={"gray.500"}>{formatDate(reviewTime)}</Text>
            </Stack>
          </Stack>
          <ModalFooter>
            <Center>
              <Spacer />
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
