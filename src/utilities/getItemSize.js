export default (index,width,reviews) => { 
  console.log(width)
  let responsiveItem;
  switch(true) {
    case (width > 1000):
      responsiveItem = 0.2;
      break;
    case (width < 1000 && width > 700):
      responsiveItem = 0.5
      break;
    case(width <= 700):
      responsiveItem = 0.7
      break; 
  }
  console.log(responsiveItem)
  return Math.floor(responsiveItem * (reviews[index].reviewText.length * 5)) + 130
}
