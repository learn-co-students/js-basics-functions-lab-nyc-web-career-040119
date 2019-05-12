function distanceFromHqInBlocks(block) {
  return block - 42 < 0 ? 42 - block : block - 42
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(block1, block2) {
  return (block1 - block2 < 0 ? block2 - block1 : block1 - block2)*264;
}

function calculatesFarePrice(start, destination) {
  var feet = distanceTravelledInFeet(start, destination)
  switch (true) {
    case (feet < 400):
      return 0
      break;
    case (feet < 2000):
      return (feet-400) * .02
      break;
    case (feet > 2000 && feet < 2500):
      return 25
      break;
    default:
      return "cannot travel that far";
  }
}
