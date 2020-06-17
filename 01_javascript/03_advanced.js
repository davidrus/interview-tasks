// 1) Describe functionality of methods call and apply?

// 2) What will be result of this code and why?

var output = (function (x) {
  delete x;
  return x;
})(0);
console.log(output);


// 3) What will be result of this code and why?

var x = {
  foo: 1
};
var output = (function () {
  delete x.foo;
  return x.foo;
})();
console.log(output);


// 4) What is arrow function and explain benefits of using it.


// 5) What's a typical use case for anonymous functions?

(() => {
  // Some code here.
})();


















































// =============================

// 1)
const fn = (a, b, c) => console.log(a, b, c)
fn.call(window, 1, 2, 3)
fn.apply(window, [1, 2, 3])







// 4)
// Scope safety: When arrow functions are used consistently, everything is
// guaranteed to use the same thisObject as the root.










// 5)

setTimeout(function () {
  console.log('Hello world!');
}, 1000);


const arr = [1, 2, 3];
const double = arr.map((el) => {
  return el * 2;
});
console.log(double); // [2, 4, 6]