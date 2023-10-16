/*Variable = ตัวแปรเก็บข้อมูล */

let someName = value; 
let year = 1985; 

/* Recall Values = ตัวแปรมากกว่า1*/
let hans = 4;
let roosters =8;
hens+ roosters // 12

/*Update Variables*/
/*basic*/
let score =0;
score = score + 5;

/*advance*/
score +=5; 
score -=5;
score *=5;
score /=5;

/*question*/
let a =10;
a--; //ลบทีละ1
a++; //บวกทีละ1

/* i++ vs ++i */
i++ /*post-increment >= postfix ตอนใช้จะคืนค่าปัจจุบันของตัวแปรก่อนแล้วจึงเพิ่มทีละ1*/
/*let i = 0;
i++; //0
i //1
// i++ คืนค่าก่อนเพิ่มค่า*/
//let i =5;
let result = i++;
result; // 5
i //6

++i;// การเพิ่มล่วงหน้า โดยจะเพิ่มค่าตัวแปรทีละค่าก่อนจึงค่อยส่งคืนค่าเพิ่มขึ้นหลังจากนั้น
//let i =0;
++i;//1
i//1

let i =2;
let results = ++i;
results; // 2
i //6

/*const = ค่าคงที่, let = เปลี่ยนค่าได้ */
const pi =3.14
const dayInWeek = 7;

/*Booleans */

let isTrue = true;
let isFalse = false;
