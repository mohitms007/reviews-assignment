import {
  Avatar,
  background,
  Box,
  Center,
  chakra,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { StarIcon } from "@chakra-ui/icons";
import formatDate from "../utilities/formatDate";

export default function Review({ review }) {
  const { reviewText, reviewerName, summary, reviewTime, overall } = review;

  return (
    <Box
      // maxW={'505px'}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"xl"}
      rounded={"md"}
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
        <Text color={"gray.500"}>{reviewText}</Text>
      </Stack>
      <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
        <Avatar
          src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
          alt={"Author"}
        />
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text fontWeight={600}>{reviewerName}</Text>
          <Text color={"gray.500"}>{formatDate(reviewTime)}</Text>
        </Stack>
      </Stack>
    </Box>
  );
}
