var fs = require("fs");
var text = fs.readFileSync("./Day 5/input.txt").toString('utf-8');

function parse_input(input) {
    return input.split('\n').map(el => el.split(' -> ').join(',')).map(el => el.split(','));
}

parse_input(text);

let grid = [];
let temp = [];
for (let i =0; i<1000; i++){
    temp = [];
    for (let j=0; j<1000; j++){
        temp.push('.')
    }
    grid.push(temp);
}

console.log(grid);