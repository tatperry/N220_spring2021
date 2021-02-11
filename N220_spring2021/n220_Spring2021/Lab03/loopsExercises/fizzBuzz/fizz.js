// Tatiana Perry
// NEWM-N220
// LAB 3
// LOOPS EXERCISES
// FEBRUARY 11, 2021

// variable 1-100 of numbers 
let start = 1,
    end = 100,
    i;
// letting it go to 100 
for (i = start; i <= end; i++) {
  let str = '';
  // anything divided by 3 is fizz
  if (i % 3 == 0) str += 'Fizz';
  // anything divided by 5 is buzz
  if (i % 5 == 0) str += 'Buzz';
  // anything divided by both 3 and 5 is both words
  if (str.length === 0) str = i;
  // running the code
  console.log(str);
}