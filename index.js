// Code your solution in this file!
function distanceFromHqInBlocks(block){
    return Math.abs(block-42)
}
function distanceFromHqInFeet(someValues){
    return Math.abs(someValues - 42) *264
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination-start) *264
}
function calculatesFarePrice(start, destination){
    let Distance = Math.abs((destination - start)*264);
    if(Distance <400){
        return 0;
    }else if(Distance>= 400 && Distance<= 2000){
        return Math.abs((Distance - 400) * 0.02);
    }else if(Distance > 2000 && Distance <=2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
}
