function betterThanAverage(classPoints, yourPoints) {
  const avg = classPoints.reduce((a,b)=>a+b) / classPoints.length;
  return yourPoints > avg;
  
}
​