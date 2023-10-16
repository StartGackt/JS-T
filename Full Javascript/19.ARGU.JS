//* */*
function  greet (firstName, lastName){
    console.log(`hey there, ${firstName} ${lastName[0]}.`);
}

/*Repeat('You' , 3 )

function repeat(str, numTimes){
    let result = '';
    for(let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}*/


let totalEggs =0;
function collectEggs(){
    totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);
