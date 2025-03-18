/* ทุกstring จะมีชุดmethods == same */
// thing.method()
// casing
const msg = 'are you sure '
const yellMsg = msg.toUpperCase() // convert ให้เป็นตัวพิมพ์ใหญ่  msg.toUpperCase() ==thing.method()

const oat = 'Yes aM sUre '
oke.toLowerCase() // 'yes am sure' == convert to lower case for comparison
console.log(yellMsg == oat) // true check for same method

// trim same casing from thing.method() easy casing
// ตัดเริ่มต้นหรือตอนท้ายออกที่เป็นช่องว่าง ซ้ายและขวาเท่านั้น
const UserInput = '   hi hello UserInput'
UserInput.trim() // "hi hello UserInput"
'_______test'.trim() // "______test" จะไม่เปลี่ยนเพราะไม่ตรงเงื่อนไข
// conncet trim+upcase
const OaranInput = '  hi hello OaranInput'
OaranInput.trim().toUpperCase() // "HI HELLO OARANINPUT"
OaranInput.trim().toUpperCase().toLocaleLowerCase() // "hi hello Hello"

/* questionEx */
// Let's get some practice working with string methods. I've provided you with a variable in index.js called message.  Without altering the original value stored in message, please define a variable called whisper that is a lowercased version of message, with all the extra space at the beginning and end removed.  You will need to use two string methods that we just covered.  Don't forget you can chain them together on a single line!
/* sololution */
const message = 'hi hello UserInput'
const whisper = message.trim().toLowerCase()
console.log(whisper) // "hi hello user input"

thing.method(arg) // input pass to method ปรับ  arg ปรับวิธีการทำงาน

// IndexOf ได้แค่1
// ดัชนีstr เลขตำแหน่ง arg กำหนดและเกิดขึ้นจริง

const test = 'foperator'
test.indexOf = 'fop' // 0
test.indexOf = 'era' // 3
// "fop" ใน test โดยเมื่อเจอก็จะคืนค่าตำแหน่งแรกที่พบ ซึ่งในกรณีนี้เป็นตำแหน่งที่ 0 เนื่องจาก "fop" อยู่ที่ตำแหน่งแรกของ test.

// Slice same IndexOf  แต่ slice =>1
// ไวยากรณ์  pass start or stop ทางเลือก
'haha that is so index!'.slice(5) // วิธีการดูจะเริ่มจาก h ตัวแรกเป็น 0 แล้วนับต่อถึงa เป็น4 จะได้คำตอบ that is so index!
// let msg = "that is so index!";
msg.slice(5) // "that is so index!";
msg // haha that is so index!
msg.slice(5, 9); // that จะไปดัชนีที่5ขึ้นไปไม่รวมที่9

// replace แทนที่
('haha that is so index!')
msg.replace('haha', 'lololololo') // "lolololo that is so index!"

// repeat ทำซ้ำ
'lo'.repeat(10) // lolololololololololo'

/** !SECTION
 **!SECTION String Template Literals -SUPER USEFUL
 *! `hello ${data}` == string "hello data"
 *?const name = "John";
    const age = 30;

const message = `Hello, my name is ${name} and I'm ${age} years old.`;

console.log(message);

 */
