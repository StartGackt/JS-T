function callTwice (func) {
  func()
  func()
}
function callTenTimes (f) {
  for (let i = 0; i < 10; i++) {
    f()
  }
}
function rollDie () {
  const rollDie = Math.floor(Math.random() * 6) + 1
  console.log(rollDie)
}
callTwice(rollDie)
