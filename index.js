// Code your solution in this file!
let distanceFromHqInBlocks = (input) => {
  return Math.abs(42 - input);
} 

let distanceFromHqInFeet = (input) => {
  return distanceFromHqInBlocks(input) * 264;
}

let distanceTravelledInFeet = (s,e) => {
  return Math.abs(s - e) * 264;
}

let calculatesFarePrice = (s, e) => {
  let distance = distanceTravelledInFeet(s, e);
  if (distance <= 400) {
    return 0;
  }
  else if (distance > 400 && distance <= 2000) {
    distance -= 400;
    return distance * .02;
  }
  else if (distance > 2000 && distance <= 2500) {
    return 25;
  }
  else {
    return "cannot travel that far";
  }
}