// Code your solution in this file!
function distanceFromHqInBlocks(dest) {
  if (dest > 42) {
    return dest - 42
  }
  else {
    return 42 - dest
  }
}

function distanceFromHqInFeet(blocks) {
  let x = distanceFromHqInBlocks(blocks)
  return x * 264
}

function distanceTravelledInFeet(begin, dest){
  let blocks;
  begin > dest ? (blocks = begin - dest) : (blocks = dest - begin);
  return blocks * 264
}

function calculatesFarePrice(start, destination){
  let distfeet = distanceTravelledInFeet(start, destination)
  if (distfeet < 400) {
    return 0
  }
  else if (distfeet > 2500) {
    return 'cannot travel that far'
  }
  else if (distfeet > 2000) {
    return 25
  }
  else if (distfeet > 400 || distfeet < 2000) {
    let x = distfeet - 400
    return x * 2 / 100
  }
}
