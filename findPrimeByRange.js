function isPrime(number) {
    let start = 2;
    const limit = Math.sqrt(number);
    while (start <= limit) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}
function findPrimeByRange(a, b) {
    var prime  = []
    for (let i = a; i <= b; i++) {
      if(isPrime(i)){
          prime.push(i)
      }
    }
    return prime
}

console.log(findPrimeByRange(11, 40))
