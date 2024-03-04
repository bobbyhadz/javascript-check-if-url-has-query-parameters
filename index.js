// EXAMPLE 1 - Check if a URL has Query Parameters in JavaScript

function hasQueryParams(url) {
  return url.includes('?');
}

// 👇️ true
console.log(
  hasQueryParams('https://bobbyhadz.com?page=10&limit=5'),
);

// 👇️ false
console.log(hasQueryParams('https://bobbyhadz.com'));

if (hasQueryParams('https://bobbyhadz.com?page=100&limit=5')) {
  // 👇️ this runs
  console.log('The URL has query parameters');
} else {
  console.log('The URL has NO query parameters');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if a URL has Query Parameters using indexOf

// const url = 'https://example.com?page=10&limit=5';

// function hasQueryParams(url) {
//   return url.indexOf('?') !== -1;
// }

// // 👇️ true
// console.log(
//   hasQueryParams('https://example.com?page=10&limit=5'),
// );

// // 👇️ false
// console.log(hasQueryParams('https://example.com'));
