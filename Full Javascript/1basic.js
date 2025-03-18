/* basic javascript
1.Primtive Type
-Number,String,Boolean,Null,Undefined */

/* ์Number */
const x = 10 // จำนวนเต็ม
const y = 3.14 // ทศนิยม

/* string */
const message = 'Hello, world!' // ประกาศตัวแปร message และกำหนดค่าเป็นข้อความ "Hello, world!" ใน JavaScript

/* boolean */

const isTrue = true
const isFalse = false

/* null */

const nullVar = null

/* undefined */
let o // ประกาศตัวแปร x โดยไม่กำหนดค่า
console.log(o) // แสดงผลค่าของ x จะได้ผลลัพธ์เป็น "undefined"

/* Nan */
0 / 0 // nan
1 + NaN // nan

/* question */
4 +
  (3 * 4) /
    2(
      /* ทำคูณก่อนและหารค่อยบวก */
      13 % 5
    ) **
      2
/* 13 mod 6 ? > 5ไป13กี่ครั้งตัวคูณใกล้ที่สุดจะเป็น10 เศษ10กับ13เหลือ3  **คือเลขชี้กำลัง ได้เท่ากับสามกำลัง2 ได้เท่ากับ 3*3=9 */
