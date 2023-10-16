//**make an empty array */ 
let student = [];

//** An array of str */
let color = ["red", "blue", "green", "yellow"];

//** An array of number */
let number = [1, 2, 3, 4, 5];
 
//** A mixed array */
let mixed = ["red", 1, true];

//* push and pop */
//!SECTION  push - add to end of array
//!SECTION   pop - remove from end of array
 //!SECTION shift -remove from start of array
//!SECTION Unshift - add to start of array

//** push */
let movieLine = ["The Matrix", "The s"];
//** เพิ่มปกติ */
movieLine[2] = "The onion";
movieLine //**["The Matrix", "The s", "The onion"] */
//** function */
movieLine.push("The omnivore");

//** pop */
// Original array
const myArray = [1, 2, 3, 4, 5];

// Using pop() method
const removedElement = myArray.pop();

console.log("Removed element:", removedElement); // Output: Removed element: 5
console.log("Updated array:", myArray); // Output: Updated array: [1, 2, 3, 4]

//** shift /
// Original array
const myArrays = [1, 2, 3, 4, 5];

// Using the shift() method
const removedElements = myArrays.shift();

console.log("Removed element:", removedElement); // Output: Removed element: 1
console.log("Updated array:", myArray); // Output: Updated array: [2, 3, 4, 5]

//** unshift */
// Original array
const myArraysas = [2, 3, 4, 5];

// Using the unshift() method to add elements
const newLength = myArraysas.unshift(1, 0);

console.log("Updated array:", myArray); // Output: Updated array: [1, 0, 2, 3, 4, 5]
console.log("New length of the array:", newLength); // Output: New length of the array: 6

//**concat */
// Arrays to be concatenated
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

// Using the concat() method to merge the arrays
const mergedArray = array1.concat(array2, array3);

console.log("Merged array:", mergedArray); // Output: Merged array: [1, 2, 3, 4, 5, 6, 7, 8, 9]

//** indexof หากไม่พบสมาชิกที่ระบุในอาร์เรย์ จะคืนค่า -1 */
// Original array
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// Using the indexOf() method to find the index of an element
const indexOrange = fruits.indexOf("orange");
console.log("Index of 'orange':", indexOrange); // Output: Index of 'orange': 2

const indexGrape = fruits.indexOf("grape");
console.log("Index of 'grape':", indexGrape); // Output: Index of 'grape': 3

const indexMango = fruits.indexOf("mango");
console.log("Index of 'mango':", indexMango); // Output: Index of 'mango': -1

//** includes ช้สำหรับตรวจสอบว่าอาร์เรย์มีสมาชิกที่ระบุหรือไม่ มันจะคืนค่า true หากสมาชิกที่ระบุอยู่ในอาร์เรย์ และคืนค่า false หากไม่พบสมาชิกที่ระบุ  */
// อาร์เรย์ต้นฉบับ
const fruitsa = ["apple", "banana", "orange", "grape", "kiwi"];

// ใช้เมธอด includes() เพื่อตรวจสอบสมาชิก
console.log(fruitsa.includes("orange")); // Output: true
console.log(fruitsa.includes("grape")); // Output: true
console.log(fruitsa.includes("mango")); // Output: false

//** reverse  กลับด้าน*/
// Original array
const myArraysav = [1, 2, 3, 4, 5];

// Using the reverse() method to reverse the array
myArraysav.reverse();

console.log("Reversed array:", myArray); // Output: Reversed array: [5, 4, 3, 2, 1]

//**slice สร้างสำเนาของส่วนหนึ่งของอาร์เรย์ โดยเมธอดนี้จะไม่แก้ไขอาร์เรย์ต้นฉบับแต่จะคืนค่าสำเนาของส่วนที่เลือกมา ตำแหน่งของส่วนที่เลือกมีการระบุด้วยดัชนี (index) ของอาร์เรย์ */
 // อาร์เรย์ต้นฉบับ
const myArrayasd = [1, 2, 3, 4, 5];

// ใช้เมธอด slice() เพื่อสร้างสำเนาของส่วนที่เลือกมา
const newArrayasd = myArrayasd.slice(1, 4);

console.log("อาร์เรย์ที่เลือกมา:", newArray); // Output: อาร์เรย์ที่เลือกมา: [2, 3, 4]

//* อีกแบบ  */
const myArrayheros = [1, 2, 3, 4, 5];

// ใช้เมธอด slice() โดยไม่ระบุดัชนีเริ่มต้นและดัชนีสุดท้าย
const newArray1 = myArray.slice();
console.log("สำเนาทั้งหมดของอาร์เรย์ต้นฉบับ:", newArray1); // Output: สำเนาทั้งหมดของอาร์เรย์ต้นฉบับ: [1, 2, 3, 4, 5]

// ใช้เมธอด slice() โดยไม่ระบุดัชนีสุดท้าย
const newArray2 = myArray.slice(2);
console.log("สำเนาของส่วนที่เลือกตั้งแต่ดัชนี 2:", newArray2); // Output: สำเนาของส่วนที่เลือกตั้งแต่ดัชนี 2: [3, 4, 5]

// ใช้เมธอด slice() โดยไม่ระบุดัชนีเริ่มต้น
const newArray3 = myArray.slice(0, 3);
console.log("สำเนาของส่วนที่เลือกจนถึงดัชนี 2:", newArray3); // Output: สำเนาของส่วนที่เลือกจนถึงดัชนี 2: [1, 2, 3]

//**Splice*/
let fruitsas = ['apple', 'banana', 'orange', 'grape'];

// ลบสมาชิกที่ index 1 (banana)
fruits.splice(1, 1);
console.log(fruits); // Output: ['apple', 'orange', 'grape']

// เพิ่มสมาชิก 'kiwi' ที่ index 2
fruits.splice(2, 0, 'kiwi');
console.log(fruits); // Output: ['apple', 'orange', 'kiwi', 'grape']

// แทนที่สมาชิกที่ index 0 ('apple') ด้วย 'pear'
fruits.splice(0, 1, 'pear');
console.log(fruits); // Output: ['pear', 'orange', 'kiwi', 'grape']









