// ? 8. Use Array Destructuring to get all of the names from this Nested Array
// hint: Search about destructuring nested arrays.

const moreStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];

//! Answer :
let [first, [second, therd], [forth, fivth]] = moreStudents;

console.log(first, second, therd, forth, fivth);
