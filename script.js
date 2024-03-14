// The initial numbers that must be verified.
const n1 = 7; 
const n2 = 15;
const n3 = 25;
const n4 = 3;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;


// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;


// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


//   const n1 = 7; 
//   const n2 = 15;
//   const n3 = 25;
//   const n4 = 3;

  // Check if all numbers are divisible by 5. Cache the result in a variable.
const isFiveDivisible = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
console.log(isFiveDivisible)

// Second Bullet point - Check if the first number is larger than the last. Cache the result in a variable.
let isLrg = (n1 > n4);
console.log(isLrg)

let check = (((n2 - n1) * n3) % n4);
console.log(check)

const totalDistanceTravel = 1500;
const costPerGallon = 3;
const budget = 175;

const mpg55 = 30; //At 55 miles per hour you get 30 miles per gallon.
const mpg60 = 28; //At 60 miles per hour, you get 28 miles per gallon.
const mpg75 = 23; //At 75 miles per hour, you get 23 miles per gallon.

const gallonsUsedAt55mph = totalDistanceTravel / mpg55; 
const gallonsUsedAt60mph = totalDistanceTravel / mpg60;
const gallonsUsedAt75mph = totalDistanceTravel / mpg75;

const fuelCostAt55mph = gallonsUsedAt55mph * costPerGallon;
const fuelCostAt60mph = gallonsUsedAt60mph * costPerGallon;
const fuelCostAt75mph = gallonsUsedAt75mph * costPerGallon;


