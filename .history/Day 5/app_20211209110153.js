var fs = require("fs");
var text = fs.readFileSync("./Day 5/input.txt").toString('utf-8');

let input = text.split('\n').map(el => el.split(' -> ').join(',')).map(el => el.split(',').map(el => parseInt(el)));

let xs = [];
let ys = [];

for (let i=0; i<input.length; i++){
    xs.push([input[i][0],input[i][2]]);
    ys.push([input[i][1],input[i][3]]);
}

// for(let i=0; i<xs.length; i++){
//     xs[i].sort((a,b)=>a-b);
//     ys[i].sort((a,b)=>a-b);
// }


let grid = [];
let temp = [];
for (let i =0; i<10; i++){
    temp = [];
    for (let j=0; j<10; j++){
        temp.push(0)
    }
    grid.push(temp);
}


// for (let i=0; i<xs.length; i++){
//     if(xs[i][0] == xs[i][1]){
//         for(let j=Math.min(...ys[i]); j<=Math.max(...ys[i]); j++){
//             grid[xs[i][0]][ys[i][j]]++;
//         }
//     }

    // if(ys[i][0] == ys[i][1]){
    //     for(let j=Math.min(...xs[i]); j<=Math.max(...xs[i]); j++){
    //         grid[xs[i][j]][ys[i][0]]++;
    //     }
    // }
// 
for(let i=0; i<xs.length; i++){
    if(xs[i][0]==xs[i][1]){
        for(let j=Math.min(...ys[i]); j<=Math.max(...ys[i]); j++){
            grid[j][xs[i][0]]++;
        }
    }else if(ys[i][0]==ys[i][1]){
        for(let j=Math.min(...xs[i]); j<=Math.max(...xs[i]); j++){
            grid[ys[i][0]][j]++;
        }
    }else{
        if(xs[i][0]<xs[i][1]){
            if(ys[i][0]<ys[i][1]){
                let temp = ys[i][0]
                for(let j=xs[i][0]; j<=xs[i][1]; j++){
                    grid[temp][j]++;
                    temp++;
                }
            }
            if(ys[i][0]>[ys[i][1]]){
                let temp = ys[i][0];
                for(let j=xs[i][0]; j<=xs[i][1]; j++){
                    grid[temp][j]++;
                    temp--;
                }
            }
        }
        if(xs[i][0]>xs[i][1]){
            if(ys[i][0]<ys[i][1]){
                let temp = ys[i][0]
                for(let j=xs[i][0]; j>=xs[i][1]; j--){
                    grid[temp][j]++;
                    temp++;
                }
            }
            if(ys[i][0]>[ys[i][1]]){
                let temp = ys[i][0];
                for(let j=xs[i][0]; j>=xs[i][1]; j--){
                    grid[temp][j]++;
                    temp--;
                }
            }
        }        
    }
}

let result = 0;

for(let i=0; i<grid.length; i++){
    for(let j=0; j<grid[i].length; j++){
        if(grid[i][j]>1){
            result++;
        }
        if(grid[i][j]==0){
            grid[i][j] = '.';
        }
    }
}
for(let i=0; i<grid.length; i++){
    console.log(grid[i][0], grid[i][1], grid[i][2], grid[i][3], grid[i][4], grid[i][5], grid[i][6], grid[i][7], grid[i][8], grid[i][9]);
}
console.log(result);


// if(xs[i][0]<xs[i][1]){
//     if(ys[i][0]<ys[i][1]){
//         let temp = ys[i][0]
//         for(let j=xs[i][0]; j<=xs[i][1]; j++){
//             grid[j][temp]++;
//             temp++;
//         }
//     }
//     if(ys[i][0]>[ys[i][1]]){
//         let temp = ys[i][0];
//         for(let j=xs[i][0]; j<=xs[i][1]; j++){
//             grid[j][temp]++;
//             temp--;
//         }
//     }
// }

// if(xs[i][0]>xs[i][1]){
//     if(ys[i][0]<ys[i][1]){
//         let temp = ys[i][0]
//         for(let j=xs[i][0]; j<=xs[i][1]; j--){
//             grid[j][temp]++;
//             temp++;
//         }
//     }
//     if(ys[i][0]>[ys[i][1]]){
//         let temp = ys[i][0];
//         for(let j=xs[i][0]; j<=xs[i][1]; j--){
//             grid[j][temp]++;
//             temp--;
//         }
//     }
// }
