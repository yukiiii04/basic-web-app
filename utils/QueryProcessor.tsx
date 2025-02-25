export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "My Andrew ID is " + "yma2"
    )
  }

  if (query.toLowerCase().includes("name")) {
    return "Yuki"
  }

  const sumMatch = query.match(/what is (\d+) plus (\d+)/i);
  if (sumMatch) {
    const num1 = parseInt(sumMatch[1], 10);
    const num2 = parseInt(sumMatch[2], 10);
    return (num1 + num2).toString();
  }

  const diffMatch = query.match(/what is (\d+) minus (\d+)/i);
  if (diffMatch) {
    const num1 = parseInt(diffMatch[1], 10);
    const num2 = parseInt(diffMatch[2], 10);
    return (num1 - num2).toString();
  }

  // Which of the following numbers is the largest: X1, X2, ...
  const largestMatch = query.match(/which of the following numbers is the largest: ([\d,\s]+)/i);
  if (largestMatch) {
    const numbers = largestMatch[1].split(",").map(num => parseInt(num.trim(), 10));
    return Math.max(...numbers).toString();
  }

  // Which of the following numbers is both a square and a cube: X1, X2, X3...
  const squareCubeMatch = query.match(/which of the following numbers is both a square and a cube: ([\d,\s]+)/i);
  if (squareCubeMatch) {
    const numbers = squareCubeMatch[1].split(",").map(num => parseInt(num.trim(), 10));
    const sixthPowers = numbers.filter(num => {
      const sixthRoot = Math.pow(num, 1 / 6);
      return Number.isInteger(sixthRoot); // Check if it's a whole number
    });
    return sixthPowers.length > 0 ? sixthPowers.join(", ") : "None";
  }

  // What is X multiplied by Y?
  const multiplyMatch = query.match(/what is (\d+) multiplied by (\d+)/i);
  if (multiplyMatch) {
    const num1 = parseInt(multiplyMatch[1], 10);
    const num2 = parseInt(multiplyMatch[2], 10);
    return (num1 * num2).toString();
  }

  //primes
  const primeMatch = query.match(/which of the following numbers are primes: ([\d,\s]+)/i);
  if (primeMatch) {
    const numbers = primeMatch[1].split(",").map(num => parseInt(num.trim(), 10));

    const isPrime = (num: number): boolean => {
      if (num < 2) return false;
      for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
    const primeNumbers = numbers.filter(isPrime);
    return primeNumbers.length > 0 ? primeNumbers.join(", ") : "None";
  }

  return "";
}
