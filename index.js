function distanceFromHqInBlocks(block){
  if(block >= 42){
    return block - 42;
  } else {
    return 42 - block;
  }
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(starting, destination){
  if (starting > destination) {
    return (starting - destination) * 264;
  } else {
    return (destination - starting) * 264;
  }
}

function calculatesFarePrice(starting, destination){
  let distance = distanceTravelledInFeet(starting, destination);
  if (distance <= 400) {
    return 0;
  } else if(distance > 400 && distance <= 2000){
    return (distance - 400) * .02;
  } else if(distance > 2000 & distance <= 2500) {
    return 25;
  } else if(distance > 2500) {
    return 'cannot travel that far'
  }
}
