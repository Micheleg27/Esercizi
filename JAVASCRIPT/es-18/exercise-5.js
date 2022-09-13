function memoize(fn) {
  let cache = {};
  return (number) => {
    if(number in cache){
      console.log('Fetching from cache for ' + number);
      return cache[number];
    }
    console.log('Calculating result for ' + number);
    const calculated = factorial(number);
    cache[number] = calculated;
    return calculated;
    
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

let factory = memoize(factorial);
console.log(factory(10));
console.log(factory(6));
console.log(factory(5));
