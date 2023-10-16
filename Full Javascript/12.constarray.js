const myArray = [1, 2, 3];

// เรียกใช้งาน myArray
console.log(myArray); // Output: [1, 2, 3]

// เปลี่ยนแปลงสมาชิกใน myArray ได้
myArray[0] = 10;
console.log(myArray); // Output: [10, 2, 3]

// แต่ไม่สามารถเปลี่ยนค่าของ myArray เป็นอาร์เรย์ใหม่ได้
// ต่อไปนี้จะทำให้เกิด Error
// myArray = [4, 5, 6]; // Error

// แต่สามารถเพิ่มหรือลบสมาชิกใน myArray ได้
myArray.push(4);
console.log(myArray); // Output: [10, 2, 3, 4]


