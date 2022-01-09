import { Box, Center, chakra, Checkbox, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import List from "react-virtualized/dist/commonjs/List";
import { WindowScroller } from "react-virtualized/dist/commonjs/WindowScroller";
import getItemSize from "../utilities/getItemSize";
import Review from "./Review";

export const Reviews = ({reviews}) => {
  const [isHighlightBadReviewsOn, setIsHighlightBadReviewsOn] = useState(false);
  const [isHighlightGoodReviewsOn, setIsHighlightGoodReviewsOn] =
    useState(false);



//  Rendering Each Review(Row in React-virtualized) here
  const Row = ({ index, style }) => {
    const currReview = reviews[index];
    return (
      <div key={index} style={style}>
        <Review
          style={{ margin: "50px 50px" }}
          review={currReview}
          highlightBad={isHighlightBadReviewsOn}
          highlightGood={isHighlightGoodReviewsOn}
        />{" "}
      </div>
    );
  };

  return (
    <Center  bg={"gray.100"}>
      <Box minH={400}>
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
          <Stack direction={["column", "row"]} marginTop={4} spacing={6}>
            <Checkbox
              isChecked={isHighlightBadReviewsOn}
              onChange={() =>
                setIsHighlightBadReviewsOn(!isHighlightBadReviewsOn)
              }
              size="lg"
              colorScheme="pink"
            >
              <Text color="gray.600" size="md">
                Highlight Critical Reviews
              </Text>
            </Checkbox>
            <Checkbox
              isChecked={isHighlightGoodReviewsOn}
              onChange={() =>
                setIsHighlightGoodReviewsOn(!isHighlightGoodReviewsOn)
              }
              size="lg"
              colorScheme="green"
            >
              <Text color="gray.600" size="md">
                Highlight Great Reviews
              </Text>
            </Checkbox>
          </Stack>
        </Box>





        {/* Rendering only those reviews which are in the current window, rest will show up when scrolling */}
        <Box width={"90%"}>
          <WindowScroller>
            {({ height, isScrolling, scrollTop, width }) => (
              // Rendering a long list using React Virtualized with concept of only rendering those items which are in specified size window
              <List
                autoHeight
                height={height}
                isScrolling={isScrolling}
                rowCount={reviews.length}
                rowHeight={({ index }) => getItemSize(index, width, reviews)}
                rowRenderer={Row}
                scrollTop={scrollTop}
                width={width > 1000 ? 580 : 320}
              />
            )}
          </WindowScroller>
        </Box>
      </Box>
    </Center>
  );
};
