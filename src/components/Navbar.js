import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ReactComponent as Logo } from "../logo.svg";
import { Link as Navigate } from "react-router-dom";
const Links = [
  { id: 1, name: "statistics" },
  { id: 2, name: "reviews" },
  { id: 3, name: "about" },
];

const getRoute = (link, children) => {
  if (link.name === "statistics") {
    return <a href={"/#stats"}> {link.name[0].toUpperCase() + link.name.substr(1)} </a>;
  } else {
    return <Navigate to={"/" + link.name}> {link.name[0].toUpperCase() + link.name.substr(1)} </Navigate>;
  }
};

const NavLink = ({ children, link }) => {
  return (
    <Link
      px={2}
      py={1}
      fontSize="lg"
      rounded={"md"}
      _focus={{
        bg: useColorModeValue("pink.200", "pink.700"),
      }}
      _hover={{
        textDecoration: "none",
        color: "black",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {getRoute(link, children)}
    </Link>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box borderWidth={2} px={4}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={4} alignItems={"center"}>
            <Navigate to="/">
              <Logo />
            </Navigate>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              marginRight={16}
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.id} link={link}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => {
                return (
                  //
                  <Navigate to={"/" + link.name}> {link.name} </Navigate>
                );
              })}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
