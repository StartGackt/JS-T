//** for loop */
for (let i = 1; i <= 6; i++) {
    console.log("Da ba dee da ba daa");
  }

for (let i = 0; i <= 20; i+=2){
    console.log("i");
  }

  for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
  } // 25 20 15 10 5 0
  
  for (let i = 0; i < animals.length; i++) {
    console.log(i , animals[i]);
  } 

  //* Nested Loops */
   const seatingChart = [
    ['kri', 'erit', 'num'],
    ['kri1', 'erit1', 'num1'],
    ['kri2', 'erit2', 'num2'],
    ['kri3', 'erit3', 'num3'],
    ['kri4', 'erit4', 'num4'],
    ['kri5', 'erit5', 'num5'],
    ['kri6', 'erit6', 'num6'],
   ]
   for (let i =0; i< seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`${row[i]}: ${row[j]}`);//** ดึงค่าตัวแปร แบบ str `` */
    for (let j = 0; j < row.length; j++) {
          console.log(row[j]);
        }
   }