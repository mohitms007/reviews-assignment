import React, { useEffect, useState } from "react";
import intialReviews from "../../reviews.json";
import Review from "../Review";
import { ArrowDownIcon, ArrowUpIcon, RepeatClockIcon } from "@chakra-ui/icons";
import { List, WindowScroller } from "react-virtualized";
import {
  Box,
  Button,
  Center,
  chakra,
  Checkbox,
  Container,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import "./review-list.css";
import getItemSize from "../../utilities/getItemSize";

export default function ReviewsList() {
  const [reviews, setReviews] = useState(intialReviews);
  const [searchItem, setSearchItem] = useState("");
  const [filterRating, setFilterRating] = useState(false);
  const [loading, setLoading] = useState(false);

  const Row = ({ index, style }) => {
    const currReview = reviews[index];
    return (
      <div key={index} style={{ ...style }}>
        <Review style={{ margin: "0px 50px" }} review={currReview} />{" "}
      </div>
    );
  };

  const onChangeSearchItem = (e) => {
    setSearchItem(e.target.value);
    if (!e.target.value) {
      setReviews(intialReviews);
    }
  };

  const filterReviews = async () => {
    console.log(searchItem);
    if (!searchItem) {
      return;
    }
    setLoading(true);
    const filteredReviews = await reviews.filter((review) => {
      if (
        review.summary?.includes(searchItem) ||
        review.overall == parseInt(searchItem) ||
        review.reviewText?.includes(searchItem)
      ) {
        return review;
      } else {
        return null;
      }
    });
    setReviews(filteredReviews);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  };

  const filterByRating = async (type) => {
    setLoading(true);
    const filteredReviews = await intialReviews.filter((review) => {
      if (type) {
        if (review.overall === 5) {
          return review;
        } else {
          return null;
        }
      } else {
        if (review.overall <= 3) {
          return review;
        } else {
          return null;
        }
      }
    });
    setReviews(filteredReviews);
    setTimeout(() => {
      setLoading(false);
    }, 600);

    setFilterRating(true);
  };

  const clearFilters = () => {
    setReviews(intialReviews);
    setFilterRating(false);
  };

  return (
    <>
      <Container w={["sm", "md", "lg", "xl"]} maxH="2xl" centerContent>
        <Center height={450}>
          <Box justifyContent="center" textAlign="center">
            <Text
              fontWeight={"bold"}
              fontSize={["2xl", "3xl", "4xl", "6xl"]}
              color="gray.600"
            >
              Find The Best
              <chakra.span
                padding={[2, 2, 3, 5]}
                fontSize={["2xl", "3xl", "4xl", "6xl"]}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontWeight="extrabold"
              >
                Reviews
              </chakra.span>
            </Text>
            <Center mt={55} alignItems={"center"}>
              <Input
                placeholder="Search for Reviews"
                size="lg"
                values={searchItem}
                onChange={onChangeSearchItem}
                _focus={{ borderWidth: "2px", borderColor: "pink.400" }}
                boxShadow={"lg"}
              />
              <Button onClick={filterReviews} mt={1} color="pink.300">
                Search{" "}
              </Button>
            </Center>
            <Center margin={12}>
              <HStack spacing={8}>
                <Button
                  onClick={() => filterByRating(1)}
                  colorScheme="teal"
                  rightIcon={<ArrowUpIcon />}
                >
                  Top Reviews
                </Button>
                <Button
                  onClick={() => filterByRating(0)}
                  colorScheme="pink"
                  rightIcon={<ArrowDownIcon />}
                >
                  Bad Reviews
                </Button>
              </HStack>
            </Center>
            <Center>
              {filterRating && (
                <Button
                  onClick={clearFilters}
                  colorScheme="gray"
                  rightIcon={<RepeatClockIcon />}
                >
                  Clear Filters
                </Button>
              )}
            </Center>
          </Box>
        </Center>
      </Container>

      {!loading ? (
        <Center bg={"gray.100"}>
          <Box>
            <Box padding={"20px 10px"}>
              <chakra.span
                marginTop={"15px"}
                fontSize={["2xl", "3xl", "3xl", "4xl"]}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontWeight="extrabold"
              >
                Reviews
              </chakra.span>
              <HStack>

              </HStack>
            </Box>

            <WindowScroller>
              {({ height, isScrolling, scrollTop, width }) => (
                <List
                  autoHeight
                  height={height}
                  isScrolling={isScrolling}
                  rowCount={reviews.length}
                  rowHeight={({ index }) => getItemSize(index, width, reviews)}
                  rowRenderer={Row}
                  scrollTop={scrollTop}
                  width={480}
                />
              )}
            </WindowScroller>
          </Box>
        </Center>
      ) : (
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="pink.500"
            size="xl"
          />
        </Center>
      )}
    </>
  );
}
