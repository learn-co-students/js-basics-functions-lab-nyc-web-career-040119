// Each block in Manhattan is 264 feet long.
const blockFeet = 264;

function distanceFromHqInBlocks(distance) {
  let hq = 42;

  if (distance > hq) {
    return distance - hq;
  } else {
    return hq - distance;
  };
}

function distanceFromHqInFeet(distance) {
  let hq = 42;

  if (distance > hq) {
    return (distance - hq) * blockFeet;
  } else {
    return (hq - distance) * blockFeet;
  };
}

function distanceTravelledInFeet(startLoc, endLoc) {
  if (startLoc > endLoc) {
    return (startLoc - endLoc) * blockFeet;
  } else {
    return (endLoc - startLoc) * blockFeet;
  };
}

function calculatesFarePrice(start, destination) {
  // first 400 feet are free
  let free = 400
  // 2 center per foot between 400 and 2000
  // charges 25 dollars for distance over 2000
  // if ride is over 2500 does not allow

  const distance = start > destination ? (start - destination) * blockFeet : (destination - start) * blockFeet;
  // determines how many blocks are traveled

  switch (true) {
    case (distance <= free):
      return 0;
      break;
    case (distance <= 2000):
      return (distance - free) * 0.02;
      break;
    case (distance > 2000 && distance < 2500):
      return 25;
      break;
    case (distance >= 2500):
      return "cannot travel that far";
      break;
  }
}
