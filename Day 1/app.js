var fs = require("fs");
var text = fs.readFileSync("./1/input.txt").toString('utf-8');
var input = text.split("\n");

//part 1

let counter=0;

for(let i =0; i<input.length-1; i++){
    if (parseInt(input[i])<parseInt(input[i+1])){
        counter++;
    }
}
console.log(counter);

//part 2

let counter2 =0;
for(let j=0; j<input.length-3;j++){
    let x = parseInt(input[j])+parseInt(input[j+1])+parseInt(input[j+2]);
    let y = parseInt(input[j+1])+parseInt(input[j+2])+parseInt(input[j+3]);
    if(x<y){
        counter2++;
    }
}

console.log(counter2);