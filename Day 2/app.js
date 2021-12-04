var fs = require("fs");
var text = fs.readFileSync("./2/input.txt").toString('utf-8');
var input = text.split("\n");

let direction = [];
let value = [];
let horizontal = 0, depth = 0;

for (let i=0; i < input.length; i++){
    direction.push(input[i].split(' ')[0])
    value.push(parseInt(input[i].split(' ')[1]))
}

console.log(direction);
console.log(value);

//part 1

for (let j=0; j<input.length; j++){
    switch (direction[j]) {
        case 'forward':
            horizontal += value[j];
            console.log('horizontal =',horizontal);
            break;
        case 'down': 
            depth += value[j];
            console.log('depth =', depth);
            break;
        case 'up':
            depth -= value[j];
            console.log('depth =', depth);
            break;
    }
}

console.log(horizontal, depth, 'result =', horizontal*depth);
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
//part 2

horizontal = 0;
depth = 0;
let aim = 0;

for (let k=0; k<input.length; k++){
    switch (direction[k]) {
        case 'forward':
            horizontal += value[k];
            depth += value[k]*aim;
            console.log('horizontal =',horizontal);
            console.log('depth =', depth);
            break;
        case 'down': 
            aim += value[k];
            console.log('aim =', aim);
            break;
        case 'up':
            aim -= value[k];
            console.log('aim =', aim);
            break;
    }
}

console.log(horizontal, depth, 'result =', horizontal*depth);