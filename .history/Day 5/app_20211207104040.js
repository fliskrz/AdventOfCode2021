var fs = require("fs");
var text = fs.readFileSync("./Day 4/input.txt").toString('utf-8');

function parse_input(input) {
    return input.split(' -> ').map(el => el.split(','));
}