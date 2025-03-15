const arrr = [1, 2, 3, 4, 5];
arrr.forEach((element, index, arr)=>{
    console.log(element, index, arr)
    
})

const arr = [10, 20, 30, 40, 50];
arr.forEach((element)=>{
    console.log(element);
})

//for loop
for (let i = 0; i < arrr.length; i++){
    console.log(arrr[i]);
}

//for of loop
//prints the elements of the array
//white means string, colored/yellow means number
for (let elem of arrr){
    console.log(elem);
}

//for in loop
//prints the index of the array
for (let index in arrr){
    console.log(index, arrr[index]);
}

let i = 0;
while (i < arrr.length){
    console.log(arrr[i]);
    i++;
}

// console.log(i);
i = 0;
do{
    console.log(arrr[i]);
    i++;
}
while(i < arrr.length);


