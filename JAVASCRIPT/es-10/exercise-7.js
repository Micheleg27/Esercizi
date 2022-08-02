function sumUntil(maxValue) {
  let finalsum = 0;

  for (let i = 1; i < maxValue+1; i++) {
    //finalsum = finalsum + i;  
    finalsum += i;  
  }
  return finalsum;
}

console.log(sumUntil(5));