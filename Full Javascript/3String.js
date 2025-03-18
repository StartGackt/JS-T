/* string = ตัวหนังสือ */
const po = 'aaaaa'

/* string are index 0 1 2 3 4 ในอาเรย์ */
const po2 = 'sqwer'
po2[0] = 's'
/* logic อาเรย์ */
const phone = '(251)345-1256'
phone[0] + // "("
/* check length = ความยาวจำนวนอักขระ ไม่ใช่ดัชนีสูงสุด เริ่ม จาก1 ตัวเเรกจะไม่เป็น0 */ po2.length // 3

/* + str */
'aaaa' + 'aaaaa' // "aaaaaaaaa"
const frist = 'op'
const last = 'po'
frist + last // "oppo"

/* วิธีเว้นวรรค */
frist + ' ' + last // "op po"

/* num + str */
5 + 'aaaaa' // "5aaaaa"

/* check num+str */
const result = 5 + 'aaaaa'
result // "5aaaaa"
typeof result // "string"
typeof 5 // "number"
