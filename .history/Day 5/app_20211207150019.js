var fs = require("fs");
var text = fs.readFileSync("./Day 5/input.txt").toString('utf-8');

function parse_input(input) {
    return input.split('\n').map(el => el.split(' -> ').join(',')).map(el => el.split(','));
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



for (let i =0; i<input.length; i++){
    if(input[i][0] === input[i][2]){
        for(let j=input[i][1]; j<=input[i][3]; j++){
            grid[input[i][0]][j]++;
            console.log(input[i][0], j);
        }
    }
}
let result = 0;
for (let i =0; i<input.length; i++){
    for(let j=0; j<input[i].length; j++){
        if(grid[i][j] > 1){
            result++;
        }
    }
}

console.log(grid);
console.log(result);