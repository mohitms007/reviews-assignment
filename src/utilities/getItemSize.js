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


export const getItemWidth = (index, width, reviews) => {

  let responsiveItem;
  switch(true) {
    case (width > 1000):
      responsiveItem = 580;
      break;
    case (width < 1000 && width > 700):
      responsiveItem = 450
      break;
    case(width <= 700):
      responsiveItem = 350
      break; 
  }
  
  return responsiveItem
}


export default getItemSize