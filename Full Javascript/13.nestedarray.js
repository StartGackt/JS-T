//* *  Multi-Dimensional Arrays */
// สร้างอาร์เรย์หลายมิติ 2x2
const matrix = [
  [1, 2],
  [3, 4]
]

console.log(matrix[0][0]) // Output: 1
console.log(matrix[0][1]) // Output: 2
console.log(matrix[1][0]) // Output: 3
console.log(matrix[1][1]) // Output: 4

// สร้างอาร์เรย์หลายมิติ 3x3x3
const cube = [
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ],
  [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18]
  ],
  [
    [19, 20, 21],
    [22, 23, 24],
    [25, 26, 27]
  ]
]

console.log(cube[0][1][2]) // Output: 6
console.log(cube[2][0][1]) // Output: 20
