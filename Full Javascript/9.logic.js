const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf("") === -1) {
  console.log(" valid");
} else {
  console.log("invalid");
}
/*
* logic OR */
// 0-5 free
// 5-10 $10
// 10-65 $20
// 65+ free

const age = 90;
if (age >= 0 && age < 5 || age >= 65) {
  console.log("free");
} else if (age >= 5 && age < 10) {
  console.log("$10");
} else if (age >= 10 && age < 65) {
  console.log("$20");
}


/*
* Logic NOT  ครอบวงเล็บ !*/ 
let Name = prompt("Enter your first name");
if (!Name) {
    Name = prompt("TRY AGAIN"); 
}


const ag = 90;
if (!(ag >= 0 && ag < 5 || ag >= 65)) {
    console.log("YOU ARE NOT FREE");
    } 
