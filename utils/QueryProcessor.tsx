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

  const largestMatch = query.match(/which of the following numbers is the largest: ([\d,\s]+)/i);
  if (largestMatch) {
    const numbers = largestMatch[1].split(",").map(num => parseInt(num.trim(), 10));
    return Math.max(...numbers).toString();
  }

  const squareCubeMatch = query.match(/which of the following numbers is both a square and a cube: ([\d,\s]+)/i);
  if (squareCubeMatch) {
    const numbers = squareCubeMatch[1].split(",").map(num => parseInt(num.trim(), 10));
    const sixthPowers = numbers.filter(num => {
      const root = Math.round(num ** (1 / 6)); // Find the 6th root
      return root ** 6 === num; // Check if raising it back results in the original number
    });
    return sixthPowers.length > 0 ? sixthPowers.join(", ") : "None";
  }

  return "";
}
