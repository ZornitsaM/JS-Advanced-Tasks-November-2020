
function solve(steps,stepLenght,speed){

  let distanceInMeters = steps*stepLenght;
  let speedForMetersInSeconds = speed/3.6;
  let rest = Math.floor(distanceInMeters/500);
  let time = distanceInMeters/speedForMetersInSeconds + rest*60;


  let timeInHours = Math.floor(time/3600);
  let timeInMinutes =Math.floor(time/60);
  let timeInSeconds = Math.ceil(time % 60)



  console.log(`${timeInHours<10?0:""}${timeInHours}:${timeInMinutes<10?0:""}${timeInMinutes}:${timeInSeconds<10?0:""}${timeInSeconds}`)
  

}


solve(2564, 0.70, 5.5);