// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    const hq = 42;
    const distanceTravelled = Math.abs(hq - distance);
    return distanceTravelled;    
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start)*264)
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination)
    if (distanceInFeet > 400 && distanceInFeet < 2000) {
        const farePrice = (distanceInFeet - 400) * .02
        return farePrice;
    } else if (distanceInFeet > 2500) {
        return "cannot travel that far"
    } else if (distanceInFeet > 2000) {
        const farePrice2 = 25
        return farePrice2;
  } else if (distanceInFeet <= 400) {
    return 0
  }
}