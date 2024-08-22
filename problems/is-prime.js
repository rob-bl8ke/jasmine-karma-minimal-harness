const isPrime = (num) => {
    if (num < 2) return false;
  
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) return false;
    }
    
    return true;
};

module.exports = {
    isPrime: isPrime
};
