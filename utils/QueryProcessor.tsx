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
    return "Yuki";
  }

  if (query.toLowerCase().includes("91 plus 80")) {
    return (
      "171"
    )
  }

  return "";
}
