// * ===============================1========================================

/*
 ? look at the code below:                                                                                 
 ? make a sentence by concatenating the object keys                              
*/
const object1 = {
  ali: "name",
  writes: "does what",
  novels: "kind of book",
};

let one = Object.keys(object1);

console.log(...one);

// output => 'ali writes novels'
