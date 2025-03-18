//* Creating Object Literals  */
// สร้าง Object Literal โดยกำหนดคุณสมบัติของ person
const person = {
  name: 'John',
  age: 30,
  gender: 'male',
  greet: function () {
    console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`)
  }
}

// เข้าถึงค่าของคุณสมบัติของ person
console.log(person.name) // Output: John
console.log(person.age) // Output: 30

// เรียกใช้งานเมธอดของ person
person.greet() // Output: Hello, my name is John. I am 30 years old.

//* * Accessing Data Out Of Objects  */
const years = { 1999: 'good', 2000: 'medium', 2001: 'bad' }
console.log(years[2000]) // Output: medium

//* * Nesting Arrays & Objects  */
