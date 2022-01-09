import {
  Box,
  Center,
  chakra,
  Container,
  Flex,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../logo.svg";

const Footer = () => {
  return (

    <Box
      w={"100%"}
      position={"static"}
      bottom={0}
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Flex   direction="column">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"flex-end"}
        align={"center"}
      >
        <Logo />
        <Stack direction={"row"} spacing={6}>
          <Link to={"/"}>Home</Link>
          <Link to={"/reviews"}>Reviews</Link>
          <a href={"/#stats"}>Stats</a>
          <Link to={"/about"}>About </Link>
        </Stack>
      </Container>

      <Center p={4}>
        <Text>© Reviews Assignment </Text>
      </Center>

      </Flex>
     
    </Box>

  );
};

export default Footer;
