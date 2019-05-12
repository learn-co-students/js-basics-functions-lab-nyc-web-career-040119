// Code your solution in this file!
function distanceFromHqInBlocks (pickupLocation)
{
  if (pickupLocation < 42)
  {
    const numberOfBlocks = 42 - pickupLocation;
    return numberOfBlocks;
  }
  else
  {

    const numberOfBlocks = pickupLocation - 42;
  	return numberOfBlocks;
  }
}

function distanceFromHqInFeet (numberOfBlocks)
{
  const distanceInFeet = distanceFromHqInBlocks(numberOfBlocks) * 264;

  return distanceInFeet;
}

function distanceTravelledInFeet (beginBlock, endBlock)
{
  if (beginBlock > endBlock)
  {
    let travelDistanceInFeet = (beginBlock - endBlock) * 264;
    return travelDistanceInFeet;
  }
  else
  {
    let travelDistanceInFeet = (endBlock - beginBlock) * 264;
    return travelDistanceInFeet;
  }
}

function calculatesFarePrice (beginBlock, endBlock)
{
  const distanceAmount = distanceTravelledInFeet(beginBlock, endBlock);

  if (distanceAmount <= 400)
  {
    return 0;
  }
  else if (distanceAmount > 400 && distanceAmount <= 2000)
  {
    let fareAmount = 0.02 * (distanceAmount - 400);
    return fareAmount;
  }
  else if (distanceAmount > 2000 && distanceAmount < 2500)
  {
    return 25;
  }
  else
  {
    return "cannot travel that far";
  }
}
