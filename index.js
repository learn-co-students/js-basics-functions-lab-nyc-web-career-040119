// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  let blocks;
  blocks = Math.abs(42 - someValue);
  return blocks;
}

function distanceFromHqInFeet(someValue) {
  let dist;
  dist = distanceFromHqInBlocks(someValue) * 264;
  return dist;
}

function distanceTravelledInFeet(pointA, pointB) {
  let blocks;
  let dist;
  blocks = Math.abs(pointA - pointB);
  dist = blocks * 264;
  return dist;
}

function calculatesFarePrice(start, destination) {
  let travelDist = distanceTravelledInFeet(start, destination);
  let cost;
  if (travelDist < 400){
    cost = 0;
  } else if (travelDist >= 400 && travelDist <= 2000) {
    cost = (travelDist - 400) * 0.02;
  } else if (travelDist > 2000 && travelDist <= 2500) {
    cost = 25;
  } else if (travelDist > 2500) {
    return ('cannot travel that far');
  }
  return cost;
}
