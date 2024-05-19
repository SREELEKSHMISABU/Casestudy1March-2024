function isPrime(num) {
    if (num <= 1) {
      return false; // numbers less than or equal to 1 are not prime
    }
    if (num === 2) {
      return true; // 2 is the only even prime number
    }
    if (num % 2 === 0) {
      return false; // even numbers greater than 2 are not prime
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false; // found a divisor, not prime
      }
    }
    return true; // no divisors found, number is prime
  }
  
  // Function to read the first element of an array and check if it is prime
  function checkFirstElementPrime(arr) {
    if (arr.length === 0) {
      console.log("Array is empty.");
      return;
    }
  
    const firstElement = arr[0];
  
    if (typeof firstElement !== 'number' || !Number.isInteger(firstElement)) {
      console.log("The first element is not an integer.");
      return;
    }
  
    if (isPrime(firstElement)) {
      console.log(`The first element, ${firstElement}, is a prime number.`);
    } else {
      console.log(`The first element, ${firstElement}, is not a prime number.`);
    }
  }
  
const arr = [7, 10, 5, 2];
checkFirstElementPrime(arr); 