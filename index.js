// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(42-block);
}

function distanceTravelledInFeet(b1, b2) {
  return 264 * Math.abs(b1-b2);
}

function distanceFromHqInFeet(block) {
  return 264 * distanceFromHqInBlocks(block);
}

function calculatesFarePrice(start, destination) {
  const travelDistInFeet = distanceTravelledInFeet(start, destination);

  if (travelDistInFeet < 400) {
    return 0;
  } else if (travelDistInFeet >= 400 && travelDistInFeet < 2000) {
    return 0.02 * (travelDistInFeet - 400);
  } else if (travelDistInFeet >= 2000 && travelDistInFeet < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
