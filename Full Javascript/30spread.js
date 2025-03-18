const nums = [1, 2, 3, 4, 5, 6, 2563];
Math.max(...nums); // Nan
Math.max(nums); // 2563

const cats = ["A", "B", "C", "D", "E", "F"];
const dogs = ["Ga", "Ha", "Ia", "Ja", "Ka"];

const allPets = [...cats, ...dogs];

/*copy arr  spread ค่า (spread syntax) ใน JavaScript. */
const dataFrom = {
  email: "lyhxr@example.com",
  password: "password",
  username: "Felidae",
};
const newUser = { ...dataFrom, id: 2345, isAdmin: false };

//* rest params pass agu auto */
/*function sum(){
    return arguments.reduce((total,el) => total + el)
 }*/

//*sum() ในตัวอย่างข้างบนด้วย sum(1, 2, 3, 4, 5) ทำให้ Rest parameters args มีค่าเป็น [1, 2, 3, 4, 5] และจากนั้นเราใช้ reduce() เพื่อบวกค่าทั้งหมดในอาร์เรย์นี้ เราสามารถส่งจำนวนของอาร์กิวเมนต์ที่ต้องการในฟังก์ชัน sum() โดยไม่จำกัดจำนวนที่ส่งเข้ามาได้./
function sum(...args) {
  return args.reduce((total, el) => total + el, 0);
}

const result = sum(1, 2, 3, 4, 5);
console.log(result); // ผลลัพธ์: 15

/* Destructuring แยกค่าออกจากอ็อบเจ็กต์ */
const numbers = [1, 2, 3, 4, 5];
const [first, second, , fourth] = numbers;
console.log(second); // ผลลัพธ์: 2
console.log(fourth); // ผลลัพธ์: 4

const score = [888, 777, 666, 555, 444];
const highScore = score[0];
const secondHighrScore = score[1];
const [gold, silver] = score;

/* Obj Destructuring  ดึงข้อมูลออกแสดง */
const user = {
  email: "lyhxr@example.com",
  password: "password",
  firstName: "Felidae",
  lastName: "Felidaeaaa",
  born: 1990,
  died: 2000,
  bio: "No eventyr bio",
  state: "Maharashtra",
};
//*เอาออกแบบน่าเบื่อ
/*const fisrstName = user.firstName;
const lastName = user.lastName;*/

//* expert
const { email, firstName, lastName, state } = user;

//* rename
/*const {firstName: fName,lastName: lName} = user;*/

//*Destructuring Params
// easy
function fullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}
//* hard
function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
