var fs = require("fs");
var text = fs.readFileSync("./Day 5/input.txt").toString('utf-8');

function parse_input(input) {
    return input.split('\n').map(el => el.split(' -> ').join(',')).map(el => el.split(',').map(el => parseInt(el)));
}
let input = parse_input(text);
let xs = [];
let ys = [];

for (let i=0; i<input.length; i++){
    xs.push([input[i][0],input[i][2]]);
    ys.push([input[i][1],input[i][3]]);
}
console.log(xs);
console.log(ys);

let grid = [];
let temp = [];
for (let i =0; i<10; i++){
    temp = [];
    for (let j=0; j<10; j++){
        temp.push(0)
    }
    grid.push(temp);
}

console.log(grid);

for (let i=0; i<xs.length; i++){
    if(xs[i][0] == xs[i][1]){
        for(let j=Math.min(...ys[i]); j<=Math.max(...ys[i]); j++){
            console.log(xs[i][0], ys[i][j]);
            grid[xs[i][0]][ys[i][j]]++;
        }
    }

    // if(ys[i][0] == ys[i][1]){
    //     for(let j=Math.min(...xs[i]); j<=Math.max(...xs[i]); j++){
    //         grid[xs[i][j]][ys[i][0]]++;
    //     }
    // }
}

console.log(grid);

