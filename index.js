// Code your solution in this file!
function distanceFromHqInBlocks (location) {
  const distance = Math.abs(location - 42);
  return distance
}

function distanceFromHqInFeet (location) {
  const blocks = distanceFromHqInBlocks(location);
  const feet = blocks * 264
  return feet
}

function distanceTravelledInFeet (start, destination) {
  const distance = Math.abs(start - destination) * 264;
  return distance
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let fare;
  if (distance < 400) {
    fare = 0;
  }
  else if (distance < 2000) {
    fare = (distance - 400) * .02;
  }
  else if (distance < 2500) {
    fare = 25;
  }
  else if (distance > 2500) {
    fare = 'cannot travel that far';
  }
  return fare
}
