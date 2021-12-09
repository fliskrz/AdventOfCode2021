var fs = require("fs");
var text = fs.readFileSync("./Day 5/input.txt").toString('utf-8');

function parse_input(input) {
    return input.split('\n').map(el => el.split(' -> ').join(',')).map(el => el.split(',').map(el => parseInt(el)));
}

let xs = [];
let ys = [];

for (let i=0; i<input.length; i++){
    xs.push([input[i][0],input[i][2]]);
    ys.push([input[i][1],input[i][3]]);

}

let input = parse_input(text);

let grid = [];
let temp = [];
for (let i =0; i<10; i++){
    temp = [];
    for (let j=0; j<10; j++){
        temp.push(0)
    }
    grid.push(temp);
}

console.log(input);


