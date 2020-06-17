// 1) What are Generics in TypeScript? Put some example of using it.

// 2) What is different between this two lines of code in actual Typescript:
let number1: number = 333
let number2 = 333

// 3) What is Rest parameters? How can we use it? Give an example.

// 4) Could you explain next definition of function?

type SomethingType<T> = {
  variable: T
}

export function setSomething<T>(num: number): SomethingType<T>
export function setSomething<T, P>(num: number, params?: P): SomethingType<T>
export function setSomething<T, P>(num: number, params?: P) {
  //...some definition code
}

const a = setSomething<number>(3)

const b = setSomething<number, string>(3, 6)

const c = setSomething<number>(3, 'foo')

const d = setSomething<number, string>(3)

// ======================================

// 1)
function identity<T>(arg: T): T {
  return arg
}
let output1 = identity<string>('edureka')
let output2 = identity<number>(117)

console.log(output1)
console.log(output2)

// 3)

function sum(a: number, ...b: number[]): number {
  let result = a
  for (var i = 0; i < b.length; i++) {
    result += b[i]
  }
  console.log(result)
}

let result1 = sum(2, 4) // 6
let result2 = sum(2, 4, 6, 8) //
