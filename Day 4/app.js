var fs = require("fs");
var text = fs.readFileSync("./Day 4/input.txt").toString('utf-8');

function parse_input(pi) {
    var lines = pi.split('\n').map(String);
    var order = lines[0].split(',').map(Number);
    var boards = [];
    var board = [];
    for (var line of lines.slice(2)) {
        if (line.length === 0) {
            boards.push(board);
            board = [];
            continue;
        }
        var row = line.split(' ').filter(function(value) { return value.trim().length > 0; }).map(Number);
        board.push(row);
    }
    boards.push(board);
    return {order: order, boards: boards};
}

function mark_board(board, e) {
    for(var i = 0; i < board.length; i++) {
        for(var j = 0; j < board[0].length; j++) {
            if (board[i][j] === e) {
                board[i][j] = null;
            }
        }
    }
}

function is_solved(board) {
    for(var i = 0; i < board.length; i++) {
        var rc = 0;
        for(var j = 0; j < board[0].length; j++) {
            if (board[i][j] === null) {
                rc += 1;
            }
        }
        if (rc === board[0].length) {
            return true;
        }
    }
    for (var j = 0; j < board[0].length; j++) {
        var cc = 0;
        for (var i = 0; i < board.length; i++) {
            if (board[i][j] === null) {
                cc += 1;
            }
        }
        if (cc === board.length) {
            return true;
        }
    }
    return false;
}

function calculate_score(board) {
    var s = 0;
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (board[i][j] !== null) {
                s += board[i][j];
            }
        }
    }
    return s;
}

function score(order, boards, n) {
    var winners = new Set();
    for (var e of order) {
        var index = -1;
        for (var board of boards) {
            index += 1;
            if (winners.has(index)) continue;
            mark_board(board, e);
            if (is_solved(board)) winners.add(index);
            if (winners.size === n) return calculate_score(board) * e;
        }
    }
}

function part1(pi) {
    var data = parse_input(pi);
    var ans = score(data["order"], data["boards"], 1);
    console.log(`part1: ${ans}`);
}

function part2(pi) {
    var data = parse_input(pi);
    var ans = score(data["order"], data["boards"], data["boards"].length);
    console.log(`part2: ${ans}`);
}

part1(text);
part2(text);

