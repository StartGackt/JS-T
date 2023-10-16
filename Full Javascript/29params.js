//*แบบเก่าน่าเบื่อ*/
/*function rollDie(numSides) {
    if (numSides === undefined) { 
        numSides =6
    }
    return Math.floor(Math.random() * numSides) + 1;
}*/

//*แบบใหม่*/ 
function rollDie(numSides=6) {
    return Math.floor(Math.random() * numSides) + 1;
}

function greet( person, msg = "Hey there",punc= '!' ) {
    return `${person}! ${msg}${punc}`;
}
