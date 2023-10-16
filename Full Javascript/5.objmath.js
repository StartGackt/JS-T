//** Math.floor ตัดทศนิยมออกไม่ได้ปัดเศษ */
Math.floor(23.90) //23

//** Math.ceil ปัดเศษขึ้น*/
Math.ceil(23.90)//24




Math.random() // 0.999999999
//**สูตรเด็ก*/
const step1 = Math.random();
const step2 = step1 * 31;
const step3 = Math.floor(step2);
const step4 = step3 + 1;

//**สูตรพรี๊ๆเองคั้บ */
const randomNumber = Math.floor(Math.random() * 31) + 1;
Math.floor(Math.random()*30) + 1; //!SECTION บรรทัดเดียวพอคั้บ

//** math.pow ยกกำลัง */
Math.pow(2, 3) // 8
