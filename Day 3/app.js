var fs = require("fs");
var text = fs.readFileSync("./Day 3/input.txt").toString('utf-8');
var input = text.split("\n");

let counter0 = 0, counter1 = 0;
let gamma ='', epsilon='';
//part 1

for(let j=0;j<input[0].length; j++){
    console.log(j);
    counter0 = 0;
    counter1 = 0;
    for (let i=0; i<input.length; i++){
        if(input[i][j]=='0'){
            counter0++;
        }
        else{
            counter1++;
        }
    }
    if(counter0>counter1){
        gamma+='0';
        epsilon+='1';
    }
    else{
        gamma+='1';
        epsilon+='0';
    }
}

gamma = parseInt(gamma, 2);
epsilon = parseInt(epsilon, 2);
result = gamma*epsilon;

console.log(result);

//part 2

counter0 = 0;
counter1 = 0;
let oxygen = input, co2 = input;

function getOxygen(arr, num){
    counter0 = 0;
    counter1 = 0;
    let array = [];

    for (let i=0; i<arr.length; i++){
        if(arr[i][num]=='0'){
            counter0++;
        }
        else{
            counter1++;
        }
    }
    if(counter0>counter1){
        for(let x=0; x<arr.length; x++){
            if(arr[x][num] == '0'){
                array.push(arr[x]);
            }
        }
    }
    else{
        for(let x=0; x<arr.length; x++){
            if(arr[x][num] == '1'){
                array.push(arr[x]);
            }
        }
    }
    
    return array;
}

function getCO2(arr, num){
    counter0 = 0;
    counter1 = 0;
    let array =[];

    for (let i=0; i<arr.length; i++){
        if(arr[i][num]=='0'){
            counter0++;
        }
        else{
            counter1++;
        }
    }
    if(counter0>counter1){
        for(let x=0; x<arr.length; x++){
            if(arr[x][num] == '1'){
                array.push(arr[x]);
            }
        }
    }
    else{
        for(let x=0; x<arr.length; x++){
            if(arr[x][num] == '0'){
                array.push(arr[x]);
            }
        }
    }
    console.log(array);
    return array;
}

for(let k=0; k<input[0].length; k++){
    if (oxygen.length != 1){
        oxygen = getOxygen(oxygen, k);
    }

    if (co2.length != 1){
        co2 = getCO2(co2, k);
    }
}



console.log(parseInt(oxygen[0], 2) * parseInt(co2[0], 2));