function distanceFromHqInBlocks(block) {
  const hq = 42
  let results = 0
  if (block > hq) {
    results = block - hq;
  } else {
    results = hq - block;
  }
  return results
}

function distanceFromHqInFeet(block) {
  let distanceInBlocks = distanceFromHqInBlocks(block);

  let results = distanceInBlocks * 264;
  return results;
}


function distanceTravelledInFeet(startBlock,endBlock) {
  let start = distanceFromHqInFeet(startBlock);
  let end = distanceFromHqInFeet(endBlock);

  let results = end - start;
  return results;

}


function calculatesFarePrice(startBlock,endBlock){
  let distanceInFeet = distanceTravelledInFeet(startBlock,endBlock)
  let results = 0
  if (distanceInFeet <= 400) {
    return results
  }
  else if (distanceInFeet >= 400 && distanceInFeet <= 2000) {
    results = (distanceInFeet-400) * 0.02
    return results
  }
  else if (distanceInFeet > 2000 && distanceInFeet< 2500) {
    results = 25
    return results
  } else if (distanceInFeet > 2500) {
    return "cannot travel that far"
  }

}

