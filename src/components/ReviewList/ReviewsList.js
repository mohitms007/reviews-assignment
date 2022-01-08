import React from "react";
import reviews from "../../reviews.json";
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Review from "../Review";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  chakra,
  Container,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import "./review-list.css";

const Row = ({ data, index, style }) => {
  const currReview = data[index];

  return (
    <div style={style}>
      <Review review={currReview} />
    </div>
  );
};

export default function ReviewsList() {
  // Checking how much long is the review
  const getItemSize = (index) =>
    Math.floor(0.2 * reviews[index].reviewText.length) + 130;

  return (
<>
      <Container  w={['sm', 'md', 'lg', 'xl']} maxH="2xl" centerContent>
        <Center height={450}>
          <Box justifyContent="center" textAlign="center">
            <Text fontWeight={"bold"} fontSize={['2xl', '3xl', '4xl', '6xl']} color="gray.600">
              Find The Best
              <chakra.span
                padding={[2,2,3,5]}
                fontSize={['2xl', '3xl', '4xl', '6xl']}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontWeight="extrabold"
              >
                Reviews
              </chakra.span>
            </Text>
            <Center mt={55} alignItems={'center'}>
              <InputGroup w={['sm', 'md', 'lg', 'xl']}>
                <InputRightElement
                  pointerEvents="none"
                  children={<SearchIcon mt={1} color="pink.300" />}
                />
                <Input
                  placeholder="Search for Reviews"
                  size="lg"
                  _focus={{borderWidth: '2px',borderColor: 'pink.400'}}
                  boxShadow={"lg"}
                />
              </InputGroup>
            </Center>
          </Box>
        </Center>
     

      </Container>
    
    <div
    style={{
      height: "60vh",
      width: "80vw",
      display: "flex",
      flex: 1,
      marginLeft: "10%",
    }}
  >
    <AutoSizer>
      {({ height, width }) => (
        <List
          className="List"
          height={700}
          itemCount={reviews.length}
          itemData={reviews}
          itemSize={getItemSize}
          width={width}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  </div>
  </>
  );
}
