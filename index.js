// Code your solution in this file!
function distanceFromInBlocks (street) {
  const hq = 42
  let result
  if (street < hq) {
    result = hq - street;
  } else {
    result = street - hq;
  }
    return result;
}


function distanceFromInFeet (street) {
  let distance;
  distance = distanceFromInBlocks(street) * 264;
  return distance;
}

function distanceTravelledInFeet (start, destination) {
  let distance;
  if (start > destination){
    distantce = (start - destination) * 264;
  } else {
    distance = (destination - start) * 264;
  }
  return distance;
}


function calculatesFarePrice(start, destination) {
  let distance = distanceFromInFeet (start, destination)
  let pay;
  if (distance <= 400) {
    pay = 0;
  } else if (distance > 400 && distance <= 2000) {
    pay = (destination - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    pay = 25;
  } else {
    pay = "cannot travel that far";
  }
  return pay;
}
