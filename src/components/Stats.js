import { ReactNode } from "react";
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  getAverageRating,
  getOneStarRatings,
  getTotalReviews,
  getUserLiked,
} from "../utilities/stats";

export default function StatsGridWithImage() {
  return (
    <Box bg={"gray.800"} position={"relative"}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: "none", lg: "flex" }}
        backgroundImage="url('/templates/stats-grid-with-image.png')"
        backgroundSize={"cover"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={"absolute"}
        width={"50%"}
        insetY={0}
        right={0}
      >
        <Flex
          bgGradient={"linear(to-r, gray.800 10%, transparent)"}
          w={"full"}
          h={"full"}
        />
      </Flex>
      <Container maxW={"7xl"} zIndex={10} position={"relative"}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack
            flex={1}
            color={"gray.400"}
            justify={{ lg: "center" }}
            py={{ base: 4, md: 20, xl: 60 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={"heading"}
                fontWeight={700}
                textTransform={"uppercase"}
                mb={3}
                fontSize={"xl"}
                color={"gray.500"}
              >
                Statistics
              </Text>
              <Heading
                color={"white"}
                mb={5}
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                Your Product is doing great...
              </Heading>
              <Text fontSize={"xl"} color={"gray.400"}>
                <StatsText>{getUserLiked()}%</StatsText> of your users loved
                your product and they liked what they saw!
              </Text>
            </Box>

            <SimpleGrid id="stats" columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={"heading"}
                    fontSize={"3xl"}
                    color={"white"}
                    mb={3}
                  >
                    {stat.title}
                  </Text>
                  <Text fontSize={"xl"} color={"gray.400"}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }) => (
  <Text as={"span"} fontWeight={700} color={"white"}>
    {children}
  </Text>
);

const stats = [
  {
    title: getTotalReviews(),
    content: (
      <>
        <StatsText>Product Reviews</StatsText> for your product and they keep
        going....
      </>
    ),
  },
  {
    title: getAverageRating(),
    content: (
      <>
        <StatsText>5 Star Ratings</StatsText> were given by users who used your
        product!
      </>
    ),
  },
  {
    title: 100 - getUserLiked() + "%",
    content: (
      <>
        <StatsText>rated 3 and below </StatsText> and they had some great
        feedback for your product.
      </>
    ),
  },
  {
    title: getOneStarRatings(),
    content: (
      <>
        <StatsText>Users</StatsText> gave 1 star rating as they didn't liked
        your product and they were dissapointed.
      </>
    ),
  },
];
