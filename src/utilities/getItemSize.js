
// Getting the size of each item so that we can render it responsively and for react virtualize to understand every item's height so that it can easily render large items 

const getItemSize = (index,width,reviews) => { 

  let responsiveItem;
  switch(true) {
    case (width > 1000):
      responsiveItem = 0.3;
      break;
    case (width < 1000 && width > 700):
      responsiveItem = 0.4
      break;
    case(width <= 700):
      responsiveItem = 0.6
      break; 
  }
  
  return Math.floor(responsiveItem * 300 * 2) + 130
}


export default getItemSize