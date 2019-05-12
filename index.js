// Code your solution in this file!
function distanceFromHqInBlocks(loc){
let hq = 42
let distance
distance = Math.abs(loc - hq)
return distance
}

function distanceFromHqInFeet(loc){
  let hq = 42
  let distance
  distance = Math.abs(loc - hq) * 264
  return distance
}

function distanceTravelledInFeet(start,end){
  let distance
  distance = Math.abs(start - end) * 264
  return distance
}

function calculatesFarePrice(start, end){
  let fare
  let distance = distanceTravelledInFeet(start, end)
  if (distance  <= 400 ){
    fare = 0
    return fare
  } else if ( 400 <= distance && distance <= 2000){
    fare = 0.02  * (distance - 400)
    return fare
  }  else if (distance > 2000 && distance < 2500) {
    fare = 25
    return fare
  } else if (distance > 2500) {
    return "cannot travel that far"
  }

}
