// ตัวอย่างข้อมูลที่จะใช้กรอง
const data = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 22 },
  { id: 4, name: 'David', age: 35 }
]

// ฟังก์ชันกรองข้อมูลโดยให้คืนรายการที่มีอายุมากกว่าหรือเท่ากับ 30 ปี
function filterByAge (data) {
  return data.filter((item) => item.age >= 30)
}

// เรียกใช้งานฟังก์ชันการกรองและแสดงผลลัพธ์
const filteredData = filterByAge(data)
console.log(filteredData)
