const a = [1, 3, 5, 7];
const b = [2, 4, 6, 8];
//spread operatro
const c = [...a, ...b];
console.log(c);

//rest operator
let [aa, ...bb] = a;
console.log(aa);
console.log(bb);
