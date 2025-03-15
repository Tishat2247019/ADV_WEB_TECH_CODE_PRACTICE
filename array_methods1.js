const a = [3, 4, 5, 6];
const newarr = a.map((x)=>{
    return x * x;
})

console.log(newarr);
const arrnew = a.filter((x)=>{
 return (x % 2 == 0)
})

console.log(arrnew);