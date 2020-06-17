// 1) How does TypeScript support optional parameters in function?

// 2) How can you debug a TypeScript file?

// 3) What is the Default Parameters Function in TypeScript, write an example.

// =================================

// 3)
let discountFn = function (price: number, rate = 2) {
  return price * rate
}
discountFn(500) // Result - 1000
discountFn(500, 0.5) // Result - 250
