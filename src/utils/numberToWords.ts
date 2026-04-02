export function numberToWords(num: number): string {
  if (num === 0) return "zero";

  const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  function convertLessThanThousand(n: number): string {
    if (n === 0) return "";
    if (n < 20) return ones[n];
    if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + ones[n % 10] : "");
    return ones[Math.floor(n / 100)] + " hundred" + (n % 100 !== 0 ? " and " + convertLessThanThousand(n % 100) : "");
  }

  let result = "";
  
  // Crore
  if (num >= 10000000) {
    result += convertLessThanThousand(Math.floor(num / 10000000)) + " crore ";
    num %= 10000000;
  }
  
  // Lakh
  if (num >= 100000) {
    result += convertLessThanThousand(Math.floor(num / 100000)) + " lakh ";
    num %= 100000;
  }
  
  // Thousand
  if (num >= 1000) {
    result += convertLessThanThousand(Math.floor(num / 1000)) + " thousand ";
    num %= 1000;
  }
  
  // Hundreds and below
  result += convertLessThanThousand(num);

  return result.trim().charAt(0).toUpperCase() + result.trim().slice(1) + " taka only.";
}
