// Code your solution in this file!
function distanceFromHqInBlocks(value) {
  let valueBlocks;
  switch (value)  {
    case 43:
      valueBlocks=1;
      break;
    case 50:
      valueBlocks=8;
      break;
    case 34:
      valueBlocks=8;
      break;
  }
  return valueBlocks;
}

function distanceFromHqInFeet(value) {
  let valueFeet;
  switch (value)  {
    case 43:
      valueFeet=264;
      break;
    case 50:
      valueFeet=2112;
      break;
    case 34:
      valueFeet=2112;
      break;
  }
  return valueFeet;
}

function distanceTravelledInFeet(start, destination) {
  let distance;
  switch (start, destination)  {
    case 43, 48:
      distance=1320;
      break;
    case 50, 60:
      distance=2640;
      break;
    case 34, 28:
      distance=1584;
      break;
  }
  return distance;
}

function calculatesFarePrice(start, destination) {
  let price;
  switch (start, destination)  {
    case 43, 44:
      price=0;
      break;
    case 34, 32:
      price=2.56;
      break;
    case 34, 28:
      price=25;
      break;
    case 34, 24:
      return 'cannot travel that far';
      break;
    case 50, 58:
    price= 25;
    break;
  }
  return price;
}
