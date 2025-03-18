/* console.log('Before app');
let randomNumber = math.randomNumber();
if (randomNumber > 0.5) {
    console.log('You win!');
    console.log(randomNumber);
}

const day0Week = 'Monday';
if (day0Week === 'Monday') {
    console.log('You win!');
    } else if (day0Week === 'Tuesday') {
        console.log('You lose!');
    } */

const password = prompt('Enter your password')

// pass must be at least 8 characters

/* if (password.length < 8) {
    console.log('Password must be at least 8 characters'){
// password can not be less than 8 characters
if (password.indexOf('') === -1) {
    console.log('Password is valid');
    }else {
        console.log('Password is invalid');
            }
            } else {
                console.log('Password must be at least 8 characters');
            }
        } */
if (password.length < 8) {
  console.log('Password must be at least 8 characters')
} else {
  if (password.indexOf(' ') === -1) {
    console.log('Password is valid')
  } else {
    console.log('Password is invalid')
  }
}

const num = 52 // Change the value of num to 52

// DO NOT TOUCH ANYTHING BELOW (please)
if (num <= 100) {
  if (num >= 50) {
    console.log('HEY!')
  } else {
    if (num < 103) {
      if (num % 2 === 0) {
        console.log('YOU GOT ME!')
      }
    }
  }
}
//* * ทุกค่าเดียวในjs ถือเป็นจริง ยกเว้นค่าต่อไปนี้  */

const app = document.getElementById('app')
app.innerHTML = '<h1>Hello World</h1>'
